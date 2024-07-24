//여기서 volunteerInfos를 가져와서 그 안에 있는 myGroup을 가져오는 것으로 해볼까??
import { useState, useEffect } from "react";
import useFetchVolunteer from "../../hooks/useFetchVolunteer";
import { fetchVolunteerJoined } from "../VolunteerJoined.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    myGroups: [
      {
        id: 17,
        name: "강아지 사랑",
        description: "강사모입니다!",
        participation: 18,
        category: "봉사",
        district: "수성구",
        subDistrict: "두산동",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 9,
        isLike: false
      },
      {
        id: 18,
        name: "강아지 사랑2",
        description: "강사모2입니다!",
        participation: 9,
        category: "봉사",
        district: "수성구",
        subDistrict: "두산동",
        profileURL: "/images/volunteer/volunteer_1.svg",
        likeNum: 53,
        isLike: false
      },
    ],
  },
};

export default function useFetchVolunteerJoined() {
  const { volunteerInfos } = useFetchVolunteer(); // 전체적인 봉사활동 관련된 API 데이터를 가져오는 커스텀 훅
  const [pageNumber, setPageNumber] = useState(0); // 페이지 번호 상태
  const [volunteerJoinedInfos, setVolunteerJoinedInfos] = useState([]); // 초기 내 모임 값

  useEffect(() => {
    console.log("volunteerJoined data : ", volunteerInfos);
    if (volunteerInfos && volunteerInfos.myGroups) {
      setVolunteerJoinedInfos(volunteerInfos.myGroups);
    }
  }, [volunteerInfos]);

  useEffect(() => { //초기값을 불러와주는 기능
    if (typeof window !== 'undefined') { //새로고침의 문제해결
      const savedPageNumber = localStorage.getItem('pageNumber_joined');
      setPageNumber(savedPageNumber ? parseInt(savedPageNumber) : 0);

      const savedVolunteerData = localStorage.getItem('volunteerJoinedData');
      if (savedVolunteerData) {
        setVolunteerJoinedInfos(JSON.parse(savedVolunteerData));
      }
    }
  }, [])

  const loadUpdatedVolunteerJoinedData = async () => { //api문서를 더보기 버튼으로 fetch해 오는 기능
    const fetchedVolunteerJoinedData = example.result.myGroups //여기에 한홍이형이 불러온 api주소를 입력해준다.
    setVolunteerJoinedInfos(prevState => [...prevState, ...fetchedVolunteerJoinedData]);
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pageNumber_joined', pageNumber);
      localStorage.setItem(
        `volunteerJoinedData`,
        JSON.stringify(volunteerJoinedInfos)
      );
    }
  }, [pageNumber, volunteerJoinedInfos]);

  const handleToggleLike = (myGroupId) => {
    setVolunteerJoinedInfos((currentVolunteer) =>
      currentVolunteer.map((myGroups) =>
        myGroups.id === myGroupId ? {...myGroups, isLike: !myGroups.isLike} : myGroups
      )
    )
  }


  // const loadUpdatedVolunteerJoinedData = async () => {
  //       const volunteerJoinedInfosData =  await fetchVolunteerJoined(); //example변수
  //       const fetchVolunteerJoinedData = volunteerJoinedInfosData.result.myGroups;
  //       setVolunteerJoinedInfos(prevState => [...prevState, ...fetchVolunteerJoinedData]);
  // };

  return { volunteerJoinedInfos, loadUpdatedVolunteerJoinedData, handleToggleLike };
}
