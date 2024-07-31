package com.hong.ForPaw.controller.DTO;

import java.time.LocalDateTime;
import java.util.List;

public class AlarmResponse {

    public record FindAlarmListDTO(List<AlarmDTO> alarms) {}

    public record AlarmDTO(Long id,
                           String content,
                           String redirectURL,
                           LocalDateTime date,
                           boolean isRead) {}
}