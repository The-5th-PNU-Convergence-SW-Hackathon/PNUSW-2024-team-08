import { useEffect, useState } from "react";
import { fetchRegularMeeting } from "../Regular_Meeting.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    id: 23,
    name: "5차 동물 사랑 봉사",
    date: "2024-04-20T14:30",
    location: "범어역 1번 출구",
    cost: 15000,
    participantNum: 7,
    maxNum: 15,
    profileURL: "/images/volunteer/regular_meeting/meeting_main_img.svg",
    description: (
      <>
        계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이
        가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다
        못 헤는 것은 쉬이 아 침이 오는 까닭이요, 내일 밤이 남은 까닭이요.
      </>
    ),
    participants: [
      { profileURL: "https://s3.1xxx.xx.com" },
      { profileURL: "https://s3.2xxx.xx.com" },
      { profileURL: "https://s3.3xxx.xx.com" },
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

export default function useFetchRegularMeeting() {
  const [regularMeetingInfos, setRegularMeetingInfos] = useState(
    example.result
  );
  useEffect(() => {
    async function loadRegularMeeting() {
      const regularMeetingData = regularMeetingInfos; //await fetchRegularMeeting();
      // 날짜 형식 변경
      const updatedDate = formatDateTime(regularMeetingData.date);
      // cost 형식 변경
      const updatedCost = formatCost(regularMeetingData.cost);
      // 변경된 날짜로 업데이트
      setRegularMeetingInfos({
        ...regularMeetingData,
        date: updatedDate,
        cost: updatedCost,
      });
    }

    loadRegularMeeting();
  }, []);
  return { regularMeetingInfos };
}
