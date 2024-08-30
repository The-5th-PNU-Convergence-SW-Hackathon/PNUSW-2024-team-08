import { useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const useStompClient = (roomId, onMessageReceived) => {
  const stompClientRef = useRef(null);

  useEffect(() => {
    let isConnected = false; // 연결 상태를 추적

    const connectStomp = () => {
      const socketURL = process.env.NEXT_PUBLIC_SOCKET_URL;
      const socket = new SockJS(socketURL);
      const stompClient = new Client({
        webSocketFactory: () => socket,
        debug: (str) => {
          console.log(new Date(), str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 0,
        heartbeatOutgoing: 0,
        onConnect: () => {
          // console.log("Connected to RabbitMQ STOMP");
          isConnected = true; // 연결이 성공하면 상태를 true로 설정
          stompClient.subscribe(
            `/exchange/chat.exchange/room.${roomId}`,
            (message) => {
              const messageContent = JSON.parse(message.body);
              console.log("Received message:", messageContent);
              onMessageReceived(messageContent);
            }
          );
        },
        onStompError: (frame) => {
          // console.error("STOMP error:", frame);
        },
        onWebSocketClose: (event) => {
          // console.log("WebSocket closed:", event);
          isConnected = false; // 연결이 닫히면 상태를 false로 설정
        },
        onDisconnect: () => {
          // console.log("Disconnected from RabbitMQ STOMP");
        },
      });

      stompClient.activate();
      stompClientRef.current = stompClient;
    };

    connectStomp();

    return () => {
      if (isConnected && stompClientRef.current) {
        // 연결된 상태일 때만 비활성화
        stompClientRef.current.deactivate();
      }
    };
  }, [roomId, onMessageReceived]);

  return stompClientRef.current;
};

export default useStompClient;
