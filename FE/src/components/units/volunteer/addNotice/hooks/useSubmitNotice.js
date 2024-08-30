import { useState, useEffect } from "react";
import { submitNotice } from "../AddNotice.queries";
import useS3Upload from "../../../../commons/hooks/useS3Upload";
import { useRouter } from "next/router";

export function useSubmitNotice(photos) {
  const router = useRouter();
  const { id } = router.query;
  const [noticeID, setNoticeId] = useState();
  const [isCorrectResult, setIsCorrectResult] = useState(false);
  const [noticeData, setNoticeData] = useState({
    title: "",
    content: "",
    images: [],
  });
  const { uploadFile } = useS3Upload("pnucoding", "volunteer");

  useEffect(() => {
    if (photos && photos.length > 0) {
      const initialImages = photos.map((photo) => ({ imageURL: photo.file }));
      setNoticeData((prevData) => ({ ...prevData, images: initialImages }));
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

  const submitNoticeData = async (id, formData) => {
    console.log("Form data before upload:", formData);
    const images = await uploadImagesToS3(formData.images);
    const updatedNoticeData = { ...formData, images };
    console.log("Form data after upload:", updatedNoticeData);
    const data = await submitNotice(id, updatedNoticeData);
    if (data.success) {
      setNoticeId(data.result.id);
      setIsCorrectResult(true);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoticeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitNoticeData(id, noticeData);
  };

  const handleCorrectResult = () => {
    router.push(`/volunteer/${id}/notices/${noticeID}`);
  };

  return { isCorrectResult, handleChange, handleSubmit, handleCorrectResult }
}