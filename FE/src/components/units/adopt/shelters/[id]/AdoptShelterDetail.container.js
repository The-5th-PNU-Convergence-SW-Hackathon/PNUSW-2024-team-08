import React, { useRef } from "react";
import { useRouter } from "next/router";
import Navigation from "../../../../../../src/components/commons/navigation/Navigation.container";
import AdoptShelterHandler from "../AdoptShelterHandler.container";
import AdpotShelterDetailUI from "./AdoptShelterDetail.presenter";
import { useGoogleMaps } from "./hooks/useGoogleMaps";
import useFetchShelterDetailData from "./hooks/useFetchShelterDetailData";
import useRequireLogin from "../../../../../../src/components/commons/hooks/useRequireLogin";

export default function AdpotShelterDetail({ isSSRLoggedIn }) {
  console.log("AdoptShelterDetail isSSRLoggedIn: ", isSSRLoggedIn);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const { shelter } = useFetchShelterDetailData(id);

  const mapRef = useRef(null);

  const { isMapLoaded } = useGoogleMaps(mapRef, shelter);
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <AdoptShelterHandler />
      <AdpotShelterDetailUI mapRef={mapRef} shelter={shelter} />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
