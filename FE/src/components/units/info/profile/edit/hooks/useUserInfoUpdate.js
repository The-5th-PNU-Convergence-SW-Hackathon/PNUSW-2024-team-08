import { updateUserInfo } from "../ProfileEdit.queries";

export const useUserInfoUpdate = (isPossibleNickName, userInfo) => {
  const handleUpdateUserInfo = async () => {
    if (
      isPossibleNickName !== false &&
      userInfo.selectedProvince !== "시/도 선택" &&
      userInfo.selectedDistrict !== "구/군/시" &&
      userInfo.selectedSubDistrict !== "동/읍/면"
    ) {
      console.log("userInfo: ", userInfo);
      try {
        await updateUserInfo(userInfo);
      } catch (error) {
        console.error("Error updating user info:", error);
      } finally {
      }
    }
  };

  return {
    handleUpdateUserInfo,
  };
};
