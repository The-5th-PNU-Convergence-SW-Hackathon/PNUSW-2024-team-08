import { sendSnsUserInfo } from "../SnsSignup02.queries";
import { useRouter } from "next/router";
import useS3Upload from "../../../../../commons/hooks/useS3Upload";

export const useUserInfoUpSend = (croppedFile) => {
  const router = useRouter();
  const { uploadFile } = useS3Upload("pnucoding", "profile");

  const uploadImageToS3 = async (photo) => {
    console.log("Uploading photo:", photo);
    const imageUrl = await uploadFile(photo);
    console.log("Uploaded image URL:", imageUrl);
    return imageUrl !== null ? imageUrl : null;
  };

  const handleSendUserInfo = async (userInfo, path) => {
    const isUserInfoValid =
      userInfo.isPossibleNickName &&
      userInfo.selectedProvince !== "시/도 선택" &&
      userInfo.selectedDistrict !== "구/군/시" &&
      userInfo.selectedSubdistrict !== "동/읍/면";

    if (isUserInfoValid) {
      try {
        if (croppedFile) {
          const uploadedImageUrl = await uploadImageToS3(croppedFile);

          // 업로드된 이미지 URL을 userInfo에 추가
          const updatedUserInfo = {
            ...userInfo,
            profileURL: uploadedImageUrl,
          };
          console.log("updated userInfo: " + updatedUserInfo);
          const data = await sendSnsUserInfo(updatedUserInfo);
          if (data.success) {
            sessionStorage.removeItem("email");
            sessionStorage.removeItem("name");

            router.push(path);
          }
        }
      } catch (error) {
        console.log("컨테이너 유저정보 보내기 실패", error);
        // console.error("Error updating user info:", error);
      }
    }
  };

  return {
    handleSendUserInfo,
  };
};
