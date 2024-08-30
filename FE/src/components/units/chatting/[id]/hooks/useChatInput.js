import useS3Upload from "../../../../../../src/components/commons/hooks/useS3Upload";
import { useEffect, useRef, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { sendMessage, sendReadMessage } from "../ChattingDetail.queries";
import useStompClient from "./useStompClient";

export default function useChatInput(
  addMessage,
  setChatMsgList,
  photos,
  files,
  chatRoomId,
  myNickName,
  profileURL
) {
  const [message, setMessage] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [processedMessageIds, setProcessedMessageIds] = useState(new Set());
  const { uploadFile } = useS3Upload("pnucoding", "chatting");
  const inputRef = useRef(null);
  const isSending = useRef(false);
  const isSendingImages = useRef(false);
  const isSendingFiles = useRef(false);

  const handleIncomingMessage = useCallback(
    (message) => {
      // console.log("sentMessage: ", message);

      if (processedMessageIds.has(message.messageId)) {
        // console.log("Message already processed: ", message.messageId);
        return;
      }

      setProcessedMessageIds((prev) => new Set(prev).add(message.messageId));

      setChatMsgList((prevChatMsgList) => {
        const updatedChatMsgList = { ...prevChatMsgList };

        if (
          message.nickName === myNickName &&
          (message.messageType === "IMAGE" || message.messageType === "FILE")
        ) {
          if (
            updatedChatMsgList["uploading"] &&
            updatedChatMsgList["uploading"].length > 0
          ) {
            // uploading 그룹에서 첫 번째 요소 제거
            updatedChatMsgList["uploading"].shift();

            // uploading 그룹이 비어 있으면 삭제
            if (updatedChatMsgList["uploading"].length === 0) {
              delete updatedChatMsgList["uploading"];
            }
          }
        }

        return updatedChatMsgList;
      });

      addMessage(message, myNickName);
      sendReadMessage(message.messageId);
    },
    [addMessage, setChatMsgList, myNickName, processedMessageIds]
  );

  useStompClient(chatRoomId, handleIncomingMessage);

  const uploadImagesToS3 = async (photos) => {
    const uploadPromises = photos.map((photo) => uploadFile(photo.file));
    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls
      .filter((url) => url !== null)
      .map((url) => ({ objectURL: url }));
  };

  const uploadFileToS3 = async (file) => {
    const fileUrl = await uploadFile(file.file);
    return fileUrl ? { objectURL: fileUrl } : null;
  };

  const handleSend = useCallback(async () => {
    // console.log("handleSend called");
    if (isSending.current) {
      console.log("handleSend is already in progress, skipping");
      return;
    }

    isSending.current = true;
    // console.log("isSending set to true");

    try {
      if (message.trim()) {
        console.log("Sending message:", message);
        const newMessage = {
          chatRoomId,
          content: message,
          objects: [],
          messageType: "TEXT",
        };
        await sendMessage(newMessage);
        // console.log("Message sent successfully");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      isSending.current = false;
      // console.log("isSending set to false");
    }
  }, [message, chatRoomId]);

  const handleSendImages = useCallback(
    async (photos) => {
      // console.log("handleSendImages called");
      if (isSendingImages.current) {
        // console.log("handleSendImages is already in progress, skipping");
        return;
      }

      isSendingImages.current = true;
      // console.log("isSendingImages set to true");

      try {
        const newMessageId = uuidv4();
        const localImageURLs = photos.map((photo) => ({
          objectURL: photo.preview,
        }));

        const newMessage = {
          messageType: "IMAGE",
          messageId: newMessageId,
          nickName: myNickName,
          content: "",
          objects: localImageURLs,
          date: "",
          profileURL: profileURL,
          isUploading: true,
        };
        addMessage(newMessage, myNickName);

        const S3ImagesURLs = await uploadImagesToS3(photos);
        await sendMessage({
          chatRoomId,
          content: "",
          objects: S3ImagesURLs,
          messageType: "IMAGE",
        });
      } catch (error) {
        console.error("Error sending images:", error);
      } finally {
        isSendingImages.current = false;
        // console.log("isSendingImages set to false");
      }
    },
    [photos, myNickName, addMessage, chatRoomId]
  );

  const handleSendFiles = useCallback(
    async (files) => {
      // console.log("handleSendFiles called");
      if (isSendingFiles.current) {
        // console.log("handleSendFiles is already in progress, skipping");
        return;
      }

      isSendingFiles.current = true;
      // console.log("isSendingFiles set to true");

      try {
        const file = files[0]; // 첫 번째 파일만 처리
        const newMessageId = uuidv4();

        // 파일 이름, 확장자, 크기를 content로 설정
        const fileName = file.name;
        const fileExtension = file.extension ? `.${file.extension}` : "";
        const fileSize = (file.size / 1024 / 1024).toFixed(2) + "MB"; // 사이즈를 MB로 변환

        const content = `${fileName}${fileExtension}, ${fileSize}`;

        const localFileURL = {
          objectURL: file.localURL, // 파일의 로컬 URL
        };

        const newMessage = {
          messageType: "FILE",
          messageId: newMessageId,
          nickName: myNickName,
          content: content,
          objects: [localFileURL],
          date: "",
          profileURL: profileURL,
          isUploading: true,
        };
        addMessage(newMessage, myNickName);

        const S3FileURL = await uploadFileToS3(file); // 첫 번째 파일만 업로드
        await sendMessage({
          chatRoomId,
          content: content,
          objects: [S3FileURL],
          messageType: "FILE",
        });
      } catch (error) {
        console.error("Error sending file:", error);
      } finally {
        isSendingFiles.current = false;
        // console.log("isSendingFiles set to false");
      }
    },
    [files, myNickName, addMessage, chatRoomId]
  );

  const handleChange = useCallback((e) => {
    setMessage(e.target.value), [];
  });

  const handleKeyDown = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend, isComposing, message]
  );

  const handleCompositionStart = useCallback(() => setIsComposing(true), []);
  const handleCompositionEnd = useCallback(() => setIsComposing(false), []);

  return {
    message,
    inputRef,
    handleSend,
    handleSendImages,
    handleSendFiles,
    handleChange,
    handleKeyDown,
    handleCompositionStart,
    handleCompositionEnd,
  };
}
