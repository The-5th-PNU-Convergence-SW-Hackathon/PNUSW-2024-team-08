import { useState,useEffect } from "react";
import { fetchInquiries } from "../Inquiries.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    inquiries: [
      {
        inquiryId: "11",
        inquiryDate: "2024-04-01T13:45:00Z",
        userNickName: "호얘이",
        type: "입양 문의",
        subject: "입양 절차 문의",
        status: "PROCESSED",
      },
      {
        inquiryId: "12",
        inquiryDate: "2024-04-01T13:45:00Z",
        userNickName: "호얘이2",
        type: "기타",
        subject: "삭제한 게시글 복구 요청",
        status: "PROCESSING",
      },
    ],
  },
};

function formatDate(isoString) {
  const date = new Date(isoString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months start at 0!
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

export default function useFetchInquiries() {
  const [inquiriesInfos, setInquiriesInfos] = useState(
    example.result.inquiries
  );

  useEffect(() => {
    const formattedInquiries = example.result.inquiries.map((inquiry) => ({
      ...inquiry,
      inquiryDate: formatDate(inquiry.inquiryDate),
    }));
    setInquiriesInfos(formattedInquiries);
  }, []);

  return {
    inquiriesInfos,
  };
}
