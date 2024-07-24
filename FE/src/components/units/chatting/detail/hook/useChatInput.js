import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useChatInput(addMessage) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessageId = uuidv4();
      const now = new Date();
      const localISOTime = new Date(
        now.getTime() - now.getTimezoneOffset() * 60000
      ).toISOString();

      const newMessage = {
        messageId: newMessageId, // Unique ID
        userName: "이종일", // 현재 사용자 이름 (로그인 정보에서 가져올 수 있습니다)
        content: message,
        imageURL: null,
        date: localISOTime, // 현재 시간 (KST)
        isMine: true,
      };
      addMessage(newMessage);
      setMessage(""); // 메시지 전송 후 입력 필드 초기화
    }
  };

  const handleSendImages = (images) => {
    const newMessageId = uuidv4();
    const now = new Date();
    const localISOTime = new Date(
      now.getTime() - now.getTimezoneOffset() * 60000
    ).toISOString();

    const newMessage = {
      messageId: newMessageId, // Unique ID
      userName: "이종일", // 현재 사용자 이름 (로그인 정보에서 가져올 수 있습니다)
      content: "", // 이미지 전송 시 메시지는 비워둠
      imageURL: images,
      date: localISOTime, // 현재 시간 (KST)
      isMine: true,
    };
    addMessage(newMessage);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return {
    message,
    handleChange,
    handleSend,
    handleSendImages,
    handleKeyPress,
  };
}
