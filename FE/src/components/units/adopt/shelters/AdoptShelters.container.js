import React, { useRef } from "react";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotSheltersUI from "./AdoptShelters.presenter";
import { useDragHandler } from "./hooks/useDragHandler";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import useFetchSheltersData from "./hooks/useFetchSheltersData";
import { useGoogleMaps } from "./hooks/useGoogleMaps";
import useSearchShelters from "./hooks/useSearchShelters";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";

export default function AdpotShelters({ isSSRLoggedIn, profileURL }) {
  // console.log("AdoptShelters isSSRLoggedIn: ", isSSRLoggedIn);

  const { shelters } = useFetchSheltersData();
  const mapRef = useRef(null);
  const { searchResults, searchSuccess, searchShelters, handleSearch } =
    useSearchShelters(shelters);
  const {
    isMapLoaded,
    initialLocation,
    setCurrentLocation,
    shelterLocationDetail,
    selectedShelterId,
    sheltersToDisplay,
  } = useGoogleMaps(mapRef, shelters, searchResults, searchSuccess);
  useDragHandler(isMapLoaded); // 드래그 이벤트를 처리하는 훅, 이제 상태를 직접 업데이트하지 않음
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <AdoptHandler handleRequireModal={handleRequireModal} />
      <AdpotSheltersUI
        mapRef={mapRef}
        isMapLoaded={isMapLoaded}
        initialLocation={initialLocation}
        setCurrentLocation={setCurrentLocation}
        shelterLocationDetail={shelterLocationDetail}
        selectedShelterId={selectedShelterId}
        searchShelters={searchShelters}
        handleSearch={handleSearch}
        sheltersToDisplay={sheltersToDisplay}
        truncateString={truncateString}
        navigateTo={navigateTo}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
