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
import usePaginationScroll from "../../../../../../../src/components/commons/hooks/usePaginationScroll";

export default function AdpotShelterRescues({ isSSRLoggedIn }) {
  // console.log("AdoptShelterRescues isSSRLoggedIn: ", isSSRLoggedIn);

  const router = useRouter();
  const { id } = router.query;
  // console.log(id);
  const {
    pets,
    loadedImages,
    setLoadedImages,
    handleImageLoad,
    handleToggleLike,
    handleLoadPetsData,
    sort,
    setSort,
    isLastPage,
    loading,
  } = useFetchShelterRescuesData(id, isSSRLoggedIn);
  const { handleDateClick, handleDogClick, handleCatClick, handleOtherClick } =
    useSortSelection(sort, setSort, loading);
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadPetsData,
    isLastPage,
    [sort]
  );
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
        loadedImages={loadedImages}
        setLoadedImages={setLoadedImages}
        handleImageLoad={handleImageLoad}
        handleToggleLike={handleToggleLike}
        isLastPage={isLastPage}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
        navigateTo={navigateTo}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
