import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import AdoptRequestUI from "./Adopt_Request.presenter";
import useFetchAdoptRequest from "./hooks/useFetchAdoptRequest";

export default function AdoptRequest() {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openUserInfo = (id) => {
    setIsUserInfoClicked(true);
    const user = requestInfos.find((user) => user.applyId === id);
    setSelectedUser(user);  
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
    setSelectedUser(null);
  }

  const { requestInfos } = useFetchAdoptRequest();

  return (
    <>
      <AdminHeaderUI 
        isUserInfoClicked={isUserInfoClicked}
      />
      <AdoptRequestUI
        isUserInfoClicked={isUserInfoClicked}
        openUserInfo={openUserInfo}
        closeUserInfo={closeUserInfo}
        requestInfos={requestInfos}
        selectedUser={selectedUser}
      />
    </>
  );
}
