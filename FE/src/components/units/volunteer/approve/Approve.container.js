import Header from "../../../commons/headers/Headers.container"
import ApproveUI from "./Approve.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useFetchUserList } from "./hooks/useFetchUserList";
import { useUserApproveReject } from "./hooks/useUserApproveReject";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Approve({ isSSRLoggedIn, profileURL }) {
  const router = useRouter();
  const id = router.query.id;

  const {
    isApproveClick,
    isRejectClick,
    handleClickApprove,
    handleClickReject
  } = useUserApproveReject();

  const {
    userListData
  } = useFetchUserList();
  const [userList, setUserList] = useState(userListData);

  // 초기 데이터 로드
  useEffect(() => {
    setUserList(userListData);
  }, [userListData]);

  // 사용자 리스트 업데이트 함수
  const updateListCallback = (applicantId) => {
    setUserList((prevList) => prevList.filter(user => user.id !== applicantId));
  };

  const [clickedApproveIds, setClickedApproveIds] = useState([]);

  const handleApproveClick = (approveId) => {
    setClickedApproveIds(prevIds => {
      if (prevIds.includes(approveId)) {
        return prevIds.filter(id => id !== approveId);
      } else {
        return [...prevIds, approveId];
      }
    });
  };


  return (
    <>
      <Header isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <ApproveUI
        id={id}
        userListData={userList}
        handleClickApprove={(id, applicantId) => handleClickApprove(id, applicantId, updateListCallback)}
        handleClickReject={(id, applicantId) => handleClickReject(id, applicantId, updateListCallback)}
        clickedApproveIds={clickedApproveIds}
        handleApproveClick={handleApproveClick}
      />
      <Navigation />
    </>
  )
}