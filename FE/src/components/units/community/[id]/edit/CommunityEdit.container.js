import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import { usePhotoManager } from "../../../../../../src/components/commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../../../../src/components/commons/hooks/usePhotoModal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CommunityEditUI from "./CommunityEdit.presenter";
import { useSubmitCommunityEdit } from "./hooks/useSubmitCommunityEdit";
import ResultModalUI from "../../../../../../src/components/commons/resultModal/ResultModal.presenter";

export default function CommunityEdit({
  isSSRLoggedIn,
  profileURL,
  communityDetailData,
}) {
  console.log("QuestionEdit isSSRLoggedIn: ", isSSRLoggedIn);

  console.log("communityDetailData: ", communityDetailData);

  const router = useRouter();
  const { id, type } = router.query;
  const [communityDetail, setCommunityDetail] = useState(communityDetailData);
  const {
    photos,
    isPhotoLimitReached,
    addPhoto,
    deletePhoto,
    handlePhotoUpload,
    fileInputRef,
    handlePhotoAddClick,
  } = usePhotoManager(communityDetail.images);
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
  const {
    postData,
    isCorrectResult,
    isContentValid,
    isPhotoRequired,
    handleChange,
    handleSubmit,
    handleCorrectResult,
    resultModalText,
  } = useSubmitCommunityEdit(id, communityDetail, photos, type);
  const { navigateTo, navigateBack } = useNavigate();

  useEffect(() => {
    console.log("Current photos in CommunityWrite:", photos);
  }, [photos]);

  return (
    <>
      <CommunityEditUI
        communityDetail={communityDetail}
        type={type}
        photos={photos}
        isPhotoLimitReached={isPhotoLimitReached}
        addPhoto={addPhoto}
        deletePhoto={deletePhoto}
        handlePhotoUpload={handlePhotoUpload}
        fileInputRef={fileInputRef}
        handlePhotoAddClick={handlePhotoAddClick}
        isPhotoModalOpen={isPhotoModalOpen}
        openPhotoModal={openPhotoModal}
        closePhotoModal={closePhotoModal}
        currentIndex={currentIndex}
        photosModal={photosModal}
        handleNext={handleNext}
        handlePrev={handlePrev}
        photoModalHandlers={photoModalHandlers}
        postData={postData}
        isContentValid={isContentValid}
        isPhotoRequired={isPhotoRequired}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
      <ResultModalUI
        modalText={resultModalText}
        isModalOpen={isCorrectResult}
        handleConfirmBtn={handleCorrectResult}
      />
    </>
  );
}
