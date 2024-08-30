import { useState } from "react";
import useS3Upload from "../../../../../../../src/components/commons/hooks/useS3Upload";
import { updateUserInfo } from "../ProfileEdit.queries";

export const useUserInfoUpdate = (
  isPossibleNickName,
  croppedFile,
  userInfo
) => {
  const { uploadFile } = useS3Upload("pnucoding", "profile");
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const resultModalText = {
    text: "프로필 정보가 수정되었습니다.",
    subText: "",
    confirmText: "확인",
  };

  const uploadImageToS3 = async (photo) => {
    console.log("Uploading photo:", photo);
    const imageUrl = await uploadFile(photo);
    console.log("Uploaded image URL:", imageUrl);
    return imageUrl !== null ? imageUrl : null;
  };

  const handleUpdateUserInfo = async () => {
    if (
      isPossibleNickName !== false &&
      userInfo.selectedProvince !== "시/도 선택" &&
      userInfo.selectedDistrict !== "구/군/시" &&
      userInfo.selectedSubDistrict !== "동/읍/면"
    ) {
      console.log("userInfo: ", userInfo);
      try {
        if (croppedFile) {
          const uploadedImageUrl = await uploadImageToS3(croppedFile);

          // 업로드된 이미지 URL을 userInfo에 추가
          const updatedUserInfo = {
            ...userInfo,
            profileURL: uploadedImageUrl,
          };

          // 사용자 정보 업데이트
          await updateUserInfo(updatedUserInfo);
          setIsProfileUpdated(true);
        } else {
          await updateUserInfo(userInfo);
          setIsProfileUpdated(false);
        }
      } catch (error) {
        console.error("Error updating user info:", error);
      } finally {
      }
    }
  };

  const handleConfirmBtn = () => {
    window.location.reload();
  };

  return {
    handleUpdateUserInfo,
    resultModalText,
    isProfileUpdated,
    handleConfirmBtn,
  };
};
