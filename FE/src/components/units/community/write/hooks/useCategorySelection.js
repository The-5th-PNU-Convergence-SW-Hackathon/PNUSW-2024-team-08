import { useEffect, useState } from "react";

export const useCategorySelection = (type) => {
  const [title, setTitle] = useState("게시글 등록");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // 쿼리 파라미터에 따라 category 상태 설정
    if (type === "ADOPTION") setCategory("입양 스토리");
    else if (type === "FOSTERING") setCategory("임시보호 스토리");
    else if (type === "QUESTION") {
      setCategory("궁금해요");
      setTitle("질문하기");
    }
  }, [type]);

  return {
    title,
    category,
  };
};
