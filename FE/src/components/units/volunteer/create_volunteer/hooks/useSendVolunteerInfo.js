import { useState } from "react";
import { districtName } from "../../../../../components/commons/district/districtName";
import { useFetchUserInfo } from "./useFetchUserInfo";
import { useRegionSelection } from "../../../../../../src/components/commons/hooks/useRegionSelection";
import { sendNewVolunteerInfo } from "../Create_Volunteer.queries";
import { useRouter } from "next/router";

export const useSendVolunteerInfo = () => {
  const router = useRouter();
  const { userInfo } = useFetchUserInfo();
  const regions = districtName;
  const [name, setName] = useState("");

  const handleVolunteerNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  }

  const {
    selectedProvince,
    isProvinceDropdownOpen,
    isProvinceFocused,
    selectedDistrict,
    isDistrictDropdownOpen,
    isDistrictFocused,
    selectedSubdistrict,
    isSubdistrictDropdownOpen,
    isSubdistrictFocused,
    wrapperRef,
    handleProvinceSelect,
    handleDistrictSelect,
    handleSubdistrictSelect,
    toggleDropdown,
  } = useRegionSelection(
    userInfo.province,
    userInfo.district,
    userInfo.subdistrict
  );

  const navigateTo = (path) => {
    router.push(path);
  }

  const handleSendVolunteerInfo= async (userInfo, path) => {
    if (
      userInfo.isPossibleNickName === true &&
      userInfo.selectedProvince !== "시/도 선택" &&
      userInfo.selectedDistrict !== "구/군/시" &&
      userInfo.selectedSubdistrict !== "동/읍/면"
    ) {
      try {
        await sendNewVolunteerInfo({
          name: name,
          province: selectedProvince,
          district: selectedDistrict,
          subdistrict: selectedSubdistrict,
          description: "ㅇㅇ",
          category: "봉사",
          profileURL: "https://s3.xxxx.xx.com"
        });
        if (data.success) {
          navigateTo(path);
        }
      } catch (error) {
        console.log("새로운 봉사활동 모임을 만들 수 없습니다.")
        // console.error("Error updating user info:", error);
      } finally {
      }
    }
  };

  return {
    name,
    handleVolunteerNameChange,
    regions,
    selectedProvince,
    isProvinceDropdownOpen,
    isProvinceFocused,
    selectedDistrict,
    isDistrictDropdownOpen,
    isDistrictFocused,
    selectedSubdistrict,
    isSubdistrictDropdownOpen,
    isSubdistrictFocused,
    wrapperRef,
    handleProvinceSelect,
    handleDistrictSelect,
    handleSubdistrictSelect,
    toggleDropdown,
    handleSendVolunteerInfo,
    navigateTo
  }
}