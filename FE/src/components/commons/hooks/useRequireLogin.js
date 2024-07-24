import { useCallback } from "react";
import { useRouter } from "next/router";
import useModalStore from "../../../../src/store/useModalStore";

const useRequireLogin = (isSSRLoggedIn) => {
  const router = useRouter();
  const { openModal } = useModalStore();

  const handleRequireModal = useCallback(
    (path) => {
      if (!isSSRLoggedIn) {
        openModal();
      } else if (router.pathname !== path) {
        // 현재 경로와 일치하지 않을 때만 이동
        router.push(path);
      }
    },
    [isSSRLoggedIn, openModal, router]
  );

  return handleRequireModal;
};

export default useRequireLogin;
