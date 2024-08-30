import { useEffect, useState, useCallback } from "react";
import { fetchFavPetsData } from "../AdoptFavorites.queries";
import useLikeToggle from "../../../../../../src/components/commons/hooks/useLikeToggle";

export default function useFetchFavPetsData(isSSRLoggedIn, initialFavPetsData) {
  const [favPets, setFavPets] = useState(initialFavPetsData.animals);
  const [page, setPage] = useState(
    initialFavPetsData.animals.length > 0 ? 1 : 0
  );
  const [loadedImages, setLoadedImages] = useState([]);
  const [isLastPage, setIsLastPage] = useState(
    initialFavPetsData ? initialFavPetsData.isLastPage : false
  );
  const [loading, setLoading] = useState(false);
  const handleToggleLike = useLikeToggle(isSSRLoggedIn); // useLikeToggle 훅 사용

  const loadFavPetsData = async (page) => {
    const fetchedFavPetsData = await fetchFavPetsData(page);
    if (fetchedFavPetsData) {
      const updatedPetsData = [...favPets, ...fetchedFavPetsData.animals];
      setFavPets(updatedPetsData);
      setIsLastPage(fetchedFavPetsData.isLastPage);
    }
  };

  const handleToggleLikeWrapper = async (petData) => {
    const isSuccess = await handleToggleLike(petData.id);
    if (isSuccess) {
      setFavPets((currentPets) =>
        currentPets.filter((pet) => pet.id !== petData.id)
      );
    }
  };

  const handleLoadPetsData = async () => {
    setPage(page + 1);
    await loadFavPetsData(page);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updatedLoadedImages = [...prev];
      updatedLoadedImages[index] = true;
      return updatedLoadedImages;
    });
  };

  return {
    favPets,
    loadedImages,
    setLoadedImages,
    handleImageLoad,
    handleToggleLike: handleToggleLikeWrapper,
    loadFavPetsData,
    handleLoadPetsData,
    isLastPage,
  };
}
