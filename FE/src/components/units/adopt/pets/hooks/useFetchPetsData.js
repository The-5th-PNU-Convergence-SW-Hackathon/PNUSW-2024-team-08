import { useEffect, useState, useCallback } from "react";
import {
  fetchPetsDataWithAuth,
  fetchPetsDataWithoutAuth,
} from "../AdoptPets.queries";
import useLikeToggle from "../../../../../../src/components/commons/hooks/useLikeToggle";

export default function useFetchPetsData(isSSRLoggedIn) {
  const [pets, setPets] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const [sort, setSort] = useState("date");
  const [loading, setLoading] = useState(false);
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  const handleToggleLike = useLikeToggle(isSSRLoggedIn);

  useEffect(() => {
    const loadInitialPets = async () => {
      setLoading(true);
      setLoadingSkeleton(true);
      const page = getPageNumber(sort);
      setPets([]); // 기존 데이터를 초기화
      setLoadedImages([]); // 기존 이미지 로드 상태 초기화

      for (let i = 0; i <= page; i++) {
        const fetchedPetsData = isSSRLoggedIn
          ? await fetchPetsDataWithAuth(i, sort)
          : await fetchPetsDataWithoutAuth(i, sort);

        if (fetchedPetsData) {
          setPets((prevPets) => [...prevPets, ...fetchedPetsData.animals]);
          setLoadedImages((prevImages) => [
            ...prevImages,
            ...Array(fetchedPetsData.animals.length).fill(false),
          ]);
          setIsLastPage(fetchedPetsData.isLastPage);
          setLoadingSkeleton(false);
        }
      }
      setLoading(false);
    };

    loadInitialPets();
  }, [sort, isSSRLoggedIn]);

  const getPageNumber = (sort) => {
    const page = parseInt(sessionStorage.getItem(`${sort}Page`), 10);
    return isNaN(page) ? 0 : page;
  };

  const setPageNumber = (sort, page) => {
    sessionStorage.setItem(`${sort}Page`, page.toString());
  };

  const loadPetsData = async (page, sort) => {
    setLoading(true);
    const fetchedPetsData = isSSRLoggedIn
      ? await fetchPetsDataWithAuth(page, sort)
      : await fetchPetsDataWithoutAuth(page, sort);
    if (fetchedPetsData) {
      setPets((prevPets) => {
        const updatedPets = [...prevPets, ...fetchedPetsData.animals];
        return updatedPets;
      });
      setIsLastPage(fetchedPetsData.isLastPage);
      setLoadedImages((prev) => [
        ...prev,
        ...Array(fetchedPetsData.animals.length).fill(false),
      ]);
      setPageNumber(sort, page);
    }
    setLoading(false);
  };

  const handleToggleLikeWrapper = async (petData) => {
    const isSuccess = await handleToggleLike(petData.id);
    if (isSuccess) {
      setPets((currentPets) =>
        currentPets.map((pet) =>
          pet.id === petData.id ? { ...pet, isLike: !pet.isLike } : pet
        )
      );
    }
  };

  const handleLoadPetsData = useCallback(async () => {
    const page = getPageNumber(sort) + 1;
    await loadPetsData(page, sort);
  }, [sort]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updatedLoadedImages = [...prev];
      updatedLoadedImages[index] = true;
      return updatedLoadedImages;
    });
  };

  return {
    pets,
    isLastPage,
    loadedImages,
    setLoadedImages,
    handleImageLoad,
    handleToggleLike: handleToggleLikeWrapper,
    handleLoadPetsData,
    sort,
    setSort,
    loading,
    loadingSkeleton,
  };
}
