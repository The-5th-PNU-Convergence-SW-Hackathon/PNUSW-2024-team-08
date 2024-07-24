import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // uuid 패키지에서 v4를 import

const getFileExtension = (filename) => {
  const parts = filename.split(".");
  return parts.length > 1 ? parts.pop() : "";
};

const getFileNameWithoutExtension = (filename) => {
  const parts = filename.split(".");
  if (parts.length > 1) {
    parts.pop();
  }
  return parts.join(".");
};

export const useDataManager = (handleSendImages) => {
  const [photos, setPhotos] = useState([]);
  const [files, setFiles] = useState([]);
  const [isPhotoLimitReached, setIsPhotoLimitReached] = useState(false); // 사진 개수 한계 도달 상태
  const [isDataModalOpen, setIsDataModalOpen] = useState(false); // 데이터 목록 모달 상태
  const [isUploadConfirmed, setIsUploadConfirmed] = useState(false); // 업로드 여부 확인 상태

  const maxPhotos = 9; // 최대 사진 개수 상수로 선언

  useEffect(() => {
    console.log("photos: " + photos);
    console.log("files: " + files);
  }, [photos, files]);

  const addData = (file) => {
    const nameWithoutExtension = getFileNameWithoutExtension(file.name);
    const extension = getFileExtension(file.name);

    if (file.type.startsWith("image/")) {
      // 사진 파일인 경우
      if (photos.length < maxPhotos) {
        const newPhotoId = uuidv4();
        const newPhoto = {
          id: newPhotoId,
          name: nameWithoutExtension, // 파일 이름
          extension: extension, // 파일 확장자
          file: URL.createObjectURL(file), // 로컬 주소
          size: file.size, // 파일 크기
        };
        setPhotos((prevPhotos) => {
          const newPhotos = [...prevPhotos, newPhoto];
          setIsPhotoLimitReached(newPhotos.length === maxPhotos);
          return newPhotos;
        });
      }
    } else {
      // 사진 파일이 아닌 경우
      const newFileId = uuidv4();
      const newFile = {
        id: newFileId,
        name: nameWithoutExtension, // 파일 이름
        extension: extension, // 파일 확장자
        file: URL.createObjectURL(file), // 로컬 주소
        size: file.size, // 파일 크기
      };
      setFiles((prevFiles) => [...prevFiles, newFile]);
    }
    // 데이터가 추가될 때마다 데이터 모달을 열도록 설정
    setIsDataModalOpen(true);
    setIsUploadConfirmed(false); // 새 데이터 추가 시 업로드 여부를 false로 설정
  };

  const deleteData = (idToDelete) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((photo) => photo.id !== idToDelete)
    );
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== idToDelete));
    // 삭제 후 사진 수를 체크하여 사진 한계 도달 상태 업데이트
    setIsPhotoLimitReached((prevPhotos) => prevPhotos.length === maxPhotos);
  };

  const handleDataUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      let remainingSlots = maxPhotos - photos.length; // 남은 슬롯 수 계산
      Array.from(files).forEach((file) => {
        if (file.type.startsWith("image/") && remainingSlots > 0) {
          // 남은 슬롯 수 체크
          addData(file);
          remainingSlots--; // 남은 슬롯 수 감소
        } else if (!file.type.startsWith("image/")) {
          addData(file);
        }
      });
    }
  };

  const dataInputRef = useRef(null);
  const handleDataAddClick = () => {
    if (dataInputRef.current) {
      dataInputRef.current.click();
    }
  };

  const closeDataModal = () => {
    setPhotos([]);
    setFiles([]);
    setIsDataModalOpen(false);
  };

  const confirmUpload = () => {
    setIsUploadConfirmed(true);
    const imageUrls = photos.map((photo) => photo.file);
    handleSendImages(imageUrls);
    closeDataModal();
  };

  return {
    photos,
    files,
    isPhotoLimitReached,
    isDataModalOpen,
    isUploadConfirmed,
    addData,
    deleteData,
    handleDataUpload,
    dataInputRef,
    handleDataAddClick,
    closeDataModal,
    confirmUpload,
  };
};
