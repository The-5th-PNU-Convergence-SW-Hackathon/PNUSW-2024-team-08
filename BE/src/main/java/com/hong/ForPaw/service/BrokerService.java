package com.hong.ForPaw.service;

import com.hong.ForPaw.controller.DTO.AlarmRequest;
import com.hong.ForPaw.controller.DTO.ChatRequest;
import com.hong.ForPaw.domain.Alarm.Alarm;
import com.hong.ForPaw.domain.Alarm.AlarmType;
import com.hong.ForPaw.domain.Chat.Message;
import com.hong.ForPaw.domain.User.User;
import com.hong.ForPaw.repository.Alarm.AlarmRepository;
import com.hong.ForPaw.repository.Chat.ChatRoomRepository;
import com.hong.ForPaw.repository.Chat.MessageRepository;
import com.hong.ForPaw.repository.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerEndpoint;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistry;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class BrokerService {

    private final MessageRepository messageRepository;
    private final AlarmRepository alarmRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final UserRepository userRepository;
    private final RabbitListenerEndpointRegistry rabbitListenerEndpointRegistry;
    private final SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory;
    private final RabbitTemplate rabbitTemplate;
    private final AmqpAdmin amqpAdmin;
    private final AlarmService alarmService;
    private final MessageConverter converter;
    private final EntityManager entityManager;

    @Transactional
    public void initChatListener(){
        chatRoomRepository.findAll()
                .forEach(chatRoom -> {
                    String queueName = "room." + chatRoom.getId();
                    String listenerId = "room." + chatRoom.getId();

                    registerChatListener(listenerId, queueName);
                });
    }

    @Transactional
    public void initAlarmListener(){
        userRepository.findAll()
                .forEach(user -> {
                    String queueName = "user." + user.getId();
                    String listenerId = "user." + user.getId();

                    registerAlarmListener(listenerId, queueName);
                });
    }

    public void registerDirectExchange(String exchangeName){
        DirectExchange fanoutExchange = new DirectExchange(exchangeName);
        amqpAdmin.declareExchange(fanoutExchange);
    }

    public void registerDirectExQueue(String exchangeName, String queueName){
        DirectExchange directExchange = new DirectExchange(exchangeName);

        Queue queue = new Queue(queueName, true);
        amqpAdmin.declareQueue(queue);

        // routingKey는 큐 이름과 동일
        Binding binding = BindingBuilder.bind(queue).to(directExchange).with(queueName);
        amqpAdmin.declareBinding(binding);
    }

    public void deleteQueue(String queueName){
        amqpAdmin.deleteQueue(queueName);
    }

    public void registerChatListener(String listenerId, String queueName) {
        SimpleRabbitListenerEndpoint endpoint = new SimpleRabbitListenerEndpoint();
        endpoint.setId(listenerId);
        endpoint.setQueueNames(queueName);
        endpoint.setMessageListener(m -> {
            ChatRequest.MessageDTO messageDTO = (ChatRequest.MessageDTO) converter.fromMessage(m);

            // 메시지 저장
            Message message = Message.builder()
                    .chatRoomId(messageDTO.chatRoomId())
                    .senderId(messageDTO.senderId())
                    .senderName(messageDTO.senderName())
                    .content(messageDTO.content())
                    .date(messageDTO.date())
                    .build();
            messageRepository.save(message);

            // 알람 전송
            chatRoomRepository.findAllUserByChatRoomId(messageDTO.chatRoomId())
                    .forEach(user -> {
                        String content = "새로문 메시지: " + messageDTO.content();
                        String redirectURL = "chatRooms/" + messageDTO.chatRoomId();
                        LocalDateTime date = LocalDateTime.now();

                        AlarmRequest.AlarmDTO alarmDTO = new AlarmRequest.AlarmDTO(
                                user.getId(),
                                content,
                                redirectURL,
                                date,
                                AlarmType.chatting);

                        produceAlarm(messageDTO.senderId(), alarmDTO);
                    });
        });

        rabbitListenerEndpointRegistry.registerListenerContainer(endpoint, rabbitListenerContainerFactory, true);
    }

    public void registerAlarmListener(String listenerId, String queueName){
        SimpleRabbitListenerEndpoint endpoint = new SimpleRabbitListenerEndpoint();
        endpoint.setId(listenerId);
        endpoint.setQueueNames(queueName);
        endpoint.setMessageListener(m -> {
            AlarmRequest.AlarmDTO alarmDTO = (AlarmRequest.AlarmDTO) converter.fromMessage(m);

            User receiver = entityManager.getReference(User.class, alarmDTO.receiverId());
            Alarm alarm = Alarm.builder()
                    .receiver(receiver)
                    .content(alarmDTO.content())
                    .redirectURL(alarmDTO.redirectURL())
                    .alarmType(alarmDTO.alarmType())
                    .build();

            // 알람 실시간 전송 후 저장
            alarmService.send(alarm);
            alarmRepository.save(alarm);
        });

        rabbitListenerEndpointRegistry.registerListenerContainer(endpoint, rabbitListenerContainerFactory, true);
    }

    public void produceChat(Long chatRoomId, ChatRequest.MessageDTO message){
        String exchangeName = "chat.exchange";
        String routingKey = "room." + chatRoomId;

        rabbitTemplate.convertAndSend(exchangeName, routingKey, message);
    }

    public void produceAlarm(Long userId, AlarmRequest.AlarmDTO alarm) {
        String exchangeName = "alarm.exchange";
        String routingKey = "user." + userId;

        rabbitTemplate.convertAndSend(exchangeName, routingKey, alarm);
    }
}
