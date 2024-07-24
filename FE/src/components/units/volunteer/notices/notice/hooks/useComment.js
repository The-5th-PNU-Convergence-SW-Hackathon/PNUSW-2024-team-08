import { useEffect, useRef, useState } from "react";
import { useClickMenu } from "./useClickMenu";
import {
  sendComment,
  sendCommentEdit,
  sendDelete,
  sendReply,
  sendReplyEdit,
  likeComment,
} from "../Notice.quries";
import useFetchNotice from "./useFetchNotice";

export const useComment = () => {
  const {
    isCommentMenuClicked,
    setIsCommentMenuClicked,
    isReplyMenuClicked,
    setIsReplyMenuClicked,
    clickedCommentID,
    setClickedCommentID,
    clickedReplyID,
    wrapperRef,
    handleMenuClick,
  } = useClickMenu();

  const { noticeInfos } = useFetchNotice();
  const [content, setContent] = useState(""); //input안의 내용을 onChange로 받아줄 변수이다.
  const [isActiveComment, setIsActiveComment] = useState(true);
  const [isClickedReply, setIsClickedReply] = useState(false); //답글달기를 눌렀는가 판단하는 변수
  const [isClickedEdit, setIsClickedEidt] = useState(false); //댓글의 수정하기 메뉴를 눌렀을 경우
  const [isClickedReplyEdit, setIsClickedReplyEdit] = useState(false); //답글의 수정하기 메뉴를 눌렀을 경우
  const [name, setName] = useState(""); //답글 달기에 이름을 주기 위해서
  const [commentDeleteCount, setCommentDeleteCount] = useState(0); // 삭제하기를 누르고 난 뒤 댓글id 값을 올려주기 위한 변수
  const focus = useRef(null); //input태그에 포커스를 주기 위해
  const isLike = false;

  const [comments, setComments] = useState(
    noticeInfos.comments.map((comment) => ({
      ...comment,
      replyDeleteCount: commentDeleteCount,
      isLike: isLike,
      likeSrc: "/images/volunteer/announcement/comment_like_icon.svg",
      likeCount: 0,
      replies: comment.replies.map((reply) => ({
        ...reply,
        isLike: isLike,
        likeSrc: "/images/volunteer/announcement/comment_like_icon.svg",
        likeCount: 0,
      })),
    }))
  );

  //input태그에 focus주기
  const nameFoucs = () => {
    if (focus.current !== null) {
      focus.current.focus();
    }
  };

  //Comment input값을 받아오는 기능
  const handleContentValue = (e) => {
    setContent(e.target.value);
  };

  //답글달기모드 활성화
  const activeReply = (e, commentID, name) => {
    setIsClickedReply(true);
    setIsActiveComment(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(false);
    setContent("@" + name + " ");
    setName(name);
    setClickedCommentID(commentID);
    nameFoucs();
  };

  //댓글 수정모드를 활성화
  const activeCommentEdit = (content) => {
    setIsClickedEidt(true);
    setIsActiveComment(false);
    setIsClickedReply(false);
    setIsClickedReplyEdit(false);
    setContent(content);
    nameFoucs();
  };

  //답글 수정모드 활성화
  const activeReplyEdit = (content) => {
    setIsClickedReplyEdit(true);
    setIsActiveComment(false);
    setIsClickedReply(false);
    setIsClickedEidt(false);
    setContent(content);
    nameFoucs();
  };

  const handleContentSubmit = async (e) => {
    if (
      (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) &&
      content.trim() &&
      isActiveComment
    ) {
      //댓글을 보내는 코드들 api문서에 보내는 것이기 때문에 내가 보낼 것은 content만 취득하면 된다.
      try {
        const newComment = {
          id: comments.length + 1 + commentDeleteCount,
          name: `닉네임${comments.length + 1 + commentDeleteCount}`,
          location: "지역",
          date: "방금 전",
          content: content,
          isLike: isLike,
          likeSrc: "/images/volunteer/announcement/comment_like_icon.svg",
          likeCount: 0,
          replyDeleteCount: commentDeleteCount,
          replies: [],
        };
        setComments([...comments, newComment]);
        // const data = await sendComment(content);
        // console.log(`댓글: ${data}`);
      } catch (error) {
        console.log("댓글을 달 수 없습니다.");
      }
      setContent("");
    } else if (
      (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) &&
      content.trim() &&
      isClickedReply
    ) {
      try {
        const updatedComments = comments.map((comment) => {
          if (comment.id === clickedCommentID) {
            return {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: comment.replies.length + 1 + comment.replyDeleteCount,
                  name: `답글 닉네임${
                    comment.replies.length + 1 + comment.replyDeleteCount
                  }`,
                  location: "지역",
                  date: "방금 전",
                  replyName: name,
                  content: content.substring(name.length + 1, content.length),
                  isLike: isLike,
                  likeCount: 0,
                  likeSrc:
                    "/images/volunteer/announcement/comment_like_icon.svg",
                },
              ],
            };
          } else {
            return comment;
          }
        });
        setComments(updatedComments);
        // const data = await sendReply(
        //   content.substring(name.length + 1, content.length)
        // );
        // console.log(`답글: ${data}`);
      } catch (error) {
        console.log("답글을 보낼 수 없습니다.");
      }
      setIsActiveComment(true);
      setContent("");
      setIsClickedReply(false);
    } else if (
      (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) &&
      content.trim() &&
      isClickedEdit
    ) {
      try {
        const updatedComments = comments.map((comment) => {
          if (comment.id === clickedCommentID) {
            return { ...comment, content: content };
          }
          return comment;
        });
        setComments(updatedComments);
        // const data = await sendCommentEdit(content);
        // console.log(`댓글 수정내용: ${data}`);
      } catch (error) {
        console.log("댓글 수정 실패");
      }
      setIsActiveComment(true);
      setIsCommentMenuClicked(false);
      setIsClickedEidt(false);
      setContent("");
    } else if (
      (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) &&
      content.trim() &&
      isClickedReplyEdit
    ) {
      try {
        const updatedComments = comments.map((comment) => {
          if (comment.id === clickedCommentID) {
            const updatedReplies = comment.replies.map((reply) => {
              if (reply.id === clickedReplyID) {
                return { ...reply, content: content };
              }
              return reply;
            });
            return { ...comment, replies: updatedReplies };
          }
          return comment;
        });
        setComments(updatedComments);
        // const data = await sendReplyEdit(content);
        // console.log(`답글 수정: ${data}`);
      } catch (error) {
        console.log("답글 수정 실해");
      }
      setIsActiveComment(true);
      setIsReplyMenuClicked(false);
      setIsClickedReplyEdit(false);
      setContent("");
    }
  };

  // 댓글 삭제기능
  const handleDelete = async (commentID, replyID) => {
    if (replyID === null) {
      try {
        const updatedComments = comments.filter(
          (comment) => comment.id !== commentID
        );
        setComments(updatedComments);
        setCommentDeleteCount(commentDeleteCount + 1);
        // const data = await sendDelete();
        // console.log("댓글 삭제 완료");
      } catch (error) {
        console.log("댓글 삭제 실패");
      }
    } else {
      // 답글 삭제
      try {
        const updatedComments = comments.map((comment) => {
          if (comment.id === commentID) {
            const updatedReplies = comment.replies.filter(
              (reply) => reply.id !== replyID
            );
            return {
              ...comment,
              replies: updatedReplies,
              replyDeleteCount: comment.replyDeleteCount + 1,
            };
          }
          return comment;
        });
        setComments(updatedComments);
        // const data = await sendDelete();
        // console.log("답글 삭제 완료");
      } catch (error) {
        console.log("답글 삭제 실패");
      }
    }
    setIsClickedReply(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
  };

  //답글달기 혹은 수정하기를 누르고 나오는 div의 영역의 X버튼을 누르는지 판단
  const handleJudegeXClick = () => {
    setIsActiveComment(true);
    setIsClickedReply(false);
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(false);
    setIsClickedEidt(false);
    setIsClickedReplyEdit(false);
    setContent("");
    nameFoucs();
  };

  const handleCommentLikeClick = async (commentID) => {
    try {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentID
            ? {
                ...comment,
                isLike: !comment.isLike,
                likeCount: comment.isLike
                  ? comment.likeCount - 1
                  : comment.likeCount + 1,
                likeSrc: comment.isLike
                  ? "/images/volunteer/announcement/comment_like_icon.svg"
                  : "/images/volunteer/announcement/comment_active_like_icon.svg",
              }
            : comment
        )
      );
      //const data = await likeComment();
    } catch {
      console.log(error);
    }
  };

  const handleReplyLikeClick = (commentID, replyID) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentID) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === replyID
                ? {
                    ...reply,
                    isLike: !reply.isLike,
                    likeCount: reply.isLike
                      ? reply.likeCount - 1
                      : reply.likeCount + 1,
                    likeSrc: reply.isLike
                      ? "/images/volunteer/announcement/comment_like_icon.svg"
                      : "/images/volunteer/announcement/comment_active_like_icon.svg",
                  }
                : reply
            ),
          };
        }
        return comment;
      })
    );
  };

  console.log(comments);

  return {
    handleCommentLikeClick,
    handleReplyLikeClick,
    noticeInfos,
    isCommentMenuClicked,
    clickedCommentID,
    isReplyMenuClicked,
    clickedReplyID,
    wrapperRef,
    handleMenuClick,
    focus,
    comments,
    content,
    isActiveComment,
    handleContentValue,
    name,
    isClickedReply,
    activeReply,
    isClickedEdit,
    activeCommentEdit,
    isClickedReplyEdit,
    activeReplyEdit,
    handleContentSubmit,
    handleJudegeXClick,
    handleDelete,
  };
};
