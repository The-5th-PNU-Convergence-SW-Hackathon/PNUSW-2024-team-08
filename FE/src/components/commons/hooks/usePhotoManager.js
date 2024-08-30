import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useImageCompressor from "./useImageCompressor";

export const usePhotoManager = (initialPhotos = []) => {
  const [photos, setPhotos] = useState(initialPhotos);
  const maxPhotos = 5;
  const [isPhotoLimitReached, setIsPhotoLimitReached] = useState(
    initialPhotos.length === maxPhotos
  );

  const { compressImage } = useImageCompressor(); // useImageCompressor 훅 사용

  useEffect(() => {
    console.log("photos: " + JSON.stringify(photos, null, 2));
    console.table(photos);
  }, [photos]);

  const addPhoto = async (files) => {
    const currentPhotoCount = photos.length;
    const allowedFiles = Array.from(files).slice(
      0,
      maxPhotos - currentPhotoCount
    );

    const newPhotos = await Promise.all(
      allowedFiles
        .filter((file) => file.type.startsWith("image/"))
        .map(async (file) => {
          const newPhotoId = uuidv4();
          const compressedFile = await compressImage(file); // 압축 적용
          return {
            id: newPhotoId,
            name: file.name,
            file: compressedFile,
            preview: URL.createObjectURL(compressedFile),
          };
        })
    );

    const updatedPhotos = [...photos, ...newPhotos];
    setPhotos(updatedPhotos);
    setIsPhotoLimitReached(updatedPhotos.length >= maxPhotos);
  };

  const deletePhoto = (idToDelete) => {
    const newPhotos = photos.filter((photo) => photo.id !== idToDelete);
    setPhotos(newPhotos);
    setIsPhotoLimitReached(newPhotos.length === maxPhotos);
  };

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      addPhoto(files);
    }
  };

  const fileInputRef = useRef(null);
  const handlePhotoAddClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return {
    photos,
    isPhotoLimitReached,
    addPhoto,
    deletePhoto,
    handlePhotoUpload,
    fileInputRef,
    handlePhotoAddClick,
  };
};
