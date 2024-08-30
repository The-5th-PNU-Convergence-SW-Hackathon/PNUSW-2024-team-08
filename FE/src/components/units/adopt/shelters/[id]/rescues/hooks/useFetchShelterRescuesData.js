import { useEffect, useState } from "react";
import {
  fetchShelterRescuesDataWithAuth,
  fetchShelterRescuesDataWithoutAuth,
} from "../AdoptShelterRescues.queries";
import useLikeToggle from "../../../../../../../../src/components/commons/hooks/useLikeToggle";

export default function useFetchShelterRescuesData(id, isSSRLoggedIn) {
  const [pets, setPets] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [sort, setSort] = useState("date");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleToggleLike = useLikeToggle(isSSRLoggedIn);

  useEffect(() => {
    if (!id) {
      console.error("ID is undefined");
      return;
    }

    if (typeof window !== "undefined") {
      // 클라이언트 환경에서만 실행
      const loadInitialPets = async () => {
        setLoading(true);
        setPets([]);
        setLoadedImages([]);
        setCurrentPage(0); // 초기화

        const fetchedPetsData = isSSRLoggedIn
          ? await fetchShelterRescuesDataWithAuth(id, sort, 0)
          : await fetchShelterRescuesDataWithoutAuth(id, sort, 0);

        if (fetchedPetsData) {
          setPets(fetchedPetsData.animals);
          setLoadedImages(Array(fetchedPetsData.animals.length).fill(false));
          setIsLastPage(fetchedPetsData.isLastPage);
        }
        setLoading(false);
      };

      loadInitialPets();
    }
  }, [id, sort, isSSRLoggedIn]);

  const loadPetsData = async () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    const fetchedPetsData = isSSRLoggedIn
      ? await fetchShelterRescuesDataWithAuth(id, sort, nextPage)
      : await fetchShelterRescuesDataWithoutAuth(id, sort, nextPage);

    if (fetchedPetsData) {
      setPets((prevPets) => [...prevPets, ...fetchedPetsData.animals]);
      setLoadedImages((prevImages) => [
        ...prevImages,
        ...Array(fetchedPetsData.animals.length).fill(false),
      ]);
      setIsLastPage(fetchedPetsData.isLastPage);
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

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updatedLoadedImages = [...prev];
      updatedLoadedImages[index] = true;
      return updatedLoadedImages;
    });
  };

  return {
    pets,
    loadedImages,
    setLoadedImages,
    handleImageLoad,
    handleToggleLike: handleToggleLikeWrapper,
    handleLoadPetsData: loadPetsData,
    sort,
    setSort,
    isLastPage,
    loading,
  };
}
