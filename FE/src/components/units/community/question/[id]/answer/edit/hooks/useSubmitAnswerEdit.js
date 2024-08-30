import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useS3Upload from "../../../../../../../../../src/components/commons/hooks/useS3Upload";
import { submitAnswerEdit } from "../AnswerEdit.queries";

export function useSubmitAnswerEdit(id, answer_id, initialData, photos) {
  const router = useRouter();
  const [isCorrectResult, setIsCorrectResult] = useState(false);
  const [postData, setPostData] = useState({
    title: "answer edit",
    type: "ANSWER",
    content: initialData.content,
    retainedImageIds: initialData.images.map((image) => image.id),
    newImages: [],
  });
  const { uploadFile } = useS3Upload("pnucoding", "community");

  const resultModalText = {
    text: "답변을 수정하였습니다.",
    subText: "확인을 누르면 질문 상세페이지로 이동합니다.",
    confirmText: "확인",
  };

  useEffect(() => {
    if (photos) {
      if (photos.length === 0) {
        setPostData((prevData) => ({
          ...prevData,
          retainedImageIds: [],
          newImages: [],
        }));
      } else {
        // 필터링하여 retainedImageIds에서 photos에 없는 요소를 삭제
        const currentPhotoIds = photos.map((photo) => photo.id);
        const updatedRetainedImageIds = postData.retainedImageIds.filter((id) =>
          currentPhotoIds.includes(id)
        );

        // 새로운 이미지를 추가
        const initialImages = photos
          .filter((photo) => !updatedRetainedImageIds.includes(photo.id))
          .map((photo) => ({ imageURL: photo.file }));

        setPostData((prevData) => ({
          ...prevData,
          retainedImageIds: updatedRetainedImageIds,
          newImages: initialImages,
        }));
      }
    }
  }, [photos]);

  useEffect(() => {
    console.log("postData: ", postData);
    console.log("photos: ", photos);
  }, [postData, photos]);

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

  const submitPostData = async (formData) => {
    console.log("Form data before upload:", formData);
    const newImages = await uploadImagesToS3(formData.newImages);
    const updatedPostData = { ...formData, newImages };
    console.log("Form data after upload:", updatedPostData);
    const data = await submitAnswerEdit(answer_id, updatedPostData);
    if (data?.success) {
      setIsCorrectResult(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPostData(postData);
  };

  const handleCorrectResult = () => {
    router.push(`/community/question/${id}`);
  };

  return {
    postData,
    isCorrectResult,
    handleChange,
    handleSubmit,
    handleCorrectResult,
    resultModalText,
  };
}
