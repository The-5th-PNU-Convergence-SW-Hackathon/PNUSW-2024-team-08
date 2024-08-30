import { useEffect, useState } from "react";
import { fetchNotices } from "../Notices.quries";
import { useRouter } from "next/router";
import { useFormatDateTime } from "../../hooks/useFormat";

export default function useFetchNotices() {
  const [noticesInfos, setNoticesInfos] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function loadNotices() {
      setIsLoading(true);
      try {
        const newNotices = await fetchNotices(id, page);
        if (newNotices && newNotices.notices && newNotices.notices.length > 0) {
          const formattedNotices = newNotices.notices.map((notice) => ({
            ...notice,
            date: useFormatDateTime(notice.date),
          }));

          setNoticesInfos((prevNotices) => {
            const updatedNotices = [...prevNotices, ...formattedNotices];
            console.log("Updated Notices: ", updatedNotices);
            return updatedNotices;
          });
          setHasMore(newNotices.notices.length >= 5);
        } else {
          setHasMore(false);
          if (page > 0) { 
            setShowModal(true);
            setModalMessage("모든 공지사항을 표시했습니다.");
            setTimeout(() => setShowModal(false), 1400);
          }
        }
      } catch (error) {
        console.error("failed notices data", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (router.isReady && id) {
      loadNotices();
    }
  }, [router.isReady, id, page]);
  const loadMoreNotices = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return { 
    noticesInfos, 
    loadMoreNotices, 
    hasMore, 
    id, 
    isLoading,
    showModal,
    modalMessage
  };
}
