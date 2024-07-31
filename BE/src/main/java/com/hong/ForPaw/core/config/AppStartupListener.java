package com.hong.ForPaw.core.config;

import com.hong.ForPaw.service.BrokerService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AppStartupListener implements ApplicationListener<ApplicationReadyEvent> {

    private final BrokerService brokerService;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        brokerService.initChatListener();
        brokerService.initAlarmListener();
    }
}
