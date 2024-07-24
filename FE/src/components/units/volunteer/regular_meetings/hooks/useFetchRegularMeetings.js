import { useEffect, useState } from "react";
import { fetchRegularMeetings } from "../Regular_Meetings.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
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
};

function formatCost(cost) {
  // 숫자를 문자열로 변환하고, 천 단위마다 ','를 추가
  return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


export default function useFetchRegularMeetings() {
  const [regularMeetingsInfos, setRegularMeetingsInfos] = useState(
    example.result
  );

  const [daysDifferences, setDaysDifferences] = useState([]); // 각 미팅의 일수 차이를 저장할 배열 변수 추가

  useEffect(() => {
    async function loadVolunteerDetail() {
      try {
        const regularMeetingsData = regularMeetingsInfos; //await fetchVolunteerDetail();
        const updatedMeetings = regularMeetingsData.meetings.map((meeting) => ({
          ...meeting,
          date: formatDateTime(meeting.date),
          cost: formatCost(meeting.cost)
        }));
        setRegularMeetingsInfos({
          ...regularMeetingsData,
          meetings: updatedMeetings,
        });

        const currentDate = new Date();
        const differences = regularMeetingsData.meetings.map((meeting) => {
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

  return { regularMeetingsInfos , daysDifferences};
}
