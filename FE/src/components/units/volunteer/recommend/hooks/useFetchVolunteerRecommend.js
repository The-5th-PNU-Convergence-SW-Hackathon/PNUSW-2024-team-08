import { useState, useEffect } from "react";
import useFetchVolunteer from "../../hooks/useFetchVolunteer"; // 위에서 정의한 훅

export default function useFetchVolunteerRecommend() {
  const { volunteerInfos } = useFetchVolunteer();
  const [volunteerRecommendInfos, setVolunteerRecommendInfos] = useState([]);

  useEffect(() => {
    console.log("volunteerRecommend data : ", volunteerInfos);
    if (volunteerInfos && volunteerInfos.recommendGroups) {
      setVolunteerRecommendInfos(volunteerInfos.recommendGroups);
    }
  }, [volunteerInfos]);

  const handleToggleLike = (recommendId) => {
    setVolunteerRecommendInfos((currentVolunteer) =>
      currentVolunteer.map((recommend) =>
        recommend.id === recommendId ? { ...recommend, isLike: !recommend.isLike } : recommend
      )
    );
  };

  return {
    volunteerRecommendInfos,
    handleToggleLike,
  };
}