import { useState } from "react";
import { uploadFileToS3 } from "../utils/aws-utils"; // utils/aws-utils.js 파일 경로

const useS3Upload = (bucketName, folderPath) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    setIsUploading(true);
    setError(null);
    console.log("uploadFile file: ", file);

    try {
      const url = await uploadFileToS3(file, bucketName, folderPath);
      console.log("Uploaded file URL:", url);
      return url;
    } catch (err) {
      setError(err.message);
      console.error("Error in uploadFile:", err);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return { isUploading, error, uploadFile };
};

export default useS3Upload;
