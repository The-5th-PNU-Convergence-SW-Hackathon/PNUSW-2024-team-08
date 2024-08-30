import { useCallback } from "react";
import imageCompression from "browser-image-compression";

const useImageCompressor = () => {
  const compressImage = useCallback(async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error("Error during image compression:", error);
      return file; // 압축 실패 시 원본 파일 반환
    }
  }, []);

  return { compressImage };
};

export default useImageCompressor;
