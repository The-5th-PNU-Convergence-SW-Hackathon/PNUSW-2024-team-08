import { useState } from "react";
import { deleteSubmitComment, toggleLike } from "../Comment.queries";

export const useComment = (commentInfo, profileData, id) => {
  const [comments, setComments] = useState(commentInfo);
  const [replyingToId, setReplyingToId] = useState(null);
  const [replyingToName, setReplyingToName] = useState(null);
  const [editingContent, setEditingContent] = useState(""); // 수정할 내용

  console.log(comments);

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleReplyClick = (commentId, commentName) => {
    setReplyingToId(commentId);
    setReplyingToName(commentName);
    setIsEditing(false); // 답글 달기 상태에서는 수정 상태 초기화
    setEditingContent(""); // 답글 상태에서 수정 내용을 초기화
  };

  const handleEditClick = (commentId, commentName, content) => {
    setReplyingToId(commentId);
    setReplyingToName(commentName);
    setIsEditing(true);
    setEditingId(commentId);
    setEditingContent(content); // 수정할 내용 설정
  };

  const handleCancelReply = () => {
    setReplyingToId(null);
    setReplyingToName(null);
    setIsEditing(false); // 수정 상태 초기화
    setEditingId(null);
    setEditingContent(""); // 수정할 내용 초기화
  };

  // 수정 중인 상태를 관리
  const editComment = (commentId, newContent) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              content: newContent,
            }
          : {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === commentId
                  ? { ...reply, content: newContent }
                  : reply
              ),
            }
      )
    );
    handleCancelReply(); // 수정 후 상태 초기화
  };

  const addReply = (commentId, newReply) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [...comment.replies, newReply],
            }
          : comment
      )
    );
    handleCancelReply(); // 답글 추가 후 상태 초기화
  };

  const deleteComment = async (commentId) => {
    try {
      await deleteSubmitComment(id, commentId);
      // 상태에서 삭제된 댓글을 제거
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, content: "삭제된 댓글입니다" }
            : comment
        )
      );
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
    }
  };

  const deleteReply = async (commentId, replyId) => {
    try {
      await deleteSubmitComment(id, replyId);
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  (reply) => reply.id !== replyId
                ),
              }
            : comment
        )
      );
    } catch (error) {
      console.error("답글 삭제 실패:", error);
    }
  };

  const handleCommentToggleLike = async (commentId) => {
    try {
      const data = await toggleLike(id, commentId);
      if (data.success) {
        setComments((currentCommnets) => {
          const updatedComments = currentCommnets.map((comment) =>
            comment.id == commentId
              ? {
                  ...comment,
                  isLike: !comment.isLike,
                  likeNum: comment.isLike
                    ? comment.likeNum - 1
                    : comment.likeNum + 1,
                }
              : comment
          );
          return [...updatedComments];
        });
      }
    } catch (error) {
      console.error("댓글 혹은 대댓글 좋아요에 실패하셨습니다: ", error);
    }
  };

  const handleReplyToggleLike = async (commentId, replyId) => {
    try {
      const data = await toggleLike(id, replyId);
      if (data.success) {
        setComments((currentComments) => {
          const updatedComments = currentComments.map((comment) => {
            if (comment.id === commentId) {
              const updatedReplies = comment.replies.map((reply) => {
                if (reply.id === replyId) {
                  return {
                    ...reply,
                    isLike: !reply.isLike,
                    likeNum: reply.isLike
                      ? reply.likeNum - 1
                      : reply.likeNum + 1,
                  };
                }
                return reply;
              });
              return {
                ...comment,
                replies: updatedReplies,
              };
            }
            return comment;
          });
          return [...updatedComments];
        });
      }
    } catch (error) {
      console.error("대댓글 좋아요에 실패하셨습니다: ", error);
    }
  };

  return {
    comments,
    replyingToId,
    replyingToName,
    editingContent,
    isEditing,
    editingId,
    addComment,
    handleReplyClick,
    handleEditClick,
    handleCancelReply,
    editComment,
    addReply,
    deleteComment,
    deleteReply,
    handleCommentToggleLike,
    handleReplyToggleLike,
  };
};
