import { useEffect, useState, useCallback } from "react";
import { fetchFavPetsData } from "../AdoptFavorites.queries";
import useLikeToggle from "../../../../../../src/components/commons/hooks/useLikeToggle";

export default function useFetchFavPetsData(isSSRLoggedIn) {
  const [favPets, setFavPets] = useState([]);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const handleToggleLike = useLikeToggle(isSSRLoggedIn); // useLikeToggle 훅 사용

  const loadInitialPets = useCallback(async () => {
    const fetchedFavPetsData = await fetchFavPetsData(0);
    if (fetchedFavPetsData) {
      setFavPets(fetchedFavPetsData.animals);
      setIsLastPage(fetchedFavPetsData.isLastPage);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 클라이언트 환경에서만 실행
      loadInitialPets();
    }
  }, [loadInitialPets]);

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

  return {
    favPets,
    handleToggleLike: handleToggleLikeWrapper,
    loadFavPetsData,
    handleLoadPetsData,
    isLastPage,
  };
}
