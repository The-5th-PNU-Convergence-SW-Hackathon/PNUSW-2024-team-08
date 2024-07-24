import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useUploadImage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  //const [file, setFile] = useState(null);
  const dataInputRef = useRef(null);
  
  const handleDataAddClick = () => {
    if (dataInputRef.current) {
      dataInputRef.current.click();
    }
  };

  const handleDataUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      Array.from(files).forEach((file) => addData(file));
    }
  };

  // const addData = (file) => {
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const newImage = {
  //       id: uuidv4(),
  //       src: e.target.result,
  //     };
  //     setUploadedImages((prevImages) => [...prevImages, newImage]);
  //   };
  //   reader.readAsDataURL(file);
  //   setFile(file);
  // };

  const addData = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImage = {
        id: uuidv4(),
        src: e.target.result,
      };
      setUploadedImage(newImage); // 최근에 업로드된 이미지로 설정
    };
    reader.readAsDataURL(file);
  };

  return {
    uploadedImage,
    dataInputRef,
    handleDataAddClick,
    handleDataUpload,
  }
}