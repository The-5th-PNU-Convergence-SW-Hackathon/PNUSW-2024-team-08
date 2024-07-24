import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import CommunityWriteUI from "./CommunityWrite.presenter";
import { useCategorySelection } from "./hooks/useCategorySelection";
import { usePhotoManager } from "../../../../../src/components/commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../../../src/components/commons/hooks/usePhotoModal";
import { useSubmitPost } from "./hooks/useSubmitPost";
import { useRouter } from "next/router";

export default function CommunityWrite() {
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
    handleNext,
    handlePrev,
    photoModalHandlers,
  } = usePhotoModal(photos);
  const { handleChange, handleSubmit } = useSubmitPost(type);
  const { navigateBack } = useNavigate();

  return (
    <CommunityWriteUI
      title={title}
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
      handleNext={handleNext}
      handlePrev={handlePrev}
      photoModalHandlers={photoModalHandlers}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      navigateBack={navigateBack}
    />
  );
}
