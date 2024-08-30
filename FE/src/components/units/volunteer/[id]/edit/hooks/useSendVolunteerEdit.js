import { useRouter } from "next/router";
import useS3Upload from "../../../../../commons/hooks/useS3Upload";
import { sendEditVolunteerUnfo } from "../Edit.queries";

export const useSendVolunteerEdit = () => {
  const { uploadFile } = useS3Upload("pnucoding", "volunteer");

  const uploadImageToS3 = async (photo) => {
    console.log("Uploading photo:", photo);
    const imageUrl = await uploadFile(photo.file);
    console.log("Uploaded image URL:", imageUrl);
    return imageUrl !== null ? imageUrl : null;
  };

  const handleSendVolunteerEdit = async (id, photo, editInfo) => {
    const isUserInfoValid = (
      editInfo.selectedProvince !== "시/도 선택" &&
      editInfo.selectedDistrict !== "구/군/시" &&
      editInfo.selectedSubdistrict !== "동/읍/면"
    );

    if (isUserInfoValid) {
      try {
        let data;
        if (photo) {
          const uploadedImageUrl = await uploadImageToS3(photo);

          // 업로드된 이미지 URL을 userInfo에 추가
          const updatedEditInfo = {
            ...editInfo,
            profileURL: uploadedImageUrl,
          };

          data = await sendEditVolunteerUnfo(id, updatedEditInfo);
        } else {
          data = await sendEditVolunteerUnfo(id, editInfo);
        }

        if (data.success) {
          return true; // 성공 시 true 반환
        }
      } catch (error) {
        console.error("봉사활동 수정 실패", error);
      }
    }
    return false; // 실패 시 false 반환
  };

  return {
    handleSendVolunteerEdit
  };
};

