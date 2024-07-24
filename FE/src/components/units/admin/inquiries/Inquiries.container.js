import { useState } from "react";
import AdminHeaderUI from "../adminHeader/AdminHeader.presenter";
import InquiriesUI from "./Inquiries.presenter";
import useFetchInquiries from "./hooks/useFetchInquiries";

export default function Inquiries(props) {
  const [isUserInfoClicked, setIsUserInfoClicked] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openUserInfo = (id) => {
    setIsUserInfoClicked(true);
    const user = inquiriesInfos.find((user) => user.inquiryId = id);
    setSelectedUser(user);
  };

  const closeUserInfo = () => {
    setIsUserInfoClicked(false);
    setSelectedUser(null);
  };

  const { inquiriesInfos } = useFetchInquiries();

  return (
    <>
      <AdminHeaderUI isUserInfoClicked={isUserInfoClicked}/>
      <InquiriesUI
        isUserInfoClicked={isUserInfoClicked}
        openUserInfo={openUserInfo}
        closeUserInfo={closeUserInfo}
        inquiriesInfos={inquiriesInfos}
        selectedUser={selectedUser}
      />
    </>
  );
}
