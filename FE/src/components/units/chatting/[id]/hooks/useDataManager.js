import useImageCompressor from "../../../../../../src/components/commons/hooks/useImageCompressor";
import { useState, useRef, useEffect, useCallback } from "react";
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

export const useDataManager = (
  handleSendImages,
  handleSendFiles,
  photos,
  setPhotos,
  files, // 파일의 상태를 배열로 변경
  setFiles
) => {
  const [isPhotoLimitReached, setIsPhotoLimitReached] = useState(false); // 사진 개수 한계 도달 상태
  const [isDataModalOpen, setIsDataModalOpen] = useState(false); // 데이터 목록 모달 상태
  const [isUploadConfirmed, setIsUploadConfirmed] = useState(false); // 업로드 여부 확인 상태
  const { compressImage } = useImageCompressor();
  const maxPhotos = 9; // 최대 사진 개수 상수로 선언
  const maxFiles = 3; // 파일의 최대 개수를 1개로 제한

  // useEffect(() => {
  //   console.log("photos: ", photos);
  //   console.log("files: ", files);
  // }, [photos, files]);

  const addData = useCallback(
    async (fileToAdd) => {
      const nameWithoutExtension = getFileNameWithoutExtension(fileToAdd.name);
      const extension = getFileExtension(fileToAdd.name);

      if (fileToAdd.type.startsWith("image/")) {
        // 사진 파일인 경우
        if (photos.length < maxPhotos) {
          const compressedFile = await compressImage(fileToAdd);
          const newPhotoId = uuidv4();
          const newPhoto = {
            id: newPhotoId,
            name: nameWithoutExtension, // 파일 이름
            extension: extension, // 파일 확장자
            file: compressedFile, // 로컬 주소
            size: compressedFile.size, // 파일 크기
            preview: URL.createObjectURL(compressedFile),
          };
          setPhotos((prevPhotos) => {
            const newPhotos = [...prevPhotos, newPhoto];
            setIsPhotoLimitReached(newPhotos.length === maxPhotos);
            return newPhotos;
          });
        }
      } else {
        // 사진 파일이 아닌 경우
        if (files.length < maxFiles) {
          const newFileId = uuidv4();
          const newFile = {
            id: newFileId,
            name: nameWithoutExtension, // 파일 이름
            extension: extension, // 파일 확장자
            file: fileToAdd, // 로컬 주소
            localURL: URL.createObjectURL(fileToAdd), // 로컬 주소
            size: fileToAdd.size, // 파일 크기
          };
          // setFiles([newFile]);
          setFiles((prevFiles) => {
            const newFiles = [...prevFiles, newFile];
            setIsPhotoLimitReached(newFiles.length === maxFiles);
            return newFiles;
          });
        } else {
          console.log(
            "이미 파일이 존재합니다. 다른 파일을 추가할 수 없습니다."
          );
        }
      }
      // 데이터가 추가될 때마다 데이터 모달을 열도록 설정
      setIsDataModalOpen(true);
      setIsUploadConfirmed(false); // 새 데이터 추가 시 업로드 여부를 false로 설정
    },
    [photos, setPhotos, files, setFiles]
  );

  const deleteData = useCallback(
    (idToDelete) => {
      setPhotos((prevPhotos) =>
        prevPhotos.filter((photo) => photo.id !== idToDelete)
      );
      setFiles([]); // 파일을 비우도록 설정
      // 삭제 후 사진 수를 체크하여 사진 한계 도달 상태 업데이트
      setIsPhotoLimitReached((prevPhotos) => prevPhotos.length === maxPhotos);
    },
    [setPhotos, setFiles]
  );

  const handleDataUpload = useCallback(
    (event) => {
      const filesToAdd = event.target.files;
      if (filesToAdd.length > 0) {
        let remainingSlots = maxPhotos - photos.length; // 남은 슬롯 수 계산
        Array.from(filesToAdd).forEach((fileToAdd) => {
          if (fileToAdd.type.startsWith("image/") && remainingSlots > 0) {
            // 남은 슬롯 수 체크
            addData(fileToAdd);
            remainingSlots--; // 남은 슬롯 수 감소
          } else if (
            !fileToAdd.type.startsWith("image/") &&
            files.length < maxFiles
          ) {
            addData(fileToAdd);
          }
        });
      }
    },
    [photos, files, addData]
  );

  const dataInputRef = useRef(null);
  const handleDataAddClick = useCallback(() => {
    if (dataInputRef.current) {
      dataInputRef.current.click();
    }
  }, []);

  const closeDataModal = useCallback(() => {
    setPhotos([]);
    setFiles([]);
    setIsDataModalOpen(false);
  }, [setPhotos, setFiles]);

  const confirmUpload = useCallback(async () => {
    setIsUploadConfirmed(true);
    closeDataModal();

    if (photos.length > 0) {
      await handleSendImages(photos);
    }

    if (files.length > 0) {
      // 파일을 순차적으로 업로드
      for (const file of files) {
        await handleSendFiles([file]);
      }
    }
  }, [handleSendImages, handleSendFiles, photos, files, closeDataModal]);

  const getFileIconPath = (extension) => {
    // 확장자를 소문자로 변환하여 처리
    const ext = extension.toLowerCase();

    // 확장자별 아이콘 매핑
    const iconMap = {
      ai: "ai_icon.svg",
      avi: "avi_icon.svg",
      css: "css_icon.svg",
      csv: "csv_icon.svg",
      doc: "doc_icon.svg",
      html: "html_icon.svg",
      jpg: "jpg_icon.svg",
      js: "js_icon.svg",
      json: "json_icon.svg",
      mp3: "mp3_icon.svg",
      mp4: "mp4_icon.svg",
      pdf: "pdf_icon.svg",
      png: "png_icon.svg",
      ppt: "ppt_icon.svg",
      psd: "psd_icon.svg",
      svg: "svg_icon.svg",
      txt: "txt_icon.svg",
      xls: "xls_icon.svg",
      xml: "xml_icon.svg",
      zip: "zip_icon.svg",
    };

    // 문서 파일 확장자 목록
    const documentExtensions = [
      "doc",
      "docx",
      "hwp",
      "hwpx",
      "odt",
      "rtf",
      "tex",
      "wpd",
    ];

    // 문서 파일일 경우 doc_icon.svg로 처리
    if (documentExtensions.includes(ext)) {
      return `/images/chatting/file/doc_icon.svg`;
    }

    // 매핑된 아이콘이 있는 경우 해당 아이콘을 반환, 없으면 default_icon.svg 반환
    return `/images/chatting/file/${iconMap[ext] || "default_icon.svg"}`;
  };

  const downloadFile = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName); // 다운로드할 때 파일명을 지정합니다.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getMainDomain = (url) => {
    const urlObj = new URL(url);
    return urlObj.origin;
  };

  return {
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
    getFileIconPath,
    downloadFile,
    getMainDomain,
  };
};
