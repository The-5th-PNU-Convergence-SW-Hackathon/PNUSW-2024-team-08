import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import CommunityWriteUI from "./CommunityWrite.presenter";
import { useCategorySelection } from "./hooks/useCategorySelection";
import { usePhotoManager } from "../../../../../src/components/commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../../../src/components/commons/hooks/usePhotoModal";
import { useSubmitPost } from "./hooks/useSubmitPost";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import ResultModalUI from "../../../../../src/components/commons/resultModal/ResultModal.presenter";

export default function CommunityWrite({ isSSRLoggedIn }) {
  console.log("CommunityWrite isSSRLoggedIn: ", isSSRLoggedIn);

  const router = useRouter();
  const { type } = router.query; // 쿼리 파라미터에서 type 추출
  const { title, category } = useCategorySelection(type);
  const {
    photos,
    isPhotoLimitReached,
    addPhoto,
    deletePhoto,
    handlePhotoUpload,
    fileInputRef,
    handlePhotoAddClick,
  } = usePhotoManager();
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
    isCorrectResult,
    isContentValid,
    isPhotoRequired,
    handleChange,
    handleSubmit,
    handleCorrectResult,
    resultModalText,
  } = useSubmitPost(type, photos);
  const { navigateBack } = useNavigate();

  useEffect(() => {
    console.log("Current photos in CommunityWrite:", photos);
  }, [photos]);

  return (
    <>
      <CommunityWriteUI
        title={title}
        type={type}
        category={category}
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
        isContentValid={isContentValid}
        isPhotoRequired={isPhotoRequired}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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
