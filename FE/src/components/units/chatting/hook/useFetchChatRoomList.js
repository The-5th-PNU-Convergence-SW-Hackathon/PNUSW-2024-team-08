import { useEffect, useState } from "react";
import { fetchChatRoomList } from "../Chatting.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    rooms: [
      {
        chatRoomId: 8,
        name: "동물 사랑 협회 (대구)",
        lastMessageContent: "페르시안은 손질이 많이 필요해요...",
        lastMessageTime: "2024-03-14T15:22:34Z",
        offset: 3, // 조회할 메시지의 시작점 (페이지)
      },
      {
        chatRoomId: 12,
        name: "강아지 사랑",
        lastMessageContent: "딴딴딴",
        lastMessageTime: "2024-03-14T12:17:00Z",
        offset: 1,
      },
    ],
  },
};

export default function useFetchChatRoomList() {
  const [chatRoomList, setChatRoomList] = useState(example.result.rooms);

  useEffect(() => {
    async function loadChatRoomList() {
      const chatRoomListData = await fetchChatRoomList();
      setChatRoomList(chatRoomListData);
    }

    // loadChatRoomList();
  }, []);

  return { chatRoomList };
}
