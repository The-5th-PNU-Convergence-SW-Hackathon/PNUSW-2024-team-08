import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { set } from "lodash";

export default function useSignout() {
  const router = useRouter();
  const [isConfrimModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const confirmModalText = {
    text: "정말 탈퇴하시겠습니까?",
    subText: "탈퇴 안내 서브메세지",
    cancelText: "다음에",
    confirmText: "탈퇴하기",
  };

  const resultModalText = {
    text: "탈퇴가 완료되었습니다.",
    subText: "탈퇴 확인 서브 메세지",
    confirmText: "확인",
  };

  const handleConfrimModal = useCallback(() => {
    setIsConfirmModalOpen((prev) => !prev);
  }, []);

  const handleResultModal = useCallback(() => {
    setIsConfirmModalOpen(false);
    setIsResultModalOpen((prev) => !prev);
  }, []);

  const confirmSignout = useCallback(() => {
    router.push("/login");
  }, []);

  return {
    isConfrimModalOpen,
    confirmModalText,
    isResultModalOpen,
    resultModalText,
    handleConfrimModal,
    handleResultModal,
    confirmSignout,
  };
}
