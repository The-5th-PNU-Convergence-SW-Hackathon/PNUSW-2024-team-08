import Header from "../../../commons/headers/Headers.container";
import CreateVolunteerUI from "./Create_volunteer.presenter";
import { useSendVolunteerInfo } from "./hooks/useSendVolunteerInfo";

export default function CreateVolunteer() {

  const {
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
  } = useSendVolunteerInfo();

  return (
    <>
      <Header />
      <CreateVolunteerUI
        name={name}
        handleVolunteerNameChange={handleVolunteerNameChange}
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
        handleSendVolunteerInfo={handleSendVolunteerInfo} //모임만들기 버튼
        navigateTo={navigateTo}
      />
    </>
  )
}