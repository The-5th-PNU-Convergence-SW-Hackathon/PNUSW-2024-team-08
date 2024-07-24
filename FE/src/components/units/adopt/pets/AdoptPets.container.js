import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotPetsUI from "./AdoptPets.presenter";
import useFetchPetsData from "./hooks/useFetchPetsData";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import { useSortSelection } from "../../../../../src/components/commons/hooks/useSortSelection";
import React from "react";
import {
  findProvinceKo,
  findDistrictKo,
} from "../../../commons/district/districtName";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";

export default function AdpotPets({ isSSRLoggedIn }) {
  console.log("AdoptPets isSSRLoggedIn: ", isSSRLoggedIn);

  const { pets, handleToggleLike, handleLoadPetsData, sort, setSort } =
    useFetchPetsData(isSSRLoggedIn);
  const { handleDateClick, handleDogClick, handleCatClick, handleOtherClick } =
    useSortSelection(setSort);
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <AdoptHandler handleRequireModal={handleRequireModal} />
      <AdpotPetsUI
        sort={sort}
        handleLoadPetsData={handleLoadPetsData}
        handleDateClick={handleDateClick}
        handleDogClick={handleDogClick}
        handleCatClick={handleCatClick}
        handleOtherClick={handleOtherClick}
        pets={pets}
        handleToggleLike={handleToggleLike}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        navigateTo={navigateTo}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
