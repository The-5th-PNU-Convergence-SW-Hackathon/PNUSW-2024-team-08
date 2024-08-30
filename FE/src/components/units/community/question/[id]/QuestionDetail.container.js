import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../../commons/headers/Headers.container";
import Navigation from "../../../../commons/navigation/Navigation.container";
import QuestionDetailUI from "./QuestionDetail.presenter";
import useRequireLogin from "../../../../../../src/components/commons/hooks/useRequireLogin";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePhotoModal } from "../../../../../../src/components/commons/hooks/usePhotoModal";
import { useRouter } from "next/router";
import useMenuToggle from "../../../../../../src/components/commons/hooks/useMenuToggle";
import { useQNADelete } from "./hooks/useQNADelete";
import { useFormatDateTime } from "../../../../units/volunteer/hooks/useFormat";
import { useRequestReport } from "../../reportModal/hooks/useRequestReport";
import ReportModalUI from "../../reportModal/ReportModal.presenter";
import ResultModalUI from "../../../../../../src/components/commons/resultModal/ResultModal.presenter";

export default function QuestionDetail({
  isSSRLoggedIn,
  profileURL,
  questionDetailData,
}) {
  console.log("QuestionDetail isSSRLoggedIn: ", isSSRLoggedIn);

  console.log("questionDetailData: ", questionDetailData);

  const router = useRouter();
  const { id } = router.query;
  console.log("id: ", id);
  const [questionDetail, setQuestionDetail] = useState(questionDetailData);
  const { isMenuClicked, handleMenuClick, menuRefs } = useMenuToggle(
    questionDetailData?.answers?.length + 1 || 1
  );

  const getSliderSettings = (imageCount) => {
    return {
      dots: imageCount > 1 ? true : false,
      infinite: imageCount > 1,
      centerMode: imageCount > 1,
      centerPadding: imageCount > 1 ? "52px" : "0px",
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    };
  };

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
    questionDeleteResult,
    answerDeleteResult,
    handleQuestionDelete,
    handleAnswerDelete,
    handleQuestionDeleteResult,
    handleAnswerDeleteResult,
    questionModalText,
    answerModalText,
  } = useQNADelete();

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
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <QuestionDetailUI
        questionDetail={questionDetail}
        id={id}
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        handleOpen={handleOpen}
        menuRefs={menuRefs}
        useFormatDateTime={useFormatDateTime}
        isPhotoModalOpen={isPhotoModalOpen}
        openPhotoModal={openPhotoModal}
        closePhotoModal={closePhotoModal}
        currentIndex={currentIndex}
        photosModal={photosModal}
        handleNext={handleNext}
        handlePrev={handlePrev}
        photoModalHandlers={photoModalHandlers}
        handleQuestionDelete={handleQuestionDelete}
        handleAnswerDelete={handleAnswerDelete}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
        getSliderSettings={getSliderSettings}
      />
      <Navigation handleRequireModal={handleRequireModal} />
      <ResultModalUI
        modalText={questionModalText}
        isModalOpen={questionDeleteResult}
        handleConfirmBtn={handleQuestionDeleteResult}
      />
      <ResultModalUI
        modalText={answerModalText}
        isModalOpen={answerDeleteResult}
        handleConfirmBtn={handleAnswerDeleteResult}
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
