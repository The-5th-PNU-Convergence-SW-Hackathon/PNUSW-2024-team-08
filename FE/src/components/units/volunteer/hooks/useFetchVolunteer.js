import { useEffect, useState } from "react";
import { fetchVolunteer } from "../Volunteer.quries"; // API 호출 함수

export default function useFetchVolunteer() {
  const [volunteerInfos, setVolunteerInfos] = useState(null); // 초기값을 null로 설정
  
  useEffect(() => {
    async function loadVolunteer() {
      try {
        const volunteerInfosData = await fetchVolunteer();
        setVolunteerInfos(volunteerInfosData);
      } catch (error) {
        console.error("Failed to fetch volunteer data:", error);
      }
    }

    loadVolunteer();
  }, []);

  return { volunteerInfos };
}
