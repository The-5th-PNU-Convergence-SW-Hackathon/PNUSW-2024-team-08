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
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class AlarmController {

    private final AlarmService alarmService;

    @GetMapping(value = "/alarms/connect", produces = "text/event-stream")
    public SseEmitter connectToAlarm(@AuthenticationPrincipal CustomUserDetails userDetails){
        SseEmitter sseEmitter= alarmService.connectToAlarm(userDetails.getUser().getId().toString());
        return sseEmitter;
    }

    @GetMapping("/alarms")
    public ResponseEntity<?> findAlarmList(@AuthenticationPrincipal CustomUserDetails userDetails){
        AlarmResponse.FindAlarmListDTO responseDTO = alarmService.findAlarmList(userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @PostMapping("/alarms/read")
    public ResponseEntity<?> readAlarm(@RequestBody AlarmRequest.ReadAlarmDTO requestDTO, @AuthenticationPrincipal CustomUserDetails userDetails, Errors errors){
        alarmService.readAlarm(requestDTO.id(), userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, null));
    }
}