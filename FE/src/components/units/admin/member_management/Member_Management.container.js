import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import MemberManagementUI from "./Member_Management.presenter";
import useFetchMemberManagement from "./hooks/useFetchMemberManagement";

export default function MemberManagement() {
  const [isActiveClicked, setIsActiveClicked] = useState(false);
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);
  const [changeStatus, setChangeStatus] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openUserInfo = (id) => {
    setIsUserInfoClicked(true);
    const user = memberInfos.find((user) => user.id === id);
    setSelectedUser(user);
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
    setIsActiveClicked(false);
    setChangeStatus(false);
    setSelectedUser(null);
  };

  const isActive = (id) => {
    setIsActiveClicked(true);
    const user = memberInfos.find((user) => user.id === id);
    setSelectedUser(user);
  };

  const changeStatusBtn = () => {
    setChangeStatus(true);
    setIsUserInfoClicked(false);
    setSelectedUser(selectedUser);
  }

  const { memberInfos } = useFetchMemberManagement();

  return (
    <>
      <AdminHeaderUI
        isUserInfoClicked={isUserInfoClicked}
        isActiveClicked={isActiveClicked}
        changeStatus={changeStatus}
      />
      <MemberManagementUI
        isActiveClicked={isActiveClicked}
        isUserInfoClicked={isUserInfoClicked}
        changeStatus={changeStatus}
        isActive={isActive}
        openUserInfo={openUserInfo}
        changeStatusBtn={changeStatusBtn}
        closeUserInfo={closeUserInfo}
        memberInfos={memberInfos}
        selectedUser={selectedUser}
      />
    </>
  );
}
