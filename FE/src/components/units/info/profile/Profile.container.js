import { useState } from "react";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import ProfileUI from "./Profile.presenter";
import useLogout from "./hooks/useLogout";

export default function Profile({ isSSRLoggedIn, profileData }) {
  console.log("Profile isSSRLoggedIn: ", isSSRLoggedIn);

  const [profile, setProfile] = useState(profileData);
  const { navigateTo, navigateBack } = useNavigate();

  const paths = {
    edit: "/info/profile/edit",
    pw: "/info/profile/pw",
  };

  const { logout } = useLogout();

  return (
    <ProfileUI
      profile={profile}
      navigateTo={navigateTo}
      navigateBack={navigateBack}
      paths={paths}
      logout={logout}
    />
  );
}
