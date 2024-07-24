import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import ReportsUI from "./Reports.presenter";
import useFetchReports from "./hooks/useFetchReports";

export default function Reports() {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openUserInfo = (id) => {
    setIsUserInfoClicked(true);
    const user = reportInfos.find((user) => user.id === id)
    setSelectedUser(user);
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
    setSelectedUser(null);
  };
  const { reportInfos } = useFetchReports();
  return (
    <>
      <AdminHeaderUI isUserInfoClicked={isUserInfoClicked} />
      <ReportsUI
        isUserInfoClicked={isUserInfoClicked}
        openUserInfo={openUserInfo}
        closeUserInfo={closeUserInfo}
        reportInfos={reportInfos}
        selectedUser={selectedUser}
      />
    </>
  );
}
