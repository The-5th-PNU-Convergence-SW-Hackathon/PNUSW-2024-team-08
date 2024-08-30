import { useState, useEffect } from "react";
import CommentUI from "./Comment.presenter";
import { useClickMenu } from "./hooks/useClickeMenu";
import { useReport } from "../../units/volunteer/volunteerDetailHeader/hooks/useReport";
import ReportModal from "../reportModal/ReportModal.container";

export default function Comment({
  comments,
  handleReplyClick,
  handleEditClick,
  deleteComment,
  deleteReply,
  profileData,
  handleCommentToggleLike,
  handleReplyToggleLike,
}) {
  const { openMenuId, isMatch, handleMenu } = useClickMenu();

  const { showModal, commentId, replyId, handleClickReport, handleCloseModal } =
    useReport();

  return (
    <>
      <ReportModal
        isOpen={showModal}
        onClose={handleCloseModal}
        commentId={commentId}
        replyId={replyId}
      />
      <CommentUI
        comments={comments}
        openMenuId={openMenuId}
        handleMenu={(commentId, commentNickname, replyId = null) =>
          handleMenu(commentId, commentNickname, profileData.nickName, replyId)
        }
        handleReplyClick={handleReplyClick}
        handleEditClick={handleEditClick}
        deleteComment={deleteComment}
        deleteReply={deleteReply}
        isMatch={isMatch}
        handleCommentToggleLike={handleCommentToggleLike}
        handleReplyToggleLike={handleReplyToggleLike}
        handleClickReport={handleClickReport}
      />
    </>
  );
}
