import { useState } from "react";
import { requestReport } from "../ReportModal.queries";
import { useRouter } from "next/router";

export const useRequestSubmit = (onClose, commentId, replyId) => {
  const router = useRouter();
  const { id, noticeID } = router.query;
  const [selectedReportType, setSelectedReportType] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [contentType, setContentType] = useState("");
  const [contentId, setContentId] = useState(null);

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
    if (commentId || replyId) {
      setContentType("COMMENT");
      setContentId(commentId || replyId);
    } else if (noticeID) {
      setContentType("POST");
      setContentId(noticeID);
    } else if (id) {
      setContentType("POST");
      setContentId(id);
    }
  };

  const handleClose = () => {
    setSelectedReportType(""); // 모달을 닫을 때 선택된 신고 옵션 초기화
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleRequest = async (submit) => {
    try {
      const data = await requestReport(submit);
      if (data.success) {
        onClose();
      }
    } catch (error) {
      console.error("신고하기 실패");
    }
  };

  return {
    contentId,
    selectedReportType,
    selectedReason,
    contentType,
    reportOptions,
    handleReportSelect,
    handleClose,
    handleOutsideClick,
    handleRequest,
  };
};
