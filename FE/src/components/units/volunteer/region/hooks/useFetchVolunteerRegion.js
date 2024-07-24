import { useState, useEffect } from "react";
import useFetchVolunteer from "../../hooks/useFetchVolunteer"; //초기 데이터를 불러와준다.(초기 데이터는 api를 이미 불러옴)
import { fetchVolunteerRegion } from "../VolunteerRegion.quries"; //추가 데이터를 불러와준다.

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    localGroups: [
      {
        id: 17,
        name: "고양이 사랑",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        district: "수성구",
        subDistrict: "두산동",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 18,
        isLike: false
      },
      {
        id: 18,
        name: "고양이 사랑2",
        description: "집사들의 모임입니다!",
        participation: 20,
        category: "봉사",
        district: "수성구",
        subDistrict: "두산동",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 20,
        isLike: false
      },
    ],
  },
};

export default function useFetchVolunteerRegion() {
  const { volunteerInfos } = useFetchVolunteer(); //전체적인 봉사활동 관련 api를 먼저 불러온다.
  const [pageNumber, setPageNumber] = useState(0);
  const [volunteerRegionInfos, setVolunteerRegionInfos] = useState([]);

  useEffect(() => {
    console.log("volunteerLocalGroups data : ", volunteerInfos);
    if (volunteerInfos && volunteerInfos.localGroups) {
      setVolunteerRegionInfos(volunteerInfos.localGroups);
    }
  }, [volunteerInfos]);


  const loadUpdatedVolunteerRegionData = async () => {
    const fetchedVolunteerRegionData = example.result.localGroups; //이 부분에 불러올 쿼리를 넣어준다
    setVolunteerRegionInfos(prevState => [
      ...prevState,
      ...fetchedVolunteerRegionData,
    ]);
    setPageNumber((prevePageNumber) => prevePageNumber + 1);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pageNumber_region', pageNumber);
      localStorage.setItem(
        `volunteerRegionData`,
        JSON.stringify(volunteerRegionInfos)
      );
    }
  }, [pageNumber, volunteerRegionInfos]);

  const handleToggleLike = (localId) => {
    setVolunteerRegionInfos((currentVolunteer) =>
      currentVolunteer.map((local) =>
        local.id === localId ? {...local, isLike: !local.isLike} : local
      )
    )
  }

  return { volunteerRegionInfos, loadUpdatedVolunteerRegionData, handleToggleLike };
}
