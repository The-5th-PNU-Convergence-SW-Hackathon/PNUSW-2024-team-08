import { useEffect, useState } from "react";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRegionUI from "./VolunteerRegion.presenter";
import { districtName } from "../../../commons/district/districtName";
import { useRegionSelection } from "../../../../../src/components/commons/hooks/useRegionSelection";
import { useNavigate } from "../../../commons/hooks/useNavigate";
import { findProvinceKo, findDistrictKo } from "../../../commons/district/districtName";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import useModalStore from "../../../../store/useModalStore";
import AlarmModal from "../../../../../src/components/commons/alarmModal/AlarmModal.presenter";
import { useFetchVolunteer } from "./hooks/useFetchNewAndRegionVolunteer";
import usePaginationScroll from "../../../../../src/components/commons/hooks/usePaginationScroll";

export default function VolunteerRegion({ isSSRLoggedIn, profileURL, profileData }) {
  const { navigateTo } = useNavigate();
  const { openModal } = useModalStore();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  const [selectedRegion, setSelectedRegion] = useState({
    province: profileData ? findProvinceKo(profileData.province) : "서울특별시",
    district: profileData ? findDistrictKo(profileData.district) :  "강남구",
  });

  const {
    uidistrict,
    volunteerInfos,
    isLoading,
    showModal,
    modalMessage,
    hasMore,
    fetchVolunteerData,
    handleToggleLike,
    loadUpdatedVolunteerRegionData,
  } = useFetchVolunteer(selectedRegion, isSSRLoggedIn, openModal);

  const { scrollRef, scrollLoading } = usePaginationScroll(loadUpdatedVolunteerRegionData, !hasMore);

  const {
    selectedProvince,
    selectedDistrict,
    isProvinceDropdownOpen,
    isProvinceFocused,
    isDistrictDropdownOpen,
    isDistrictFocused,
    wrapperRef,
    handleProvinceSelect,
    handleDistrictSelect,
    toggleDropdown,
  } = useRegionSelection(selectedRegion.province, selectedRegion.district, "동/읍/면");

  useEffect(() => {
    fetchVolunteerData(selectedProvince, selectedDistrict);
    setSelectedRegion({ province: selectedProvince, district: selectedDistrict });
  }, [selectedProvince, selectedDistrict, fetchVolunteerData]);

  return (
    <>
      <AlarmModal show={showModal} message={modalMessage} />
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <VolunteerHandler handleRequireModal={handleRequireModal} />
      <VolunteerRegionUI
        uidistrict={uidistrict}
        volunteerInfos={volunteerInfos}
        hasMore={hasMore}
        navigateTo={navigateTo}
        loadUpdatedVolunteerRegionData={loadUpdatedVolunteerRegionData}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        handleToggleClick={handleToggleLike}
        regions={districtName}
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
        isLoading={isLoading}
        handleRequireModal={handleRequireModal}
        showModal={showModal}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}