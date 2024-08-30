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

export default function AdpotFavorites({
  isSSRLoggedIn,
  profileURL,
  initialFavPetsData,
}) {
  console.log("AdoptFavorites isSSRLoggedIn: ", isSSRLoggedIn);

  console.log("AdoptFavorites initialFavPetsData: ", initialFavPetsData);

  const {
    favPets,
    loadedImages,
    setLoadedImages,
    handleImageLoad,
    handleToggleLike,
    loadFavPetsData,
    handleLoadPetsData,
    isLastPage,
  } = useFetchFavPetsData(isSSRLoggedIn, initialFavPetsData);
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <AdoptHandler handleRequireModal={handleRequireModal} />
      <AdpotFavoritesUI
        favPets={favPets}
        loadedImages={loadedImages}
        setLoadedImages={setLoadedImages}
        handleImageLoad={handleImageLoad}
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
