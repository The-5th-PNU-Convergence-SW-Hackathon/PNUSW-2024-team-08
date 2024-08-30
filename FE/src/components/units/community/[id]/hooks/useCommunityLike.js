import { useRouter } from "next/router";
import { useState } from "react";
import { debounce } from "lodash";
import { submitCommunityLike } from "../CommunityDetail.queries";

export function useCommunityLike(id, initialIsLike, initialLikeNum) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(initialIsLike);
  const [likeNum, setLikeNum] = useState(initialLikeNum);

  const toggleLikeButton = debounce(async () => {
    const result = await submitCommunityLike(id);
    if (!result) return;

    if (isLiked) setLikeNum(likeNum - 1);
    else setLikeNum(likeNum + 1);
    setIsLiked(!isLiked);
  }, 200); // 200ms 디바운스 적용

  return {
    isLiked,
    likeNum,
    toggleLikeButton,
  };
}
