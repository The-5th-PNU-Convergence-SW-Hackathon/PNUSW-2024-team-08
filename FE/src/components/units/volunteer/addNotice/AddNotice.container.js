import AddNoticeUI from "./AddNotice.presenter";
import { usePhotoManager } from "../../../commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../commons/hooks/usePhotoModal";
import { useNavigate } from "../../../../components/commons/hooks/useNavigate";
import { useSubmitNotice } from "./hooks/useSubmitNotice";
import ResultModalUI from "../../../commons/resultModal/ResultModal.presenter";

export default function AddNotice() {

  const { navigateBack } = useNavigate();
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

  const { isCorrectResult, handleChange, handleSubmit, handleCorrectResult } =
    useSubmitNotice(photos);

  return (
    <>
      <AddNoticeUI
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
        isCorrectResult={isCorrectResult}
        handleCorrectResult={handleCorrectResult}
        type={"post"}
      />
    </>
  )
}