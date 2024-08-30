import CommunityDetailUI from "./CommunityDetail.presenter";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import useMenuToggle from "../../../../../src/components/commons/hooks/useMenuToggle";
import { useComment } from "../../../../../src/components/commons/comment/hooks/useComment";
import { useFormatDateTime } from "../../../units/volunteer/hooks/useFormat";
import { usePhotoModal } from "../../../../../src/components/commons/hooks/usePhotoModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useCommunityDelete } from "./hooks/useCommunityDelete";
import { useCommunityLike } from "./hooks/useCommunityLike";
import { useRequestReport } from "../reportModal/hooks/useRequestReport";
import ReportModalUI from "../reportModal/ReportModal.presenter";
import ResultModalUI from "../../../../../src/components/commons/resultModal/ResultModal.presenter";

export default function CommunityDetail({
  isSSRLoggedIn,
  profileURL,
  communityDetailData,
  profileData,
  communityId,
}) {
  console.log("communityDetailData: ", communityDetailData);
  console.log("profileData: ", profileData);
  console.log("communityId: ", communityId);

  const router = useRouter();
  const { type } = router.query;
  const { isMenuClicked, handleMenuClick, menuRefs } = useMenuToggle(1);

  const getSliderSettings = (imageCount) => {
    return {
      dots: imageCount > 1 ? true : false,
      infinite: imageCount > 1,
      centerMode: imageCount > 1,
      centerPadding: imageCount > 1 ? "75px" : "0px",
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    };
  };

  const AdBannerSliderSettings = {
    dots: false,
    infinite: true,
    // centerMode: true,
    // centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
  };

  const {
    communityDeleteResult,
    handleCommunityDelete,
    handleCommunityDeleteResult,
    resultModalText,
  } = useCommunityDelete(type);

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

  const { isLiked, likeNum, toggleLikeButton } = useCommunityLike(
    communityId,
    communityDetailData.isLike,
    communityDetailData.likeNum
  );

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
  } = useComment(communityDetailData.comments, profileData, communityId);

  const {
    isModalOpen,
    selectedReportType,
    reportOptions,
    handleReportSelect,
    handleOpen,
    handleClose,
    handleOutsideClick,
    handleRequestReport,
  } = useRequestReport();

  const { navigateTo, navigateBack } = useNavigate();

  return (
    <>
      <CommunityDetailUI
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        menuRefs={menuRefs}
        handleOpen={handleOpen}
        communityId={communityId}
        type={type}
        communityDetailData={communityDetailData}
        useFormatDateTime={useFormatDateTime}
        getSliderSettings={getSliderSettings}
        AdBannerSliderSettings={AdBannerSliderSettings}
        handleCommunityDelete={handleCommunityDelete}
        isPhotoModalOpen={isPhotoModalOpen}
        openPhotoModal={openPhotoModal}
        closePhotoModal={closePhotoModal}
        currentIndex={currentIndex}
        photosModal={photosModal}
        handleNext={handleNext}
        handlePrev={handlePrev}
        photoModalHandlers={photoModalHandlers}
        isLiked={isLiked}
        likeNum={likeNum}
        toggleLikeButton={toggleLikeButton}
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
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
      <ResultModalUI
        modalText={resultModalText}
        isModalOpen={communityDeleteResult}
        handleConfrimBtn={handleCommunityDeleteResult}
      />
      <ReportModalUI
        isModalOpen={isModalOpen}
        selectedReportType={selectedReportType}
        handleReportSelect={handleReportSelect}
        reportOptions={reportOptions}
        handleClose={handleClose}
        handleOutsideClick={handleOutsideClick}
        handleRequestReport={handleRequestReport}
      />
    </>
  );
}
