import { useEffect, useState } from "react";
import { fetchVolunteerWithAuth, fetchVolunteerWithoutAuth } from "../Volunteer.quries"; // API 호출 함수

export default function useFetchVolunteer(isSSRLoggedIn) {
  const [volunteerInfos, setVolunteerInfos] = useState(null); // 초기값을 null로 설정
  
  useEffect(() => {
    async function loadVolunteer() {
      try {
        if(isSSRLoggedIn) {
          const volunteerInfosData = await fetchVolunteerWithAuth();
          setVolunteerInfos(volunteerInfosData);
        } else if(isSSRLoggedIn == false) {
          const volunteerInfosData = await fetchVolunteerWithoutAuth();
          setVolunteerInfos(volunteerInfosData);
        }
      } catch (error) {
        console.error("Failed to fetch volunteer data:", error);
      }
    }

    loadVolunteer();
  }, []);

  return { volunteerInfos };
}
