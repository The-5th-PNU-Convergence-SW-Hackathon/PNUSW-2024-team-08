import { useNavigate } from "../../../../../../../src/components/commons/hooks/useNavigate";
import QuestionEditUI from "./QuestionEdit.presenter";
import { usePhotoManager } from "../../../../../../../src/components/commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../../../../../src/components/commons/hooks/usePhotoModal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSubmitQuestionEdit } from "./hooks/useSubmitQuestionEdit";
import ResultModalUI from "../../../../../../../src/components/commons/resultModal/ResultModal.presenter";

export default function QuestionEdit({
  isSSRLoggedIn,
  profileURL,
  questionDetailData,
}) {
  console.log("QuestionEdit isSSRLoggedIn: ", isSSRLoggedIn);

  console.log("questionDetailData: ", questionDetailData);

  const router = useRouter();
  const { id } = router.query;
  const [questionDetail, setQuestionDetail] = useState(questionDetailData);
  const {
    photos,
    isPhotoLimitReached,
    addPhoto,
    deletePhoto,
    handlePhotoUpload,
    fileInputRef,
    handlePhotoAddClick,
  } = usePhotoManager(questionDetail.images);
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
    handleChange,
    handleSubmit,
    handleCorrectResult,
    resultModalText,
  } = useSubmitQuestionEdit(id, questionDetail, photos);
  const { navigateBack } = useNavigate();

  useEffect(() => {
    console.log("Current photos in CommunityWrite:", photos);
  }, [photos]);

  return (
    <>
      <QuestionEditUI
        questionDetail={questionDetail}
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
