import React, { useEffect, useState } from "react";
import ProfileUI from "./ProfileEdit.presenter";
import { districtName } from "../../../../../../src/components/commons/district/districtName";
import { useRegionSelection } from "../../../../../../src/components/commons/hooks/useRegionSelection";
import { useNickNameCheck } from "./hooks/useNickNameCheck";
import { useUserInfoUpdate } from "./hooks/useUserInfoUpdate";
import {
  findProvinceKo,
  findProvinceEn,
  findDistrictKo,
  findDistrictEn,
} from "../../../../commons/district/districtName";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";

export default function ProfileEdit({ isSSRLoggedIn, profileData }) {
  console.log("ProfileEdit isSSRLoggedIn: ", isSSRLoggedIn);
  console.log("profileData: ", profileData);

  const regions = districtName;
  const [profile, setProfile] = useState(profileData);
  const [userInfo, setUserInfo] = useState({
    nickName: profile.nickName,
    province: findProvinceEn(profile.province),
    district: findDistrictEn(profile.district),
    subDistrict: profile.subDistrict,
    profileURL: "https://s3.xxxx.xx.com",
  });

  const {
    nickName,
    isPossibleNickName,
    nickNameMsg,
    handleNickNameChange,
    verifyNickName,
  } = useNickNameCheck(profileData.nickName);

  const {
    selectedProvince,
    isProvinceDropdownOpen,
    isProvinceFocused,
    selectedDistrict,
    isDistrictDropdownOpen,
    isDistrictFocused,
    selectedSubDistrict,
    isSubDistrictDropdownOpen,
    isSubDistrictFocused,
    wrapperRef,
    handleProvinceSelect,
    handleDistrictSelect,
    handleSubDistrictSelect,
    toggleDropdown,
  } = useRegionSelection(
    findProvinceKo(profile.province),
    findDistrictKo(profile.district),
    profile.subDistrict
  );

  useEffect(() => {
    setUserInfo({
      nickName: nickName || profile.nickName,
      province: findProvinceEn(selectedProvince),
      district: findDistrictEn(selectedDistrict),
      subDistrict: selectedSubDistrict,
      profileURL: "https://s3.xxxx.xx.com",
    });
  }, [nickName, selectedProvince, selectedDistrict, selectedSubDistrict]);

  const { handleUpdateUserInfo } = useUserInfoUpdate(
    isPossibleNickName,
    userInfo
  );

  const { navigateBack } = useNavigate();

  return (
    <ProfileUI
      profile={profile}
      navigateBack={navigateBack}
      userInfo={userInfo}
      nickName={nickName}
      isPossibleNickName={isPossibleNickName}
      nickNameMsg={nickNameMsg}
      handleNickNameChange={handleNickNameChange}
      verifyNickName={verifyNickName}
      regions={regions}
      wrapperRef={wrapperRef}
      selectedProvince={selectedProvince}
      isProvinceFocused={isProvinceFocused}
      isProvinceDropdownOpen={isProvinceDropdownOpen}
      toggleProvinceDropdown={() => toggleDropdown("province")}
      handleProvinceSelect={handleProvinceSelect}
      selectedDistrict={selectedDistrict}
      isDistrictFocused={isDistrictFocused}
      isDistrictDropdownOpen={isDistrictDropdownOpen}
      toggleDistrictDropdown={() => toggleDropdown("district")}
      handleDistrictSelect={handleDistrictSelect}
      selectedSubDistrict={selectedSubDistrict}
      isSubDistrictFocused={isSubDistrictFocused}
      isSubDistrictDropdownOpen={isSubDistrictDropdownOpen}
      toggleSubDistrictDropdown={() => toggleDropdown("subDistrict")}
      handleSubDistrictSelect={handleSubDistrictSelect}
      handleUpdateUserInfo={handleUpdateUserInfo}
    />
  );
}
