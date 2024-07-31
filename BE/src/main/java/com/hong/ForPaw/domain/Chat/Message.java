package com.hong.ForPaw.domain.Chat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.time.LocalDateTime;

@Document
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Message implements Serializable {

    @Id
    private String id;

    private Long chatRoomId;

    private Long senderId; // 내가 보낸 메시지인지 판별을 위해 도입

    private String senderName;

    private String content;

    private LocalDateTime date;

    @Builder
    public Message(Long chatRoomId, Long senderId, String senderName, String content, LocalDateTime date) {
        this.chatRoomId = chatRoomId;
        this.senderId = senderId;
        this.senderName = senderName;
        this.content = content;
        this.date = date;
    }
}
