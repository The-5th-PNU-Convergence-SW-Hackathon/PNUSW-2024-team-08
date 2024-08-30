import { sendNewVolunteerInfo } from "../Create_Volunteer.queries";
import useS3Upload from "../../../../commons/hooks/useS3Upload";
import { useRouter } from "next/router";

export const useSendVolunteerInfo = (photo) => {
  const router = useRouter();
  const { uploadFile } = useS3Upload("pnucoding", "volunteer");

  const uploadImageToS3 = async (photo) => {
    console.log("Uploading photo:", photo);
    const imageUrl = await uploadFile(photo.file);
    console.log("Uploaded image URL:", imageUrl);
    return imageUrl !== null ? imageUrl : null;
  };

  const handleSendVolunteerInfo = async (userInfo, path) => {
    const isUserInfoValid = (
      userInfo.selectedProvince !== "시/도 선택" &&
      userInfo.selectedDistrict !== "구/군/시" &&
      userInfo.selectedSubdistrict !== "동/읍/면"
    );

    if (isUserInfoValid) {
      try {
        if (photo) {
          const uploadedImageUrl = await uploadImageToS3(photo);

          // 업로드된 이미지 URL을 userInfo에 추가
          const updatedUserInfo = {
            ...userInfo,
            profileURL: uploadedImageUrl,
          };

          const data = await sendNewVolunteerInfo({
            name: updatedUserInfo.name,
            province: updatedUserInfo.selectedProvince,
            district: updatedUserInfo.selectedDistrict,
            subDistrict: updatedUserInfo.selectedSubDistrict,
            description: updatedUserInfo.description,
            category: updatedUserInfo.selectedCategory,
            profileURL: updatedUserInfo.profileURL,
            maxNum: updatedUserInfo.selectedPeopleNum,
          });
          if (data.success) {
            router.push(`/volunteer/${data.result.id}`);
          }
        }
      } catch (error) {
        console.error("새로운 봉사활동 모임을 만들 수 없습니다.", error);
      } 
    }
  };

  return {
    handleSendVolunteerInfo,
  }
}