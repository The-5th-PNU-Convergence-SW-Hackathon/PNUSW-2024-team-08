import { useEffect, useState } from "react";
import {
  fetchPetsDataWithAuth,
  fetchPetsDataWithoutAuth,
} from "../AdoptPets.queries";
import useLikeToggle from "../../../../../../src/components/commons/hooks/useLikeToggle";

export default function useFetchPetsData(isSSRLoggedIn) {
  const [pets, setPets] = useState([]);
  const [sort, setSort] = useState("date");
  const handleToggleLike = useLikeToggle(isSSRLoggedIn); // useLikeToggle 훅 사용

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadInitialPets = async () => {
        const page = getPageNumber(sort);
        let initialPets = [];
        for (let i = 0; i <= page; i++) {
          const fetchedPetsData = isSSRLoggedIn
            ? await fetchPetsDataWithAuth(i, sort)
            : await fetchPetsDataWithoutAuth(i, sort);
          if (fetchedPetsData) {
            initialPets = [...initialPets, ...fetchedPetsData];
          }
        }

        setPets(initialPets);
      };

      console.log(
        `${sort}Page = `,
        parseInt(sessionStorage.getItem(`${sort}Page`), 10)
      );

      setPets([]);
      loadInitialPets();
    }
  }, [sort, isSSRLoggedIn]);

  const getPageNumber = (sort) => {
    if (typeof window !== "undefined") {
      const page = parseInt(sessionStorage.getItem(`${sort}Page`), 10);
      return isNaN(page) ? 0 : page;
    }
    return 0;
  };

  const setPageNumber = (sort, page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`${sort}Page`, page.toString());
    }
  };

  const loadPetsData = async (sort, page) => {
    const fetchedPetsData = isSSRLoggedIn
      ? await fetchPetsDataWithAuth(page, sort)
      : await fetchPetsDataWithoutAuth(page, sort);
    if (fetchedPetsData) {
      const updatedPetsData = [...pets, ...fetchedPetsData];

      setPets(updatedPetsData);
      setPageNumber(sort, page);
    }
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

  const handleLoadPetsData = async () => {
    const page = getPageNumber(sort) + 1;
    await loadPetsData(sort, page);
  };

  return {
    pets,
    handleToggleLike: handleToggleLikeWrapper,
    handleLoadPetsData,
    sort,
    setSort,
  };
}
