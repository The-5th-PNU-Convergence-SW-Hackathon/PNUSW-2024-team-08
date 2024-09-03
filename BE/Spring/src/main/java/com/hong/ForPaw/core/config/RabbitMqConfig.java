package com.hong.ForPaw.core.config;

import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistry;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.handler.annotation.support.DefaultMessageHandlerMethodFactory;

@Configuration
@RequiredArgsConstructor
public class RabbitMqConfig implements RabbitListenerConfigurer {

    private final ConnectionFactory connectionFactory;

    @Bean
    public RabbitAdmin rabbitAdmin() {
        return new RabbitAdmin(connectionFactory);
    }

    @Bean
    public Jackson2JsonMessageConverter producerJackson2MessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public MappingJackson2MessageConverter consumerJackson2MessageConverter() {
        return new MappingJackson2MessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate() {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(producerJackson2MessageConverter());
        return rabbitTemplate;
    }

    @Bean
    public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory() {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setConnectionFactory(connectionFactory);
        factory.setMismatchedQueuesFatal(true); // 큐 이름이 일치하지 않을 경우, 애플리케이션을 종료
        factory.setMessageConverter(producerJackson2MessageConverter());
        factory.setAcknowledgeMode(AcknowledgeMode.AUTO);  // 메시지를 성공적으로 처리했음을 RabbitMQ 서버에 명시적으로 알려주어야 함
        return factory;
    }
    @Bean
    public RabbitListenerEndpointRegistry rabbitListenerEndpointRegistry() {
        return new RabbitListenerEndpointRegistry();
    }

    @Bean
    public DefaultMessageHandlerMethodFactory messageHandlerMethodFactory() {
        DefaultMessageHandlerMethodFactory factory = new DefaultMessageHandlerMethodFactory();
        factory.setMessageConverter(consumerJackson2MessageConverter());
        return factory;
    }

    @Override
    public void configureRabbitListeners(RabbitListenerEndpointRegistrar registrar) {
        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
        factory.setPrefetchCount(1); // 한 번에 처리할 메시지 수를 설정
        factory.setConsecutiveActiveTrigger(1); // 연속적으로 활성화될 때까지의 트리거 횟수를 설정
        factory.setConsecutiveIdleTrigger(1); // 연속적으로 유휴 상태가 될 때까지의 트리거 횟수를 설정
        factory.setConnectionFactory(connectionFactory); // RabbitMQ 연결 팩토리를 설정

        registrar.setContainerFactory(factory); // 컨테이너 팩토리를 등록
        registrar.setEndpointRegistry(rabbitListenerEndpointRegistry()); // 리스너 엔드포인트 레지스트리를 설정
        registrar.setMessageHandlerMethodFactory(messageHandlerMethodFactory()); // 메시지 핸들러 메서드 팩토리를 설정
    }

    // 채팅을 위한 Exchange
    @Bean
    DirectExchange chatExchange() {
        return new DirectExchange("chat.exchange");
    }

    // 알람을 위한 Exchange
    @Bean
    DirectExchange alarmExchange() { return new DirectExchange("alarm.exchange");}
}
