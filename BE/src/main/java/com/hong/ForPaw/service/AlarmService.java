package com.hong.ForPaw.service;

import com.hong.ForPaw.controller.DTO.AlarmResponse;
import com.hong.ForPaw.core.errors.CustomException;
import com.hong.ForPaw.core.errors.ExceptionCode;
import com.hong.ForPaw.domain.Alarm.Alarm;
import com.hong.ForPaw.domain.Alarm.AlarmType;
import com.hong.ForPaw.domain.User.User;
import com.hong.ForPaw.repository.Alarm.AlarmRepository;
import com.hong.ForPaw.repository.Alarm.EmitterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AlarmService {

    private final AlarmRepository alarmRepository;
    private final EmitterRepository emitterRepository;

    private static final Long DEFAULT_TIMEOUT = 60L * 1000 * 60;

    @Transactional
    public SseEmitter connectToAlarm(String userId) { // 여기서 userId는 서버에 연결된 클라이언트의 id
        // SseEmitter 객체 생성
        String emitterId = generateIdByTime(userId);
        SseEmitter emitter = emitterRepository.save(emitterId, new SseEmitter(DEFAULT_TIMEOUT));

        // 연결 종료 시 이벤트 리소스 정리
        emitter.onCompletion(() -> emitterRepository.deleteById(emitterId));
        emitter.onTimeout(() -> emitterRepository.deleteById(emitterId));

        // 503 에러를 방지하기 위한 더미 이벤트 전송
        String eventId = generateIdByTime(userId);
        sendNotification(emitter, eventId, emitterId, "EventStream Created. [userId=" + userId + "]");

        return emitter;
    }

    @Transactional
    public AlarmResponse.FindAlarmListDTO findAlarmList(Long userId){
        List<Alarm> alarms = alarmRepository.findByReceiverId(userId);

        if(alarms.isEmpty()){
            throw new CustomException(ExceptionCode.ALARM_NOT_EXIST);
        }

        List<AlarmResponse.AlarmDTO> alarmDTOS = alarms.stream()
                .map(alarm -> new AlarmResponse.AlarmDTO(
                        alarm.getId(),
                        alarm.getContent(),
                        alarm.getRedirectURL(),
                        alarm.getCreatedDate(),
                        alarm.getIsRead() ))
                .collect(Collectors.toList());

        return new AlarmResponse.FindAlarmListDTO(alarmDTOS);
    }

    @Transactional
    public void readAlarm(Long alarmId, Long userId){
        // 존재하지 않으면 에러
        Alarm alarm = alarmRepository.findById(alarmId).orElseThrow(
                () -> new CustomException(ExceptionCode.ALARM_NOT_FOUND)
        );

        // 권한 없음
        if(!alarm.getReceiver().getId().equals(userId)){
            throw new CustomException(ExceptionCode.USER_FORBIDDEN);
        }

        alarm.updateIsRead(true);
    }

    @Transactional
    public void send(Alarm alarm) {
        // 이벤트 ID 생성
        String receiverId = alarm.getReceiver().getId().toString();
        String eventId = generateIdByTime(receiverId);

        // SSE Emitter 조회 => 사용자가 여러 기기에서 접속하여 여러 Emitter를 생성했더라도, 모든 Emitter를 찾아 알림을 전송
        Map<String, SseEmitter> emitters = emitterRepository.findAllEmitterStartWithMemberId(receiverId);

        // 각 Emitter로 알림 전송
        emitters.forEach(
                (key, emitter) -> {
                    AlarmResponse.AlarmDTO alarmDTO = new AlarmResponse.AlarmDTO(
                            alarm.getId(),
                            alarm.getContent(),
                            alarm.getRedirectURL(),
                            alarm.getCreatedDate(),
                            false);
                    sendNotification(emitter, eventId, key, alarmDTO);
                }
        );
    }

    private void sendNotification(SseEmitter emitter, String eventId, String emitterId, Object data) {
        // SseEmitter 객체를 통해 클라이언트에게 알람 이벤트를 전송
        try {
            emitter.send(SseEmitter.event()
                    .id(eventId)
                    .name("sse")
                    .data(data)
            );
        } catch (IOException exception) {
            emitterRepository.deleteById(emitterId);
        }
    }

    private void sendMissingAlarm(String lastEventId, String userId, String emitterId, SseEmitter emitter) {
        // 이벤트 캐시 조회
        Map<String, Object> eventCaches = emitterRepository.findAllEventCacheStartWithMemberId(String.valueOf(userId));

        // 누락된 알람이 있는지 캐시를 뒤져서, 누락된 알람은 다시 전송
        eventCaches.entrySet().stream()
                .filter(entry -> lastEventId.compareTo(entry.getKey()) < 0) // 결과가 음수면, lastEventId가 더 작다는 의미고, 누락된 알람이라는 뜻!
                .forEach(entry -> sendNotification(emitter, entry.getKey(), emitterId, entry.getValue()));
    }

    private String generateIdByTime(String userId) {
        return userId + "_" + System.currentTimeMillis();
    }
}