import Notices from "../../../../src/components/units/volunteer/notices/Notices.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import { useUser } from "../../../../src/components/commons/hooks/useRoleContext";
import { fetchVolunteerDetailWithAuth } from "../../../../src/components/units/volunteer/[id]/VolunteerDetail.quries";
import { fetchProfileData } from "../../../../src/components/units/info/profile/Profile.queries";
import { useEffect } from "react";

export default function NoticesPage({isSSRLoggedIn, userRole}) {
  const { setUserRole } = useUser();

  useEffect(() => {
    setUserRole(userRole);
  }, [userRole, setUserRole]);

  return (
    <>
      <Notices
        isSSRLoggedIn={isSSRLoggedIn}
        userRole={userRole}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  console.log("getServerSideProps called for /volunteer/[id]/notices");
  const authResult = await checkAuth(context);
  console.log("authResult in /volunteer/[id]/notices:", authResult);
  const accessToken = context.req.cookies.accessToken;

  const { isSSRLoggedIn } = authResult.props;

  let userRole = null;

  if(isSSRLoggedIn && accessToken) {
    const profileData = await fetchProfileData(accessToken);
    const volunteerDetailData = await fetchVolunteerDetailWithAuth(id, accessToken);

    const user = volunteerDetailData.members.find(member => member.name === profileData.nickName);
      if (user) {
        userRole = user.role;
      }
  }

  return {
    props: {
      isSSRLoggedIn,
      userRole
    },
  };
}
