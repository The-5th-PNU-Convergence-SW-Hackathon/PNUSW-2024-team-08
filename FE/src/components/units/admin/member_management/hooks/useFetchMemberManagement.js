import { useState } from "react";
import { fetchMemberManagement } from "../Member_Management.queries";

const example = {
  success: true,
  code: 200,
  message: "OK",
  users: [
    {
      id: 1,
      nickName: "hoayi",
      email: "hoyai@naver.com",
      signUpDate: "2024-01-10",
      lastLogin: "2024-04-25 14:35",
      applicationsSubmitted: 5,
      applicationsCompleted: 3,
      role: "SUPER",
      isActive: true,
      suspensionStart: "2024-04-24 09:20",
      suspensionDays: "60일",
      suspensionReason: "커뮤니티 욕설",
    },
    {
      id: 2,
      nickName: "sudding",
      email: "sudding@naver.com",
      signUpDate: "2023-12-20",
      lastLogin: "2024-04-24 09:20",
      applicationsSubmitted: 2,
      applicationsCompleted: 2,
      role: "ADMIN",
      isActive: true,
      suspensionStart: null,
      suspensionDays: null,
      suspensionReason: null,
    },
  ],
};

export default function useFetchMemberManagement() {
  const [memberInfos, setMemberInfos] = useState(example.users);

  return {
    memberInfos,
  };
}
