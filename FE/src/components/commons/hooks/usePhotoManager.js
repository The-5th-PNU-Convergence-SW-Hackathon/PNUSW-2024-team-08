import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const usePhotoManager = () => {
  const [photos, setPhotos] = useState([]);
  const [isPhotoLimitReached, setIsPhotoLimitReached] = useState(false);

  const maxPhotos = 5;

  useEffect(() => {
    console.log("photos: " + JSON.stringify(photos, null, 2));
    console.table(photos);
  }, [photos]);

  const addPhoto = (files) => {
    const currentPhotoCount = photos.length;
    const allowedFiles = Array.from(files).slice(
      0,
      maxPhotos - currentPhotoCount
    );

    const newPhotos = allowedFiles
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => {
        const newPhotoId = uuidv4();
        return {
          id: newPhotoId,
          name: file.name,
          file: URL.createObjectURL(file),
        };
      });

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
