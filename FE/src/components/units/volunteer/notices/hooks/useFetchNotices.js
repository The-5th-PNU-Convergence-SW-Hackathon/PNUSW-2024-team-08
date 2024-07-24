import { useEffect, useState } from "react";
import { fetchNotices } from "../Notices.quries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    notice: [
      {
        id: 23,
        name: "이한홍",
        date: "3시간 전",
        title: "다음주에는 1주년 행사가 있습니다~",
        isRead: true,
      },
      {
        id: 24,
        name: "이한홍",
        date: "4시간 전",
        title: "다음주 봉사활동 일정이 변경되었습니다.",
        isRead: false,
      },
    ],
  },
};

export default function useFetchNotices() {
  const [noticesInfos, setNoticesInfos] = useState(example.result);
  useEffect(() => {
    async function loadNotices() {
      const noticesData = await fetchNotices();
      setNoticesInfos(noticesData);
    }

    //loadNotices()
  }, []);
  return { noticesInfos };
}
