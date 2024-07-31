package com.hong.ForPaw.controller.DTO;

import java.time.LocalDateTime;
import java.util.List;

public class ChatResponse {

    public record FindMessageListInRoomDTO(Long lastMessageId, List<ChatResponse.MessageDTD> messages) {}

    public record MessageDTD(String messageId,
                             String senderName,
                             String content,
                             LocalDateTime date,
                             boolean isMine) {}

    public record FindChatRoomListDTO(List<ChatResponse.RoomDTO> rooms) {}

    public record RoomDTO(Long chatRoomId,
                          String name,
                          String lastMessageContent,
                          LocalDateTime lastMessageTime,
                          Long offset) {}

}
