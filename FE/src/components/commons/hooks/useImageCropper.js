import { useState, useCallback, useEffect } from "react";

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // Needed to avoid cross-origin issues
    image.src = url;
  });

const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const diameter = Math.min(pixelCrop.width, pixelCrop.height);
  canvas.width = diameter;
  canvas.height = diameter;

  // 원형 경로 설정
  ctx.beginPath();
  ctx.arc(diameter / 2, diameter / 2, diameter / 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.clip();

  // 캔버스 배경을 투명하게 설정
  ctx.clearRect(0, 0, diameter, diameter);

  ctx.drawImage(
    image,
    pixelCrop.x + (pixelCrop.width - diameter) / 2,
    pixelCrop.y + (pixelCrop.height - diameter) / 2,
    diameter,
    diameter,
    0,
    0,
    diameter,
    diameter
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Canvas is empty"));
        return;
      }
      const fileUrl = window.URL.createObjectURL(blob);
      resolve({ fileUrl, blob });
    }, "image/jpeg");
  });
};

const blobToFile = (blob, fileName) => {
  return new File([blob], fileName, { type: blob.type });
};

export const useImageCropper = (photo) => {
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedFile, setCroppedFile] = useState(null); // File 객체 추가
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  const [cropComplete, setCropComplete] = useState(false);

  useEffect(() => {
    if (photo) {
      setIsCropModalOpen(true);
      setCropComplete(false);
    }
  }, [photo]);

  const cropImage = useCallback(
    async (imageSrc) => {
      try {
        if (!croppedAreaPixels) return;
        const { fileUrl, blob } = await getCroppedImg(
          imageSrc,
          croppedAreaPixels
        );
        console.log("croppedImage: " + fileUrl);
        console.log("croppedBlob: " + blob);
        const fileName = photo.name;
        const file = blobToFile(blob, fileName);
        setCroppedImage(fileUrl);
        setCroppedFile(file); // File 객체 설정
        setCropComplete(true);
      } catch (error) {
        console.error("Error cropping image: ", error);
      }
    },
    [croppedAreaPixels]
  );

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const openCropModal = () => {
    setIsCropModalOpen(true);
  };

  const closeCropModal = () => {
    setIsCropModalOpen(false);
  };

  const handleCroppedImageUpload = () => {
    cropImage(photo.preview);
    closeCropModal();
  };

  return {
    croppedImage,
    croppedFile,
    cropImage,
    crop,
    setCrop,
    zoom,
    setZoom,
    onCropComplete,
    isCropModalOpen,
    openCropModal,
    closeCropModal,
    cropComplete,
    handleCroppedImageUpload,
  };
};
