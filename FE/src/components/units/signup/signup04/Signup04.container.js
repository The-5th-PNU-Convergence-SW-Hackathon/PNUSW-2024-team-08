import React from "react";
import { districtName } from "../../../commons/district/districtName";
import { useRegionSelection } from "../../../commons/hooks/useRegionSelection";
import { useUserInfoUpSend } from "./hooks/useUserInfoSend";
import {
  findProvinceEn,
  findDistrictEn,
} from "../../../commons/district/districtName";
import { useProfilePhotoManager } from "../../../commons/hooks/useProfilePhotoManager";
import { useImageCropper } from "../../../commons/hooks/useImageCropper";

import { useNickNameCheck } from "./hooks/useNickNameCheck";
import { useGetUserInfo } from "./hooks/useGetUserInfo";
import Signup04UI from "./Signup04.presenter";

export default function Signup04() {
  const regions = districtName;

  const { email, name, password, passwordConfirm } = useGetUserInfo();

  //이미지업로드를 위한 기능
  const {
    photo,
    addPhoto,
    deletePhoto,
    handlePhotoUpload,
    fileInputRef,
    handlePhotoAddClick,
  } = useProfilePhotoManager();

  const {
    croppedImage,
    croppedFile,
    cropImage,
    crop,
    setCrop,
    zoom,
    setZoom,
    onCropComplete,
    isCropModalOpen,
    openCropModal,
    closeCropModal,
    cropComplete,
    handleCroppedImageUpload,
  } = useImageCropper(photo);

  const {
    nickName,
    isPossibleNickName,
    nickNameMsg,
    handleNickNameChange,
    verifyNickName,
  } = useNickNameCheck();

  //초기 위치 설정들을 위한 기능
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
  } = useRegionSelection("시/도 선택", "구/군/시", "동/읍/면");

  const userInfo = {
    isPossibleNickName: isPossibleNickName,
    email: email,
    name: name,
    nickName: nickName,
    selectedProvince: findProvinceEn(selectedProvince),
    selectedDistrict: findDistrictEn(selectedDistrict),
    selectedSubDistrict: selectedSubDistrict,
    password: password,
    passwordConfirm: passwordConfirm,
    profileURL: "https://s3.xxxx.xx.com",
  };

  const { handleSendUserInfo } = useUserInfoUpSend(croppedFile, userInfo); //다음버튼값에 들어가는 값

  return (
    <>
      <Signup04UI
        photo={photo}
        deletePhoto={deletePhoto}
        addPhoto={addPhoto}
        handlePhotoUpload={handlePhotoUpload}
        fileInputRef={fileInputRef}
        handlePhotoAddClick={handlePhotoAddClick}
        croppedImage={croppedImage}
        croppedFile={croppedFile}
        cropImage={cropImage}
        crop={crop}
        setCrop={setCrop}
        zoom={zoom}
        setZoom={setZoom}
        onCropComplete={onCropComplete}
        isCropModalOpen={isCropModalOpen}
        openCropModal={openCropModal}
        closeCropModal={closeCropModal}
        cropComplete={cropComplete}
        handleCroppedImageUpload={handleCroppedImageUpload}
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
        userInfo={userInfo} //handleSendUserInfo의 파라미터에 넣을 변수
        handleSendUserInfo={handleSendUserInfo} //완료 버튼에 들어갈 기능
      />
    </>
  );
}
