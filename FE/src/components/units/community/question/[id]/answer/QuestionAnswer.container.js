import QuestionAnswerUI from "./QuestionAnswer.presenter";
import { usePhotoManager } from "../../../../../../../src/components/commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../../../../../src/components/commons/hooks/usePhotoModal";
import { useNavigate } from "../../../../../../../src/components/commons/hooks/useNavigate";
import { useSubmitAnswerPost } from "./hooks/useSubmitAsnwerPost";
import ResultModalUI from "../../../../../../../src/components/commons/resultModal/ResultModal.presenter";

export default function QuestionAnswer({ isSSRLoggedIn }) {
  console.log("QuestionAnswer isSSRLoggedIn: ", isSSRLoggedIn);

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
    handleChange,
    handleSubmit,
    handleCorrectResult,
    resultModalText,
  } = useSubmitAnswerPost(photos);
  const { navigateBack } = useNavigate();

  return (
    <>
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
        photosModal={photosModal}
        handleNext={handleNext}
        handlePrev={handlePrev}
        photoModalHandlers={photoModalHandlers}
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
