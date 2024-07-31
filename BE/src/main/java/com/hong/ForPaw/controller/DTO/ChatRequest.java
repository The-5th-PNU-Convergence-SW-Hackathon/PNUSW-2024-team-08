package com.hong.ForPaw.controller.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import java.time.LocalDateTime;

public class ChatRequest {

    public record SendMessageDTO(Long chatRoomId, String content) {}

    public record MessageDTO(Long chatRoomId,
                             Long senderId,
                             String senderName,
                             String content,
                             @JsonProperty("date")
                             @JsonSerialize(using = LocalDateTimeSerializer.class)
                             @JsonDeserialize(using = LocalDateTimeDeserializer.class)
                             @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss.SSS")
                             LocalDateTime date) {}

    public record ReadMessageDTO(Long chatRoomId, Long messageId) {}
}
