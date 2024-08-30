import { useState, useEffect } from "react";
import { submitEditNotice } from "../EditNotice.queries";
import useS3Upload from "../../../../../../../../src/components/commons/hooks/useS3Upload";
import { useRouter } from "next/router";

export function useSubmitEditNotice(id, initialData, photos) {
  const router = useRouter();
  const [isCorrectResult, setIsCorrectResult] = useState(false);
  const [edeitNoticeData, setEditNoticeData] = useState({
    title: initialData.title,
    type: "NOTICE",
    content: initialData.content,
    retainedImageIds: initialData.images.map((image) => image.id),
    images: [],
  });

  const { uploadFile } = useS3Upload("pnucoding", "volunteer");

  useEffect(() => {
    if (photos) {
      if (photos.length === 0) {
        setEditNoticeData((prevData) => ({
          ...prevData,
          retainedImageIds: [],
          newImages: [],
        }));
      } else {
        // 필터링하여 retainedImageIds에서 photos에 없는 요소를 삭제
        const currentPhotoIds = photos.map((photo) => photo.id);
        const updatedRetainedImageIds = edeitNoticeData.retainedImageIds.filter((id) =>
          currentPhotoIds.includes(id)
        );

        // 새로운 이미지를 추가
        const initialImages = photos
          .filter((photo) => !updatedRetainedImageIds.includes(photo.id))
          .map((photo) => ({ imageURL: photo.file }));

        setEditNoticeData((prevData) => ({
          ...prevData,
          retainedImageIds: updatedRetainedImageIds,
          newImages: initialImages,
        }));
      }
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

  const submitNoticeData = async (formData) => {
    console.log("Form data before upload:", formData);
    const newImages = await uploadImagesToS3(formData.newImages);
    const updatedPostData = { ...formData, newImages };
    console.log("Form data after upload:", updatedPostData);
    const data = await submitEditNotice(id, updatedPostData);
    if (data?.success) {
      setIsCorrectResult(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditNoticeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitNoticeData(edeitNoticeData);
  };

  const handleCorrectResult = () => {
    router.back();
  };

  return {
    edeitNoticeData,
    isCorrectResult,
    handleChange,
    handleSubmit,
    handleCorrectResult
  }
}

