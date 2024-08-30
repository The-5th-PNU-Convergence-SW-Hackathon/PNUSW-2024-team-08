import { useEffect, useState, useCallback } from "react";
import { fetchRegularMeetings } from "../Regular_Meetings.quries";
import { useFormatDate, useFormatCost } from "../../hooks/useFormat";
import { useRouter } from "next/router";

export default function useFetchRegularMeetings() {
  const [regularMeetingsInfos, setRegularMeetingsInfos] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const [daysDifferences, setDaysDifferences] = useState([]); // 각 미팅의 일수 차이를 저장할 배열 변수 추가
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    if (!router.isReady || !id) return;

    async function loadInitialMeetings() {
      setIsLoading(true);
      try {
        const regularMeetingsData = await fetchRegularMeetings(id, page);
        if (regularMeetingsData && regularMeetingsData.meetings) {
          const formattedMeetings = formatMeetings(regularMeetingsData.meetings);
          setRegularMeetingsInfos(formattedMeetings);
          updateDaysDifferences(regularMeetingsData.meetings);
          setHasMore(regularMeetingsData.meetings.length >= 5);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Failed to load initial meetings data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadInitialMeetings();
  }, [router.isReady, id]);

  const loadMoreMeetings = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const regularMeetingsData = await fetchRegularMeetings(id, nextPage);
      if (regularMeetingsData && regularMeetingsData.meetings && regularMeetingsData.meetings.length > 0) {
        const formattedMeetings = formatMeetings(regularMeetingsData.meetings);
        setRegularMeetingsInfos(prevMeetings => [...prevMeetings, ...formattedMeetings]);
        updateDaysDifferences(regularMeetingsData.meetings);
        setPage(nextPage);
        setHasMore(regularMeetingsData.meetings.length >= 5);
      } else {
        setHasMore(false);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 1400)
        setModalMessage("모든 모임을 표시했습니다.");
      }
    } catch (error) {
      console.error("Failed to load more meetings:", error);
    } finally {
      setIsLoading(false);
    }
  }, [hasMore, isLoading, id, page]);

  const formatMeetings = (meetings) => {
    return meetings.map(meeting => ({
      ...meeting,
      meetDate: useFormatDate(meeting.meetDate),
      cost: useFormatCost(meeting.cost)
    }));
  };

  const updateDaysDifferences = (meetings) => {
    const currentDate = new Date();
    const differences = meetings.map(meeting => {
      const receivedDate = new Date(meeting.meetDate);
      const timeDiff = receivedDate - currentDate;
      return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    });
    setDaysDifferences(prevDifferences => [...prevDifferences, ...differences]);
  };

  return {
    regularMeetingsInfos,
    loadMoreMeetings,
    daysDifferences,
    hasMore,
    id,
    isLoading,
    showModal,
    modalMessage
  };
}
