import NoticeUI from "./Notice.presenter";
import VolunteerDetailHeader from "../../volunteerDetailHeader/VolunteerDetailHeader.container";
import { useComment } from "../../../../commons/comment/hooks/useComment";
import { usePhotoModal } from "../../../../../../src/components/commons/hooks/usePhotoModal";

export default function Notice({
  isSSRLoggedIn,
  noticeData,
  profileData,
  noticeID,
  userRole,
}) {

  const {
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
  } = useComment(noticeData.comments, profileData, noticeID);

  const getSliderSettings = (imageCount = 0) => {
    return {
      dots: true,
      infinite: imageCount > 1,
      centerMode: imageCount > 1,
      centerPadding: imageCount > 1 ? "75px" : "0px",
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    };
  };

  const {
    isPhotoModalOpen,
    openPhotoModal,
    closePhotoModal,
    currentIndex,
    photosModal,
    handleNext,
    handlePrev,
    photoModalHandlers,
  } = usePhotoModal();

  return (
    <>
      <VolunteerDetailHeader
        isSSRLoggedIn={isSSRLoggedIn}
        userRole={userRole}
      />
      <NoticeUI
        noticeID={noticeID}
        noticeData={noticeData}
        comments={comments}
        addComment={addComment}
        addReply={addReply}
        deleteComment={deleteComment}
        deleteReply={deleteReply}
        handleReplyClick={handleReplyClick}
        handleEditClick={handleEditClick}
        handleCancelReply={handleCancelReply}
        editComment={editComment}
        replyingToId={replyingToId}
        replyingToName={replyingToName}
        editingContent={editingContent}
        isEditing={isEditing}
        editingId={editingId}
        profileData={profileData}
        handleCommentToggleLike={handleCommentToggleLike}
        handleReplyToggleLike={handleReplyToggleLike}
        getSliderSettings={getSliderSettings}

        isPhotoModalOpen={isPhotoModalOpen}
        openPhotoModal={openPhotoModal}
        closePhotoModal={closePhotoModal}
        currentIndex={currentIndex}
        photosModal={photosModal}
        handleNext={handleNext}
        handlePrev={handlePrev}
        photoModalHandlers={photoModalHandlers}
      />
    </>
  );
}
