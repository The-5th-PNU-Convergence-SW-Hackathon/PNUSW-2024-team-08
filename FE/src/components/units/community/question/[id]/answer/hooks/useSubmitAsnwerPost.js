import { useRouter } from "next/router";
import { useState } from "react";
import { submitAnswerPost } from "../QuestionAnswer.queries";

export function useSubmitAnswerPost() {
  const router = useRouter();
  const { id } = router.query;
  const [postData, setPostData] = useState({
    content: "",
    images: [],
  });

  const submitAnswerPostData = async (postData) => {
    const data = await submitAnswerPost(id, postData);
    if (data.success) {
      router.push(`/community/question/${id}`);
    }
  };

  const handleChange = (e) => {
    setPostData((prevData) => ({ ...prevData, content: e.target.value }));
    console.log("postData: ", postData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswerPostData(postData);
  };

  return { handleChange, handleSubmit };
}
