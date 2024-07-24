import React from "react";
import SignUpUI04 from "./Signup04.presenter"
import { useNickNameCheck } from "./hooks/useNicknameCheck";
import { districtName } from "../../../commons/district/districtName";
import { useRegionSelection } from "../../../commons/hooks/useRegionSelection";
import { useUserInfoUpSend } from "./hooks/useUserInfoSend";
import { useRouter } from "next/router";
import { useUploadImage } from "./hooks/useUploadImage";
import { findProvinceEn, findDistrictEn } from "../../../commons/district/districtName";

export default function SignUp04() {
  const regions = districtName;
  const router = useRouter();

  const email = router.query.email;
  const name = router.query.name;
  const password = router.query.password;
  const passwordConfirm = router.query.passwordConfirm;

  //이미지업로드를 위한 기능
  const {
    uploadedImage,
    dataInputRef,
    handleDataAddClick,
    handleDataUpload,
  } = useUploadImage();

  //닉네임을 정해주기 위한 기능
  const {
    nickName,
    isPossibleNickName,
    handleNicknameValueChange,
    verifyNickname
  } = useNickNameCheck();

  //초기 위치 설정들을 위한 기능
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
    "시/도 선택",
    "구/군/시",
    "동/읍/면"
  );

  const sendUserInfo = {
    isPossibleNickName: isPossibleNickName,
    email: email,
    name: name,
    nickName: nickName,
    selectedProvince: findProvinceEn(selectedProvince),
    selectedDistrict: findDistrictEn(selectedDistrict),
    selectedSubdistrict: selectedSubdistrict,
    password: password,
    passwordConfirm: passwordConfirm,
    profileURL: "https://s3.xxxx.xx.com"
  }

  const {
    handleSendUserInfo,
  } = useUserInfoUpSend(); //다음버튼값에 들어가는 값

  return (
    <>
      <SignUpUI04
        uploadedImage={uploadedImage}
        dataInputRef={dataInputRef}
        handleDataAddClick={handleDataAddClick}
        handleDataUpload={handleDataUpload}
        nickName={nickName}
        isPossibleNickName={isPossibleNickName}
        handleNicknameValueChange={handleNicknameValueChange}
        verifyNickname={verifyNickname}
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
        selectedSubdistrict={selectedSubdistrict}
        isSubdistrictFocused={isSubdistrictFocused}
        isSubdistrictDropdownOpen={isSubdistrictDropdownOpen}
        toggleSubdistrictDropdown={() => toggleDropdown("subdistrict")}
        handleSubdistrictSelect={handleSubdistrictSelect}
        sendUserInfo={sendUserInfo} //handleSendUserInfo의 파라미터에 넣을 변수
        handleSendUserInfo={handleSendUserInfo}  //완료 버튼에 들어갈 기능
      />
    </>
  )
}