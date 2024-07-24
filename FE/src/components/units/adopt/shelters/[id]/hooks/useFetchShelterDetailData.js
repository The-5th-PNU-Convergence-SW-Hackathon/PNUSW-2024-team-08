import { useEffect, useState } from "react";
import { fetchShelterDetailData } from "../AdoptShelterDetail.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    id: 1,
    name: "중구 동물보호소",
    lat: 37.563656,
    lng: 126.99751,
    careAddr: "서울특별시 중구 을지로 10",
    careTel: "02-123-4561",
  },
};

export default function useFetchShelterDetailData(id) {
  const [shelter, setShelter] = useState(null);

  useEffect(() => {
    if (id) {
      async function loadSheltersData(shelterId) {
        const shelterData = await fetchShelterDetailData(shelterId);
        setShelter(shelterData);
        console.log(shelterData);
      }

      loadSheltersData(id);
    }
  }, [id]);

  return { shelter };
}
