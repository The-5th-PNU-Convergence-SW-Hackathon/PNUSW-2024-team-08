import QuestionAnswerUI from "./QuestionAnswer.presenter";
import { usePhotoManager } from "../../../../../../../src/components/commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../../../../../src/components/commons/hooks/usePhotoModal";
import { useNavigate } from "../../../../../../../src/components/commons/hooks/useNavigate";
import { useSubmitAnswerPost } from "./hooks/useSubmitAsnwerPost";

export default function QuestionAnswer() {
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
  const { handleChange, handleSubmit } = useSubmitAnswerPost();
  const { navigateBack } = useNavigate();

  return (
    <QuestionAnswerUI
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
