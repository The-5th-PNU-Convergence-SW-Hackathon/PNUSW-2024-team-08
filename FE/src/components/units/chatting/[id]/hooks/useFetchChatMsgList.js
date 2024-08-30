import { useEffect, useState, useCallback } from "react";
import { fetchPrevChatMsgList } from "../ChattingDetail.queries";

const groupMessagesByDate = (messages) => {
  return messages.reduce((acc, message) => {
    const date = message.date.split(/[T ]/)[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(message);
    return acc;
  }, {});
};

const mergeMessages = (prevMessages, newMessages) => {
  const merged = [...prevMessages, ...newMessages];
  return groupMessagesByDate(merged);
};

export default function useFetchChatMsgList(chatMsgListData) {
  const [prevPage, setPrevPage] = useState(1);
  const [chatMsgList, setChatMsgList] = useState(
    chatMsgListData ? groupMessagesByDate(chatMsgListData.messages) : []
  );

  useEffect(() => {
    console.log("chatMsgList: ", chatMsgList);
  }, [chatMsgList]);

  const addMessage = useCallback(
    (newMessage, nickName) => {
      const date = newMessage.date
        ? newMessage.date.split(/[T ]/)[0]
        : "uploading";
      setChatMsgList((prevChatMsgList) => {
        const updatedChatMsgList = { ...prevChatMsgList };

        if (!updatedChatMsgList[date]) {
          updatedChatMsgList[date] = [];
        }

        const messageWithOwnership = {
          ...newMessage,
          isMine: newMessage.nickName === nickName,
        };

        updatedChatMsgList[date].push(messageWithOwnership);

        return updatedChatMsgList;
      });
    },
    [setChatMsgList]
  );

  const updateMessageId = useCallback(
    (newMessageId, sentMessageId) => {
      setChatMsgList((prevChatMsgList) => {
        const updatedChatMsgList = { ...prevChatMsgList };
        if (updatedChatMsgList["uploading"]) {
          updatedChatMsgList["uploading"] = updatedChatMsgList["uploading"].map(
            (msg) =>
              msg.messageId === newMessageId
                ? { ...msg, messageId: sentMessageId }
                : msg
          );
        }
        return updatedChatMsgList;
      });
    },
    [setChatMsgList]
  );

  const loadPreviousMessages = useCallback(async (chatRoomId, prevPage) => {
    console.log(`Loading previous messages for page: ${prevPage}`);
    const previousMessages = await fetchPrevChatMsgList(chatRoomId, prevPage);
    setChatMsgList((prevChatMsgList) => {
      return mergeMessages(
        previousMessages.messages,
        Object.values(prevChatMsgList).flat()
      );
    });
    setPrevPage(prevPage + 1);
  }, []);

  return {
    chatMsgList,
    setChatMsgList,
    addMessage,
    prevPage,
    loadPreviousMessages,
  };
}
