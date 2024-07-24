import { useCallback } from "react";
import useModalStore from "../../../../src/store/useModalStore";
import { toggleLike } from "../api/toggleLike";

const useLikeToggle = (isSSRLoggedIn) => {
  const { openModal } = useModalStore();

  const handleToggleLike = useCallback(
    async (petId) => {
      if (!isSSRLoggedIn) {
        openModal();
        return false;
      } else {
        const isSuccess = await toggleLike(petId);
        return isSuccess;
      }
    },
    [isSSRLoggedIn, openModal]
  );

  return handleToggleLike;
};

export default useLikeToggle;
