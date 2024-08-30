import { useState, useEffect } from "react";
import Headers from "../../../commons/headers/Headers.container";
import CreateVolunteerUI from "./Create_volunteer.presenter";
import { useNavigate } from "../../../commons/hooks/useNavigate";
import { useCategorySelect } from "./hooks/useCategorySelect";
import { usePeopleNumSelect } from "./hooks/usePeopleNumSelect";
import { useSendVolunteerInfo } from "./hooks/useSendVolunteerInfo";
import { useProfilePhotoManager } from "../../../commons/hooks/useProfilePhotoManager";
import { useNameDescription } from "./hooks/useNameDescription";
import { districtName } from "../../../commons/district/districtName";
import { useRegionSelection } from "../../../commons/hooks/useRegionSelection";
import {
  findProvinceEn,
  findDistrictEn,
  findProvinceKo,
  findDistrictKo,
} from "../../../commons/district/districtName";
import { useAutoResizeTextArea } from "../hooks/useAutoResizeTextArea";

export default function CreateVolunteer({ isSSRLoggedIn, profileData, profileURL }) {
  const [profile, setProfile] = useState(profileData);
  const [userInfo, setUserInfo] = useState({
    name: "",
    description: "",
    category: null,
    maxNum: null,
    province: findProvinceEn(profile.province),
    district: findDistrictEn(profile.district),
    subDistrict: profile.subDistrict,
    profileURL: ""
  });
  const regions = districtName;

  const {
    name,
    description,
    handleVolunteerNameChange,
    handleVolunteerDescription,
  } = useNameDescription(userInfo.name, userInfo.description);

  const textAreaRef = useAutoResizeTextArea(description);

  //이미지업로드를 위한 기능
  const { photo, handlePhotoUpload, fileInputRef, handlePhotoAddClick } =
    useProfilePhotoManager();

  const {
    isPeopleNumDropdownOpen,
    isPeopleNumFocused,
    selectedPeopleNum,
    selectedValue,
    PeopleNumRef,
    togglePeopleNumDropdown,
    handlePeopleNumSelect,
  } = usePeopleNumSelect(userInfo.maxNum);

  const {
    CategoryRef,
    isCategoryFocused,
    isCategoryDropdownOpen,
    selectedCategory,
    toggleCatergoryDropdown,
    handleCategorySelect,
  } = useCategorySelect(userInfo.category);

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

  const {
    handleSendVolunteerInfo,
  } = useSendVolunteerInfo(photo);

  const { navigateTo } = useNavigate();

  const sendUserInfo = {
    name: name,
    selectedProvince: findProvinceEn(selectedProvince),
    selectedDistrict: findDistrictEn(selectedDistrict),
    selectedSubDistrict: selectedSubDistrict,
    description: description,
    selectedCategory: selectedCategory,
    selectedPeopleNum: selectedValue,
    profileURL: photo,
  };

  useEffect(() => {
    setUserInfo({
      province: findProvinceEn(selectedProvince),
      district: findDistrictEn(selectedDistrict),
      subDistrict: selectedSubDistrict,
    });
  }, [selectedProvince, selectedDistrict, selectedSubDistrict]);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <CreateVolunteerUI
        sendUserInfo={sendUserInfo}
        name={name}
        handleVolunteerNameChange={handleVolunteerNameChange}
        handleVolunteerDescription={handleVolunteerDescription}
        CategoryRef={CategoryRef}
        isCategoryFocused={isCategoryFocused}
        isCategoryDropdownOpen={isCategoryDropdownOpen}
        selectedCategory={selectedCategory}
        toggleCatergoryDropdown={toggleCatergoryDropdown}
        handleCategorySelect={handleCategorySelect}
        isPeopleNumDropdownOpen={isPeopleNumDropdownOpen}
        isPeopleNumFocused={isPeopleNumFocused}
        selectedPeopleNum={selectedPeopleNum}
        PeopleNumRef={PeopleNumRef}
        togglePeopleNumDropdown={togglePeopleNumDropdown}
        handlePeopleNumSelect={handlePeopleNumSelect}
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
        handleSendVolunteerInfo={handleSendVolunteerInfo} //모임만들기 버튼
        navigateTo={navigateTo}
        photo={photo}
        handlePhotoUpload={handlePhotoUpload}
        fileInputRef={fileInputRef}
        handlePhotoAddClick={handlePhotoAddClick}
        textAreaRef={textAreaRef}
        description={description}
      />
    </>
  );
}
