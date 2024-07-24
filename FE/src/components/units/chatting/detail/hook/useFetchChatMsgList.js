import { useEffect, useState, useCallback } from "react";
import { fetchChatMsgList } from "../ChattingDetail.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    lastMessageId: 28,
    messages: [
      {
        messageId: 23,
        userName: "호얘이",
        content: "안녕하세요! 오늘 모임 시간이 언제였죠?",
        imageURL: null,
        date: "2024-03-17T15:00:00Z",
        isMine: true,
      },
      {
        messageId: 24,
        userName: "호영",
        content: "낼 오후에요 ㅎㅎ",
        imageURL: null,
        date: "2024-03-17T15:01:00Z",
        isMine: false,
      },
      {
        messageId: 25,
        userName: "호얘이",
        content: "내일 오후 몇 시인가요?",
        imageURL: null,
        date: "2024-03-17T16:00:00Z",
        isMine: true,
      },
      {
        messageId: 26,
        userName: "호영",
        content: "4시쯤에 모일 예정이에요.",
        imageURL: null,
        date: "2024-03-17T17:01:00Z",
        isMine: false,
      },
      {
        messageId: 27,
        userName: "호얘이",
        content: "오늘 모임에서 어떤 사항을 검토해볼까요?",
        imageURL: null,
        date: "2024-03-18T09:00:00Z",
        isMine: true,
      },
      {
        messageId: 28,
        userName: "호영",
        content:
          "전반적인 개발 현황과 배포 정도를 논의하고, 디자인과 기획에 필요한 부분을 상의 후 수정해보죠.",
        imageURL: null,
        date: "2024-03-18T09:01:00Z",
        isMine: false,
      },
      {
        messageId: 29,
        userName: "호얘이",
        content: "그럼 오늘 오후 4시에 뵐게요.",
        imageURL: null,
        date: "2024-03-18T09:15:00Z",
        isMine: true,
      },
      {
        messageId: 30,
        userName: "호영",
        content: "부산대 정문 근처 카페 드팽 2층으로 모일게요.",
        imageURL: null,
        date: "2024-03-18T09:20:00Z",
        isMine: false,
      },
      {
        messageId: 31,
        userName: "호얘이",
        content: "네. 알겠습니다. 이따 뵐게요!",
        imageURL: null,
        date: "2024-03-18T09:23:00Z",
        isMine: true,
      },
      {
        messageId: 32,
        userName: "호영",
        content: "지금 부산대 쪽을 가는 중인데 조금 늦을 것 같습니다ㅠㅠ",
        imageURL: null,
        date: "2024-03-18T12:37:00Z",
        isMine: false,
      },
      {
        messageId: 33,
        userName: "호얘이",
        content: "그럼 먼저 가서 커피 마시면서 회의할 내용들 검토해볼게요.",
        imageURL: null,
        date: "2024-03-18T15:49:00Z",
        isMine: true,
      },
      {
        messageId: 34,
        userName: "호영",
        content: "네. 감사합니다! 금방 갈게요!",
        imageURL: null,
        date: "2024-03-18T15:59:00Z",
        isMine: false,
      },
    ],
  },
};

const groupMessagesByDate = (messages) => {
  return messages.reduce((acc, message) => {
    const date = message.date.split("T")[0]; // '년-월-일' 형식으로 분리
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {});
};

export default function useFetchChatMsgList() {
  const [chatMsgList, setChatMsgList] = useState(
    groupMessagesByDate(example.result.messages)
  );

  useEffect(() => {
    async function loadChatMsgList() {
      const chatMsgListData = await fetchChatMsgList();
      setChatMsgList(groupMessagesByDate(chatMsgListData.result.messages));
    }

    console.log("Initial chatMsgList: ", JSON.stringify(chatMsgList, null, 2));
    // loadChatMsgList();
  }, []);

  const addMessage = useCallback(
    (newMessage) => {
      const date = newMessage.date.split("T")[0];
      setChatMsgList((prevChatMsgList) => {
        const updatedChatMsgList = { ...prevChatMsgList };
        if (!updatedChatMsgList[date]) {
          updatedChatMsgList[date] = [];
        }
        updatedChatMsgList[date] = [
          ...updatedChatMsgList[date],
          newMessage,
        ].sort((a, b) => new Date(a.date) - new Date(b.date));
        return updatedChatMsgList;
      });
    },
    [setChatMsgList]
  );

  return { chatMsgList, addMessage };
}
