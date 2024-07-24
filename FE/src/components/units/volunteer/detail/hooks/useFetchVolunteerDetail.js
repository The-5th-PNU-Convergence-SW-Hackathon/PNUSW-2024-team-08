import { useEffect, useState } from "react";
import { fetchVolunteerDetail } from "../VolunteerDetail.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    profileURL: "/images/volunteer/volunteerDetail/volunteer_main_image.svg",
    name: "대구 동물 사랑 협회",
    description: "동물을 사랑하는 모임입니다!",
    notices: [
      {
        id: 23,
        name: "이한홍",
        date: "2023-03-28T14:30",
        title:
          "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다.",
        isRead: true,
      },
      {
        id: 24,
        name: "이한홍",
        date: "2023-04-23T14:30",
        title: "다음주 봉사활동 일정이 변경되었습니다.",
        isRead: false,
      },
    ],
    meetings: [
      {
        id: 23,
        name: "5차 동물 사랑 봉사",
        date: "2024-04-20T14:30",
        location: "범어역 1번 출구",
        cost: 15000,
        participantCnt: 7,
        maxNum: 15,
        profileURL: "/images/volunteer/volunteerDetail/meeting_detail_main.svg",
        description: "동물을 사랑하는 사람들의 봉사 활동입니다~",
        participants: [
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
        ],
      },
      {
        id: 24,
        name: "6차 동물 사랑 봉사",
        date: "2024-04-28T14:30",
        location: "범어역 1번 출구",
        cost: 15000,
        participantCnt: 3,
        maxNum: 15,
        profileURL: "/images/volunteer/volunteerDetail/meeting_detail_main.svg",
        description: "동물을 사랑하는 사람들의 봉사 활동입니다~",
        participants: [
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
        ],
      },
      {
        id: 25,
        name: "6차 동물 사랑 봉사",
        date: "2024-04-30T14:30",
        location: "범어역 1번 출구",
        cost: 15000,
        participantCnt: 3,
        maxNum: 15,
        profileURL: "/images/volunteer/volunteerDetail/meeting_detail_main.svg",
        description: "동물을 사랑하는 사람들의 봉사 활동입니다~",
        participants: [
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
          { profileURL: "/images/volunteer/volunteerDetail/user_3.svg" },
        ],
      },
    ],
    members: [
      {
        id: 15,
        name: "이한홍",
        role: "ADMIN",
        profileURL: "/images/volunteer/volunteerDetail/member_icon.svg",
      },
      {
        id: 16,
        name: "이종일",
        role: "Manager",
        profileURL: "/images/volunteer/volunteerDetail/member_icon.svg",
      },
      {
        id: 17,
        name: "장재영",
        role: "USER",
        profileURL: "/images/volunteer/volunteerDetail/member_icon.svg",
      },
      {
        id: 18,
        name: "아무개",
        role: "USER",
        profileURL: "/images/volunteer/volunteerDetail/member_icon.svg",
      },
    ],
  },
};

function formatDateTime(dateTimeStr) {
  // 주어진 문자열을 Date 객체로 변환
  const date = new Date(dateTimeStr);

  // 월 추출
  const month = date.getMonth() + 1;

  // 일 추출
  const day = ("0" + date.getDate()).slice(-2);

  // 시간 추출
  const hours = ("0" + date.getHours()).slice(-2);

  // 분 추출
  const minutes = ("0" + date.getMinutes()).slice(-2);

  // 요일 추출
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const weekdayIndex = date.getDay();
  const weekday = weekdays[weekdayIndex];

  // 오전/오후 구분
  const ampm = hours >= 12 ? "오후" : "오전";
  const hour12 = hours % 12 || 12; // 12시간 형식으로 변환

  // 추출된 정보를 조합하여 원하는 형식으로 반환
  const formattedDateTime = `${month}/${day} (${weekday}) ${ampm} ${hour12}:${minutes}`;

  return formattedDateTime;
}

function formatCost(cost) {
  // 숫자를 문자열로 변환하고, 천 단위마다 ','를 추가
  return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function useFetchVolunteerDetail() {
  const [volunteerDetailInfos, setVolunteerDetailInfos] = useState(
    example.result // 나중에는 null 값으로 펴시
  );

  const [daysDifferences, setDaysDifferences] = useState([]); // 각 미팅의 일수 차이를 저장할 배열 변수 추가

  useEffect(() => {
    async function loadVolunteerDetail() {
      try {
        const volunteerDetailData = volunteerDetailInfos; //await fetchVolunteerDetail();
        const updatedMeetings = volunteerDetailData.meetings.map((meeting) => ({
          ...meeting,
          date: formatDateTime(meeting.date),
          cost: formatCost(meeting.cost)
        }));
        setVolunteerDetailInfos({
          ...volunteerDetailData,
          meetings: updatedMeetings,
        });

        const currentDate = new Date();
        const differences = volunteerDetailData.meetings.map((meeting) => {
          const receivedDate = new Date(meeting.date);
          const timeDiff = receivedDate - currentDate;
          return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        });
        setDaysDifferences(differences);
      } catch (error) {
        console.error("Error fetching volunteer detail:", error);
      }
    }

    loadVolunteerDetail();
  }, []);

  return {
    volunteerDetailInfos,
    daysDifferences,
  };
}
