import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useImageCompressor from "./useImageCompressor";

export const useProfilePhotoManager = () => {
  const [photo, setPhoto] = useState(null);
  const { compressImage } = useImageCompressor();

  useEffect(() => {
    if (photo) {
      console.log("photo: " + JSON.stringify(photo, null, 2));
    } else {
      console.log("No photo selected");
    }
  }, [photo]);

  const addPhoto = async (file) => {
    if (file && file.type.startsWith("image/")) {
      try {
        const compressedFile = await compressImage(file); // 압축 적용
        const newPhotoId = uuidv4();
        const newPhoto = {
          id: newPhotoId,
          name: file.name,
          file: compressedFile,
          preview: URL.createObjectURL(compressedFile),
        };
        setPhoto(newPhoto); // 새로운 사진으로 설정
      } catch (error) {
        console.error("Failed to compress the image:", error);
      }
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0]; // 첫 번째 파일만 선택
    if (file) {
      addPhoto(file);
    }
  };

  const fileInputRef = useRef(null);
  const handlePhotoAddClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const deletePhoto = () => {
    setPhoto(null);
  };

  return {
    photo,
    addPhoto,
    deletePhoto,
    handlePhotoUpload,
    fileInputRef,
    handlePhotoAddClick,
  };
};
