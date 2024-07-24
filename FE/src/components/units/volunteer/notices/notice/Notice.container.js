import LikeImage from "./hooks/LikeImage";
import NoticeUI from "./Notice.presenter";
import VolunteerDetailHeader from "../../detail/volunteerDetailHeader/VolunteerDetailHeader.container";
import { useComment } from "./hooks/useComment";
import useFetchNotice from "./hooks/useFetchNotice";
import { useState } from 'react';

export default function Notice() {
  const {
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
  } = useComment();

  return (
    <>
      <VolunteerDetailHeader />
      <NoticeUI
        handleCommentLikeClick={handleCommentLikeClick}
        handleReplyLikeClick={handleReplyLikeClick}
        noticeInfos={noticeInfos}
        LikeImage={LikeImage} //좋아요 버튼을 위한 컴포넌트
        wrapperRef={wrapperRef} //메뉴창 내/외부 판단
        handleMenuClick={handleMenuClick} //댓글 or 답글 메뉴 판단
        isCommentMenuClicked={isCommentMenuClicked} //댓글 메뉴 true
        clickedCommentID={clickedCommentID} //클릭한 된 댓들 id취득
        isReplyMenuClicked={isReplyMenuClicked} //답글 메뉴 true
        clickedReplyID={clickedReplyID} //클릭한 닷글 id취득
        focus={focus} //input태그에 항상 focus를 유지
        comments={comments} //댓글이나 답글을 담아둘 배열
        content={content} //input에 있는 댓글
        isActiveComment={isActiveComment}
        handleContentValue={handleContentValue} //댓글 텍스트를 받아오는 값
        handleContentSubmit={handleContentSubmit} //댓글을 등록하기 위한 기능
        isClickedReply={isClickedReply} //답글 달기를 눌렀는지를 판단하는 변수
        activeReply={activeReply} //답글 모드 활성화
        isClickedEdit={isClickedEdit} //수정하기를 클릭하였는지 판단
        activeCommentEdit={activeCommentEdit}
        isClickedReplyEdit={isClickedReplyEdit} //답글 수정하기를 눌렀는가 판단
        activeReplyEdit={activeReplyEdit}
        handleJudegeXClick={handleJudegeXClick}
        handleDelete={handleDelete} //댓글 삭제 기능
        name={name}
      />
    </>
  );
}
