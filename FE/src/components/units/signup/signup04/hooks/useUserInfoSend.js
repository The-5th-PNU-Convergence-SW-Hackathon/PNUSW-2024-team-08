import { sendUserInfo } from "../Signup04.queries";
import { useRouter } from "next/router";

export const useUserInfoUpSend = () => {
  const router = useRouter();

  const handleSendUserInfo = async (userInfo, path) => {
    const isUserInfoValid = (
      userInfo.isPossibleNickName &&
      userInfo.selectedProvince !== "시/도 선택" &&
      userInfo.selectedDistrict !== "구/군/시" &&
      userInfo.selectedSubdistrict !== "동/읍/면"
    );

    if (isUserInfoValid) {
      try {
        const data = await sendUserInfo({
          email: userInfo.email,
          name: userInfo.name,
          nickName: userInfo.nickName,
          province: userInfo.selectedProvince,
          district: userInfo.selectedDistrict,
          subDistrict: userInfo.selectedSubdistrict,
          password: userInfo.password,
          passwordConfirm: userInfo.passwordConfirm,
          profileURL: "https://s3.xxxx.xx.com",
        });
        if (data.success) {
          router.push(path);
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
