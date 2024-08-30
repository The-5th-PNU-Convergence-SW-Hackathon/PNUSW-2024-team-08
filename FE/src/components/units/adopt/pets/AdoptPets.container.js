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
import usePaginationScroll from "../../../../../src/components/commons/hooks/usePaginationScroll";
import useScrollToTop from "../../../../../src/components/commons/hooks/useScrollToTop";

export default function AdpotPets({ isSSRLoggedIn, profileURL }) {
  // console.log("AdoptPets isSSRLoggedIn: ", isSSRLoggedIn);

  const {
    pets,
    isLastPage,
    loadedImages,
    setLoadedImages,
    handleImageLoad,
    handleToggleLike,
    handleLoadPetsData,
    sort,
    setSort,
    loading,
    loadingSkeleton,
  } = useFetchPetsData(isSSRLoggedIn);
  const { handleDateClick, handleDogClick, handleCatClick, handleOtherClick } =
    useSortSelection(sort, setSort, loading);
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadPetsData,
    isLastPage,
    [sort]
  );
  const { showScrollTop, scrollToTop } = useScrollToTop(scrollRef, 1500);
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <AdoptHandler handleRequireModal={handleRequireModal} />
      <AdpotPetsUI
        sort={sort}
        handleLoadPetsData={handleLoadPetsData}
        handleDateClick={handleDateClick}
        handleDogClick={handleDogClick}
        handleCatClick={handleCatClick}
        handleOtherClick={handleOtherClick}
        pets={pets}
        isLastPage={isLastPage}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
        loadedImages={loadedImages}
        setLoadedImages={setLoadedImages}
        loading={loading}
        loadingSkeleton={loadingSkeleton}
        handleImageLoad={handleImageLoad}
        handleToggleLike={handleToggleLike}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
        navigateTo={navigateTo}
      />

      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
