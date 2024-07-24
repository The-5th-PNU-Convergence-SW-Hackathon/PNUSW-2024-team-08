import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotFavoritesUI from "./AdoptFavorites.presenter";
import useFetchFavPetsData from "./hooks/useFetchFavPetsData";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import {
  findProvinceKo,
  findDistrictKo,
} from "../../../commons/district/districtName";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";

export default function AdpotFavorites({ isSSRLoggedIn }) {
  console.log("AdoptFavorites isSSRLoggedIn: ", isSSRLoggedIn);

  const {
    favPets,
    handleToggleLike,
    loadFavPetsData,
    handleLoadPetsData,
    isLastPage,
  } = useFetchFavPetsData(isSSRLoggedIn);
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <AdoptHandler handleRequireModal={handleRequireModal} />
      <AdpotFavoritesUI
        favPets={favPets}
        loadFavPetsData={loadFavPetsData}
        handleToggleLike={handleToggleLike}
        handleLoadPetsData={handleLoadPetsData}
        isLastPage={isLastPage}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        navigateTo={navigateTo}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
