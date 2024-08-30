import { useRouter } from "next/router";
import { submitPost } from "../CommunityWrite.queries";
import { useEffect, useState } from "react";
import useS3Upload from "../../../../../../src/components/commons/hooks/useS3Upload";

export function useSubmitPost(type, photos) {
  const router = useRouter();
  const [id, setId] = useState();
  const [isCorrectResult, setIsCorrectResult] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    type: type,
    content: "",
    images: [],
  });
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isContentValid, setIsContentValid] = useState(false);
  const [isPhotoRequired, setIsPhotoRequired] = useState(type === "QUESTION");
  const [isFormValid, setIsFormValid] = useState(false);
  const { uploadFile } = useS3Upload("pnucoding", "community");

  const resultModalText = {
    text: "게시물을 등록하였습니다.",
    subText: "확인을 누르면 상세페이지로 이동합니다.",
    confirmText: "확인",
  };

  // useEffect(() => {
  //   if (type) {
  //     setPostData((prevData) => ({ ...prevData, type: type }));
  //   }
  // }, [type]);

  useEffect(
    () => console.log("postData.type: " + postData.type),
    [postData.type]
  );

  useEffect(() => {
    if (photos && photos.length > 0) {
      const initialImages = photos.map((photo) => ({ imageURL: photo.file }));
      setPostData((prevData) => ({ ...prevData, images: initialImages }));
    }
  }, [photos]);

  useEffect(() => {
    setIsTitleValid(postData.title.length >= 1);
    setIsContentValid(postData.content.length >= 50);

    if (type === "QUESTION") {
      setIsPhotoRequired(true);
    } else {
      setIsPhotoRequired(photos.length >= 1);
    }
  }, [postData.title, postData.content, photos, type]);

  useEffect(() => {
    setIsFormValid(isTitleValid && isContentValid && isPhotoRequired);
  }, [isTitleValid, isContentValid, isPhotoRequired]);

  useEffect(() => {
    console.log("postData: ", postData);
    console.log("photos: ", photos);
    console.log("isFormValid: ", isFormValid);
  }, [postData, photos, isFormValid]);

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
    const images = await uploadImagesToS3(formData.images);
    const updatedPostData = { ...formData, images };
    console.log("Form data after upload:", updatedPostData);
    const data = await submitPost(updatedPostData);
    if (data?.success) {
      setId(data.result.id);
      setIsCorrectResult(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    submitPostData(postData);
  };

  const handleCorrectResult = () => {
    if (type === "QUESTION") router.push(`/community/question/${id}`);
    else router.push(`/community/${id}?type=${type.toLowerCase()}`);
  };

  return {
    isCorrectResult,
    isContentValid,
    isPhotoRequired,
    handleChange,
    handleSubmit,
    handleCorrectResult,
    resultModalText,
  };
}
