import { useEffect, useState } from "react";
import { fetchSheltersData } from "../AdoptShelters.queries";

export default function useFetchSheltersData() {
  const [shelters, setShelters] = useState([]);

  // lat이나 lng가 null인 데이터를 제외하는 필터링 함수
  const filterValidShelters = (sheltersData) => {
    return sheltersData.filter(
      (shelter) => shelter.lat !== null && shelter.lng !== null
    );
  };

  useEffect(() => {
    async function loadSheltersData() {
      if (typeof window !== "undefined") {
        const cachedShelters = sessionStorage.getItem("shelterList");
        if (cachedShelters) {
          setShelters(JSON.parse(cachedShelters));
        } else {
          const sheltersData = await fetchSheltersData();
          const validShelters = filterValidShelters(sheltersData);
          setShelters(validShelters);
          sessionStorage.setItem("shelterList", JSON.stringify(validShelters));
        }
        console.log("shelterList = ", cachedShelters);
      }
    }

    loadSheltersData();
  }, []);

  return { shelters };
}
