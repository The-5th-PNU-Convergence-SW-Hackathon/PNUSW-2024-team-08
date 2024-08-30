import { useState, useEffect } from "react";
import InputUI from "./Input.presenter";
import { useSubmitComment } from "./hooks/useSubmitComment";

export default function Input({
  id,
  addComment,
  addReply,
  editComment,
  replyingToId,
  name,
  editingContent,
  handleCancelReply,
  isEditing,
  profileData,
}) {
  const {
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
  } = useSubmitComment(
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
  );

  return (
    <>
      <InputUI
        input={input}
        handleInput={handleInput}
        handleAddComment={handleAddCommentOrReply}
        handleKeyDown={handleKeyDown}
        handleCompositionStart={handleCompositionStart}
        handleCompositionEnd={handleCompositionEnd}
        placeholderText={placeholderText}
        name={name}
        handleCancelReply={handleClearInput}
        isEditing={isEditing}
        replyText={replyText}
        inputRef={inputRef}
      />
    </>
  );
}
