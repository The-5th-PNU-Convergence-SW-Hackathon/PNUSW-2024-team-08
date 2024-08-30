import { useState } from "react";
import { requestReport } from "../ReportModal.queries";
import { useRouter } from "next/router";

export const useRequestReport = () => {
  const router = useRouter();
  const [selectedReportType, setSelectedReportType] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [contentType, setContentType] = useState("");
  const [contentId, setContentId] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const reportOptions = [
    {
      value: "INAPPROPRIATE_FOR_FORUM_NATURE",
      label: "게시판 성격에 부적절함",
    },
    { value: "COMMERCIAL_ADVERTISING", label: "상업적 광고" },
    { value: "PROFANITY", label: "욕설" },
    { value: "CLICKBAIT_FLOODING", label: "낙서/도배" },
    { value: "LEAKS_IMPERSONATION_FRAUD", label: "유출/사칭/사기" },
    {
      value: "POLITICAL_DISPARAGEMENT_AND_CAMPAIGNING",
      label: "정당/정치인 비하 및 선거 운동",
    },
  ];

  const handleReportSelect = (value, label) => {
    setSelectedReportType(value);
    setSelectedReason(label);
  };

  const handleRequestReport = async () => {
    try {
      const data = await requestReport({
        contentId: contentId,
        reportType: selectedReportType,
        contentType: contentType,
        reason: selectedReason,
      });
      if (data.success) {
        handleClose();
      }
    } catch (error) {
      console.error("신고하기 실패");
    }
  };

  const handleOpen = (contentId, contentType) => {
    setContentId(contentId);
    setContentType(contentType);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedReportType("");
    setSelectedReason("");
    setContentType("");
    setContentId("");
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return {
    isModalOpen,
    contentId,
    selectedReportType,
    selectedReason,
    contentType,
    reportOptions,
    handleReportSelect,
    handleOpen,
    handleClose,
    handleOutsideClick,
    handleRequestReport,
  };
};
