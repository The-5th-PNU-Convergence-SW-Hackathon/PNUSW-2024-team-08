import { useRouter } from "next/router";
import { useState } from "react";
import { submitCommunityDelete } from "../CommunityDetail.queries";

export function useCommunityDelete(type) {
  const router = useRouter();
  const [communityDeleteResult, setCommunityDeleteResult] = useState(false);

  const resultModalText = {
    text: "게시물을 삭재하였습니다.",
    subText: "확인을 누르면 게시물 목록으로 이동합니다.",
    confirmText: "확인",
  };

  const handleCommunityDelete = async (id) => {
    console.log("id: ", id);
    const result = await submitCommunityDelete(id);
    if (result) {
      setCommunityDeleteResult(true);
    }
  };

  const handleCommunityDeleteResult = () => {
    router.push(`/community/${type}`);
  };

  return {
    communityDeleteResult,
    handleCommunityDelete,
    handleCommunityDeleteResult,
    resultModalText,
  };
}
