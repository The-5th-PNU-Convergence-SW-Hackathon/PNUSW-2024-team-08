import { useEffect, useState } from "react";
import { useFormatDate, useFormatCost } from "../../hooks/useFormat";

export default function useFetchVolunteerDetail(volunteerDetailData) {
  const [volunteerDetailInfos, setVolunteerDetailInfos] = useState(volunteerDetailData);
  const [daysDifferences, setDaysDifferences] = useState([]); // 각 미팅의 일수 차이를 저장할 배열 변수 추가
  const latestNotices = volunteerDetailInfos.notices.slice(0, 3);
  const latestMeetings = volunteerDetailInfos.meetings.slice(0,3);

  useEffect(() => {
    async function loadVolunteerDetail() {
      try {
        const volunteerDetailData = volunteerDetailInfos;
        const updatedMeetings = volunteerDetailData.meetings.map((meeting) => ({
          ...meeting,
          meetDate: useFormatDate(meeting.meetDate),
          cost: useFormatCost(meeting.cost),
        }));

        const sortedMembers = volunteerDetailData.members.sort((a, b) => {
          const roleOrder = { CREATOR: 0, ADMIN: 1, USER: 2 };
          return roleOrder[a.role] - roleOrder[b.role];
        });

        setVolunteerDetailInfos({
          ...volunteerDetailData,
          meetings: updatedMeetings,
          members: sortedMembers,
        });

        const currentDate = new Date();
        const differences = volunteerDetailData.meetings.map((meeting) => {
          const receivedDate = new Date(meeting.meetDate);
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
  console.log(volunteerDetailData);

  return {
    volunteerDetailInfos,
    daysDifferences,
    latestNotices,
    latestMeetings
  };
}
