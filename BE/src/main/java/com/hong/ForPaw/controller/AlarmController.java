package com.hong.ForPaw.controller;

import com.hong.ForPaw.controller.DTO.AlarmRequest;
import com.hong.ForPaw.controller.DTO.AlarmResponse;
import com.hong.ForPaw.core.security.CustomUserDetails;
import com.hong.ForPaw.core.utils.ApiUtils;
import com.hong.ForPaw.service.AlarmService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class AlarmController {

    private final AlarmService alarmService;

    @GetMapping(value = "/alarms/connect", produces = "text/event-stream")
    public ResponseEntity<?> connectToAlarm(@RequestHeader(value = "Last-Event-ID", required = false, defaultValue = "") String lastEventId, @AuthenticationPrincipal CustomUserDetails userDetails){

        SseEmitter sseEmitter= alarmService.connectToAlarm(userDetails.getUser().getId().toString(), lastEventId);
        return ResponseEntity.ok(ApiUtils.success(HttpStatus.OK, sseEmitter));
    }

    @GetMapping("/alarms")
    public ResponseEntity<?> findAlarms(@AuthenticationPrincipal CustomUserDetails userDetails){

        AlarmResponse.FindAlarmsDTO responseDTO = alarmService.findAlarms(userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PostMapping("/alarms/read")
    public ResponseEntity<?> readAlarm(@RequestBody AlarmRequest.ReadAlarmDTO requestDTO, @AuthenticationPrincipal CustomUserDetails userDetails){

        alarmService.readAlarm(requestDTO.id(), userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }
}