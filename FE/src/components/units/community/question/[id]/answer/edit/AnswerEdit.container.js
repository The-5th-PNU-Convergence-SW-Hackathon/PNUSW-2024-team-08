import { useNavigate } from "../../../../../../../../src/components/commons/hooks/useNavigate";
import AnswerEditUI from "./AnswerEdit.presenter";
import { usePhotoManager } from "../../../../../../../../src/components/commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../../../../../../src/components/commons/hooks/usePhotoModal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSubmitAnswerEdit } from "./hooks/useSubmitAnswerEdit";
import ResultModalUI from "../../../../../../../../src/components/commons/resultModal/ResultModal.presenter";

export default function AnswerEdit({
  isSSRLoggedIn,
  profileURL,
  answerDetailData,
}) {
  console.log("AnswerEdit isSSRLoggedIn: ", isSSRLoggedIn);

  console.log("answerDetailData: ", answerDetailData);

  const router = useRouter();
  const { id, answer_id } = router.query;
  const [answerDetail, setAnswerDetail] = useState(answerDetailData);
  const {
    photos,
    isPhotoLimitReached,
    addPhoto,
    deletePhoto,
    handlePhotoUpload,
    fileInputRef,
    handlePhotoAddClick,
  } = usePhotoManager(answerDetailData.images);
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
    handleChange,
    handleSubmit,
    handleCorrectResult,
    resultModalText,
  } = useSubmitAnswerEdit(id, answer_id, answerDetail, photos);
  const { navigateBack } = useNavigate();

  useEffect(() => {
    console.log("Current photos in CommunityWrite:", photos);
  }, [photos]);

  return (
    <>
      <AnswerEditUI
        answerDetail={answerDetail}
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
