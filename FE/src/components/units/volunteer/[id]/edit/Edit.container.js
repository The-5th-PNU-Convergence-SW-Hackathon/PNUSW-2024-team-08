import EditVolunteerUI from "./Edit.presenter";
import VolunteerDetailHeader from "../../volunteerDetailHeader/VolunteerDetailHeader.container";
import { useState, useEffect } from "react";
import { findProvinceKo, findProvinceEn, findDistrictKo, findDistrictEn } from "../../../../commons/district/districtName";
import { useRegionSelection } from "../../../../commons/hooks/useRegionSelection";
import { districtName } from "../../../../commons/district/districtName";
import { useProfilePhotoManager } from "../../../../commons/hooks/useProfilePhotoManager";
import { usePeopleNumSelect } from "../../create_volunteer/hooks/usePeopleNumSelect";
import { useCategorySelect } from "../../create_volunteer/hooks/useCategorySelect";
import { useNameDescription } from "../../create_volunteer/hooks/useNameDescription";
import { useSendVolunteerEdit } from "./hooks/useSendVolunteerEdit";
import { useRouter } from "next/router";
import SuccessModal from "./modal/successModal";
import { useAutoResizeTextArea } from "../../hooks/useAutoResizeTextArea";

export default function EditVolunteer({ isSSRLoggedIn, volunteerEditData, userRole }) {
  const regions = districtName;
  const router = useRouter();
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가
  const { id } = router.query;
  const [edit, setEdit] = useState(volunteerEditData);
  const [editInfo, setEditInfo] = useState({
    name: edit.name,
    description: edit.description,
    category: edit.category,
    maxNum: edit.maxNum,
    province: findProvinceKo(edit.province),
    district: findDistrictKo(edit.district),
    subDistrict: edit.subDistrict,
    profileURL: edit.profileURL,
  });

  const {
    name,
    description,
    handleVolunteerNameChange,
    handleVolunteerDescription,
  } = useNameDescription(volunteerEditData.name, volunteerEditData.description);

  const textAreaRef = useAutoResizeTextArea(description);

  const { photo, handlePhotoUpload, fileInputRef, handlePhotoAddClick } =
    useProfilePhotoManager();

  const {
    CategoryRef,
    isCategoryFocused,
    isCategoryDropdownOpen,
    selectedCategory,
    toggleCatergoryDropdown,
    handleCategorySelect,
  } = useCategorySelect(volunteerEditData.category);

  const {
    isPeopleNumDropdownOpen,
    isPeopleNumFocused,
    selectedPeopleNum,
    selectedValue,
    PeopleNumRef,
    togglePeopleNumDropdown,
    handlePeopleNumSelect,
  } = usePeopleNumSelect(volunteerEditData.maxNum);

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
    findProvinceKo(volunteerEditData.province),
    findDistrictKo(volunteerEditData.district),
    volunteerEditData.subDistrict
  );

  const {
    handleSendVolunteerEdit
  } = useSendVolunteerEdit();

  useEffect(() => {
    setEditInfo({
      name: name || edit.name,
      description: description || edit.description,
      category: selectedCategory || edit.category,
      maxNum: selectedValue || edit.maxNum,
      province: findProvinceEn(selectedProvince),
      district: findDistrictEn(selectedDistrict),
      subDistrict: selectedSubDistrict,
      profileURL: edit.profileURL
    });
  }, [name, description, selectedCategory, selectedValue, selectedProvince, selectedDistrict, selectedSubDistrict]);


  const handleEditCompletion = async () => {
    const success = await handleSendVolunteerEdit(id, photo, editInfo);
    if (success) {
      setShowModal(true); // 성공 시 모달 표시
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.push(`/volunteer/${id}`); // 모달 닫힐 때 페이지 이동
  };

  return (
    <>
      <VolunteerDetailHeader isSSRLoggedIn={isSSRLoggedIn} userRole={userRole} />
      <EditVolunteerUI
        id={id}
        edit={edit}
        editInfo={editInfo}
        name={name}
        description={description}
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
        handleEditCompletion={handleEditCompletion}
        photo={photo}
        handlePhotoUpload={handlePhotoUpload}
        fileInputRef={fileInputRef}
        handlePhotoAddClick={handlePhotoAddClick}
        textAreaRef={textAreaRef}
      />
      <SuccessModal showModal={showModal} onClose={handleCloseModal} />
    </>
  )
}