import { useState } from "react";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ProfileUI from "./Profile.presenter";
import useLogout from "./hooks/useLogout";
import ConfirmModalUI from "../../../../../src/components/commons/confirmModal/ConfirmModal.presenter";

export default function Profile({ isSSRLoggedIn, profileData }) {
  console.log("Profile isSSRLoggedIn: ", isSSRLoggedIn);
  console.log("ProfileData: ", profileData);

  const [profile, setProfile] = useState(profileData);
  const { navigateTo, navigateBack } = useNavigate();

  const paths = {
    edit: "/info/profile/edit",
    pw: "/info/profile/pw",
    delete: "/info/profile/delete",
  };

  const { isLogoutClicked, toggleLogoutState, confirmLogout, logoutModalText } =
    useLogout();

  return (
    <>
      <ProfileUI
        profile={profile}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
        paths={paths}
        toggleLogoutState={toggleLogoutState}
      />
      <ConfirmModalUI
        modalText={logoutModalText}
        isModalOpen={isLogoutClicked}
        handleCancelBtn={toggleLogoutState}
        handleConfirmBtn={confirmLogout}
      />
    </>
  );
}
