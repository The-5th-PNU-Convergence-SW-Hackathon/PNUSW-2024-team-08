import { useState, useEffect } from "react";
import { volunteerLike } from "../../Volunteer.quries";

export default function useFetchVolunteerRecommend(recommendVolunteer) {
  const [volunteerRecommendInfos, setVolunteerRecommendInfos] = useState(recommendVolunteer);

  const handleToggleLike = async (recommendID) => {
    try {
      const data = await volunteerLike(recommendID);
      if (data.success) {
        setVolunteerRecommendInfos((currentVolunteer) => {
          const updatedVolunteer = currentVolunteer.map((recommendGroups) =>
            recommendGroups.id === recommendID
              ? { 
                  ...recommendGroups, 
                  isLike: !recommendGroups.isLike, // 현재 상태를 반전
                  likeNum: recommendGroups.isLike ? recommendGroups.likeNum - 1 : recommendGroups.likeNum + 1 // 현재 상태에 따라 likeNum 조정
                }
              : recommendGroups
          );
          return [...updatedVolunteer]; // 새로운 배열 반환
        });
      }
    } catch (error) {
      console.log("volunteer Like failed: ", error);
    }
  };

  return {
    volunteerRecommendInfos,
    handleToggleLike,
  };
}
