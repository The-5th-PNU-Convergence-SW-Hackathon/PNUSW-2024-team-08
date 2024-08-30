import { useState, useEffect, useRef, useCallback } from "react";
import {
  submitComment,
  submitReply,
  editSubmitComment,
} from "../Input.queries";

export const useSubmitComment = (
  id,
  addComment,
  addReply,
  editComment,
  replyingToId,
  name,
  editingContent,
  handleCancelReply,
  isEditing,
  profileData
) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [isComposing, setIsComposing] = useState(false);

  useEffect(() => {
    if (name && !isEditing) {
      setInput(``);
      inputRef.current?.focus(); // 답글 달기 클릭 시 포커스
    }
    if (isEditing && editingContent) {
      setInput(editingContent);
      inputRef.current?.focus(); // 수정하기 클릭 시 포커스
    }
  }, [name, isEditing, editingContent]);

  const handleInput = (e) => {
    const inputText = e.target.value;
    setInput(inputText);
  };

  const handleAddCommentOrReply = async () => {
    if (input.trim()) {
      if (isEditing) {
        // 댓글/대댓글 수정
        editComment(replyingToId, input);
        await editSubmitComment(id, replyingToId, input);
      } else if (replyingToId) {
        // 답글 추가
        //const contentWithoutMention = input.replace(`@${name}`, "").trim(); //댓글로 전해주는 값에서는 다르게 표시를 해주기 위해서
        const data = await submitReply(id, replyingToId, input);
        if (data.success) {
          const newReply = {
            profileURL: profileData.profileURL,
            id: data.result.id, // 임시로 고유 ID 생성
            nickName: profileData.nickName, // 예시 사용자 이름
            content: input,
            location: profileData.province, // 예시 위치
            date: new Date().toISOString(),
            likeNum: 0,
            replyName: name,
          };
          addReply(replyingToId, newReply);
        }
      } else {
        // 댓글 추가
        const data = await submitComment(id, input);
        if (data.success) {
          const newComment = {
            profileURL: profileData.profileURL,
            id: data.result.id, // 임시로 고유 ID 생성
            nickName: profileData.nickName, // 예시 사용자 이름
            content: input,
            location: profileData.province, // 예시 위치
            date: new Date().toISOString(),
            likeNum: 0,
            replies: [],
          };
          addComment(newComment);
        }
      }
      setInput("");
      handleCancelReply(); // X 버튼 클릭 시 상태 초기화
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (isComposing) return;
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleAddCommentOrReply();
      }
    },
    [handleAddCommentOrReply, isComposing, input]
  );

  const handleCompositionStart = useCallback(() => setIsComposing(true), []);
  const handleCompositionEnd = useCallback(() => setIsComposing(false), []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCommentOrReply();
    }
  };

  const handleClearInput = () => {
    setInput(""); // 입력창 초기화
    handleCancelReply(); // 상태 초기화
  };

  const placeholderText = replyingToId
    ? isEditing
      ? "수정 내용을 입력하세요..."
      : "답글을 달아주세요..."
    : "댓글을 입력해주세요...";

  const replyText = isEditing
    ? replyingToId
      ? `${name}님에게 답글 수정 중...`
      : `${name}님에게 댓글 수정 중...`
    : `${name}님에게 답글 다는 중...`;

  return {
    input,
    handleInput,
    handleAddCommentOrReply,
    handleKeyDown,
    handleCompositionStart,
    handleCompositionEnd,
    handleClearInput,
    placeholderText,
    replyText,
    inputRef,
  };
};
