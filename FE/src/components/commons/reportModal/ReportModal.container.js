import { useEffect, useState } from "react";
import ReportModalUI from "./ReportModal.presenter";
import { useRequestSubmit } from "./hooks/useRequestSubmit";

export default function ReportModal({ isOpen, onClose, commentId, replyId }) {
  const [submit, setSubmit] = useState({
    contentId: null,
    reportType: "",
    contentType: "",
    reason: "",
  });

  const {
    contentId,
    selectedReportType,
    selectedReason,
    reportOptions,
    contentType,
    handleReportSelect,
    handleClose,
    handleOutsideClick,
    handleRequest,
  } = useRequestSubmit(onClose, commentId, replyId);

  useEffect(() => {
    setSubmit({
      contentId: contentId,
      reportType: selectedReportType,
      contentType: contentType,
      reason: selectedReason,
    });
  }, [selectedReportType, contentType, selectedReason]);

  if (!isOpen) return null;

  return (
    <ReportModalUI
      selectedReportType={selectedReportType}
      handleReportSelect={handleReportSelect}
      reportOptions={reportOptions}
      handleClose={handleClose}
      handleOutsideClick={handleOutsideClick}
      handleRequest={handleRequest}
      submit={submit}
    />
  );
}
