import EditNoticeUI from "./EditNotice.presenter";
import { usePhotoManager } from "../../../../../../../src/components/commons/hooks/usePhotoManager";
import { usePhotoModal } from "../../../../../../../src/components/commons/hooks/usePhotoModal";
import { useNavigate } from "../../../../../../../src/components/commons/hooks/useNavigate";
import { useSubmitEditNotice } from "./hooks/useSubmitEditNotice";
import ResultModalUI from "../../../../../../../src/components/commons/resultModal/ResultModal.presenter";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EditNotice({
  isSSRLoggedIn,
  profileURL,
  noticeData,
}) {

  const { navigateBack } = useNavigate();

  console.log(isSSRLoggedIn);
  console.log(isSSRLoggedIn.noticeData);

  const router = useRouter();
  const { noticeID } = router.query;
  const [noticeDetail, setNoticeDetail] = useState(isSSRLoggedIn.noticeData);

  const {
    photos,
    isPhotoLimitReached,
    addPhoto,
    deletePhoto,
    handlePhotoUpload,
    fileInputRef,
    handlePhotoAddClick,
  } = usePhotoManager(noticeDetail.images);

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
    edeitNoticeData,
    isCorrectResult,
    handleChange,
    handleSubmit,
    handleCorrectResult
  } = useSubmitEditNotice(noticeID, noticeDetail, photos);

  return (
    <>
      <EditNoticeUI
        navigateBack={navigateBack}
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
        edeitNoticeData={edeitNoticeData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ResultModalUI
        isCorrectResult={isCorrectResult}
        handleCorrectResult={handleCorrectResult}
        type={"edit"}
      />
    </>
  )
}