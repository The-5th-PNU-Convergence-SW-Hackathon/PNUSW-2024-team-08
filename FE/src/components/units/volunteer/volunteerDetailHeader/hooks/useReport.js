import { useState } from "react";

export const useReport = () => {
  const [showModal, setShowModal] = useState(false);
  const [commentId, setCommetId] = useState(null);
  const [replyId, setReplyId] = useState(null);

  const handleClickReport = (commentId, replyId) => {
    setShowModal(true);
    setCommetId(commentId);
    setReplyId(replyId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return {
    showModal,
    commentId,
    replyId,
    handleClickReport,
    handleCloseModal,
  };
};
