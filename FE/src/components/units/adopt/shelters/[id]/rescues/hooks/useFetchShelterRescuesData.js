import { useEffect, useState } from "react";
import {
  fetchShelterRescuesDataWithAuth,
  fetchShelterRescuesDataWithoutAuth,
} from "../AdoptShelterRescues.queries";
import useLikeToggle from "../../../../../../../../src/components/commons/hooks/useLikeToggle";

export default function useFetchShelterRescuesData(id, isSSRLoggedIn) {
  const [pets, setPets] = useState([]);
  const [sort, setSort] = useState("date");
  const handleToggleLike = useLikeToggle(isSSRLoggedIn); // useLikeToggle 훅 사용

  useEffect(() => {
    console.log("ID in useFetchShelterRescuesData:", id); // id를 콘솔에 출력

    if (!id) {
      console.error("ID is undefined");
      return;
    }

    if (typeof window !== "undefined") {
      // 클라이언트 환경에서만 실행
      const loadInitialPets = async (shelterId) => {
        const page = getPageNumber(sort);
        let initialPets = [];
        for (let i = 0; i <= page; i++) {
          const fetchedPetsData = isSSRLoggedIn
            ? await fetchShelterRescuesDataWithAuth(shelterId, sort, i)
            : await fetchShelterRescuesDataWithoutAuth(shelterId, sort, i);
          if (fetchedPetsData) {
            initialPets = [...initialPets, ...fetchedPetsData];
          }
        }
        setPets(initialPets);
      };

      console.log(
        `${sort}ShelterPetsPage = `,
        parseInt(sessionStorage.getItem(`${sort}ShelterPetsPage`), 10)
      );

      // sort 변경 시 pets 초기화
      setPets([]);
      loadInitialPets(id);
    }
  }, [id, sort, isSSRLoggedIn]);

  const getPageNumber = (sort) => {
    if (typeof window !== "undefined") {
      const page = parseInt(
        sessionStorage.getItem(`${sort}ShelterPetsPage`),
        10
      );
      return isNaN(page) ? 0 : page; // 페이지가 유효하지 않으면 0을 반환
    }
    return 0;
  };

  const setPageNumber = (sort, page) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`${sort}ShelterPetsPage`, page.toString());
    }
  };

  const loadPetsData = async (shelterId, sort, page) => {
    const fetchedPetsData = isSSRLoggedIn
      ? await fetchShelterRescuesDataWithAuth(shelterId, sort, i)
      : await fetchShelterRescuesDataWithoutAuth(shelterId, sort, i);
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

  // 한 번만 호출되도록 설정
  const handleLoadPetsData = async () => {
    const page = getPageNumber(sort) + 1;
    await loadPetsData(id, sort, page);
  };

  return {
    pets,
    handleToggleLike: handleToggleLikeWrapper,
    handleLoadPetsData,
    sort,
    setSort,
  };
}
