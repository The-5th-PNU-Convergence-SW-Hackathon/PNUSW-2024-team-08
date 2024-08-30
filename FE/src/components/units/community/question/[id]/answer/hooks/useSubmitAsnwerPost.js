import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { submitAnswerPost } from "../QuestionAnswer.queries";
import useS3Upload from "../../../../../../../../src/components/commons/hooks/useS3Upload";

export function useSubmitAnswerPost(photos) {
  const router = useRouter();
  const { id } = router.query;
  const [isCorrectResult, setIsCorrectResult] = useState(false);
  const [postData, setPostData] = useState({
    content: "",
    images: [],
  });
  const { uploadFile } = useS3Upload("pnucoding", "community");

  const resultModalText = {
    text: "답변을 삭제하였습니다.",
    subText: "확인을 누르면 질문 상세페이지로 이동합니다.",
    confirmText: "확인",
  };

  useEffect(() => {
    if (photos && photos.length > 0) {
      const initialImages = photos.map((photo) => ({ imageURL: photo.file }));
      setPostData((prevData) => ({ ...prevData, images: initialImages }));
    }
  }, [photos]);

  const uploadImagesToS3 = async (photos) => {
    const uploadPromises = photos.map((photo) => {
      console.log("Uploading photo:", photo);
      return uploadFile(photo.imageURL);
    });
    const imageUrls = await Promise.all(uploadPromises);
    console.log("Uploaded image URLs:", imageUrls);
    return imageUrls
      .filter((url) => url !== null)
      .map((url) => ({ imageURL: url }));
  };

  const submitAnswerPostData = async (formData) => {
    console.log("Form data before upload:", formData);
    const images = await uploadImagesToS3(formData.images);
    const updatedPostData = { ...formData, images };
    console.log("Form data after upload:", updatedPostData);
    const data = await submitAnswerPost(id, updatedPostData);
    if (data?.success) {
      setIsCorrectResult(true);
    }
  };

  const handleChange = (e) => {
    setPostData((prevData) => ({ ...prevData, content: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswerPostData(postData);
  };

  const handleCorrectResult = () => {
    router.push(`/community/question/${id}`);
  };

  return {
    isCorrectResult,
    handleChange,
    handleSubmit,
    handleCorrectResult,
    resultModalText,
  };
}
