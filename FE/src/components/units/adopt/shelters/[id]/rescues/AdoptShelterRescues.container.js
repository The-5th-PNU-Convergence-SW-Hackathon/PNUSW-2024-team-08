import Navigation from "../../../../../commons/navigation/Navigation.container";
import AdoptShelterHandler from "../../AdoptShelterHandler.container";
import AdpotShelterRescuesUI from "./AdoptShelterRescues.presenter";
import { useSortSelection } from "../../../../../../../src/components/commons/hooks/useSortSelection";
import { useNavigate } from "../../../../../../../src/components/commons/hooks/useNavigate";
import { useRouter } from "next/router";
import {
  findProvinceKo,
  findDistrictKo,
} from "../../../../../commons/district/districtName";
import useFetchShelterRescuesData from "./hooks/useFetchShelterRescuesData";
import useRequireLogin from "../../../../../../../src/components/commons/hooks/useRequireLogin";

export default function AdpotShelterRescues({ isSSRLoggedIn }) {
  console.log("AdoptShelterRescues isSSRLoggedIn: ", isSSRLoggedIn);

  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { pets, handleToggleLike, handleLoadPetsData, sort, setSort } =
    useFetchShelterRescuesData(id, isSSRLoggedIn);
  const { handleDateClick, handleDogClick, handleCatClick, handleOtherClick } =
    useSortSelection(setSort);
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <AdoptShelterHandler />
      <AdpotShelterRescuesUI
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
