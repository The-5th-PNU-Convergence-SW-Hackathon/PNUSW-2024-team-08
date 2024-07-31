package com.hong.ForPaw.controller;

import com.hong.ForPaw.controller.DTO.ChatRequest;
import com.hong.ForPaw.controller.DTO.ChatResponse;
import com.hong.ForPaw.core.security.CustomUserDetails;
import com.hong.ForPaw.core.utils.ApiUtils;
import com.hong.ForPaw.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class ChatController {

    private final ChatService chatService;

    @MessageMapping("/chat/send")
    public void sendMessage(@Payload ChatRequest.SendMessageDTO requestDTO, @AuthenticationPrincipal CustomUserDetails userDetails) {
        chatService.sendMessage(requestDTO, userDetails.getUser().getId(), userDetails.getUsername());
    }

    @GetMapping("/chatRooms")
    public ResponseEntity<?> findChatRoomList(@AuthenticationPrincipal CustomUserDetails userDetails){
        ChatResponse.FindChatRoomListDTO responseDTO = chatService.findChatRoomList(userDetails.getUser().getId());
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @GetMapping("/chatRooms/{chatRoomId}/messages")
    public ResponseEntity<?> findMessageListInRoom(@PathVariable Long chatRoomId, @RequestParam("page") Integer page, @AuthenticationPrincipal CustomUserDetails userDetails){
        ChatResponse.FindMessageListInRoomDTO responseDTO = chatService.findMessageListInRoom(chatRoomId, userDetails.getUser().getId(), page);
        return ResponseEntity.ok().body(ApiUtils.success(HttpStatus.OK, responseDTO));
    }

    @MessageMapping("/chat/read")
    public void readMessage(@Payload ChatRequest.ReadMessageDTO requestDTO, @AuthenticationPrincipal CustomUserDetails userDetails) {
        chatService.readMessage(requestDTO, userDetails.getUser().getId());
    }
}
