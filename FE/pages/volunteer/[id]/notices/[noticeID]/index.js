import Notice from "../../../../../src/components/units/volunteer/notices/[noticeID]/Notice.container";
import { checkAuth } from "../../../../../src/components/commons/utils/auth";
import { fetchNotice } from "../../../../../src/components/units/volunteer/notices/[noticeID]/Notice.quries";
import { fetchProfileData } from "../../../../../src/components/units/info/profile/Profile.queries";
import { fetchVolunteerDetailWithAuth } from "../../../../../src/components/units/volunteer/[id]/VolunteerDetail.quries";
import { useUser } from "../../../../../src/components/commons/hooks/useRoleContext";
import { useEffect } from "react";

export default function NoticePage({
  isSSRLoggedIn,
  noticeData,
  profileData,
  noticeID,
  userRole,
}) {
  const { setUserRole } = useUser();

  useEffect(() => {
    setUserRole(userRole);
  }, [userRole, setUserRole]);

  return (
    <>
      <Notice
        isSSRLoggedIn={isSSRLoggedIn}
        noticeData={noticeData}
        profileData={profileData}
        noticeID={noticeID}
        userRole={userRole}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { noticeID } = context.params;

  console.log(
    "getServerSideProps called for /volunteer/[id]/notices/[noticeID]"
  );
  const authResult = await checkAuth(context);
  console.log("authResult in /volunteer/[id]/notices/[noticeID]:", authResult);
  const accessToken = context.req.cookies.accessToken;

  const { isSSRLoggedIn } = authResult.props;

  let noticeData = null;
  let profileData = null;
  let userRole = null;

  if (isSSRLoggedIn && accessToken) {
    console.log(`Fetching volunteer Notice detail id: `, noticeID, accessToken);
    noticeData = await fetchNotice(noticeID, accessToken);
    console.log(`Fetching profile data`);
    profileData = await fetchProfileData(accessToken);
    const volunteerDetailData = await fetchVolunteerDetailWithAuth(
      id,
      accessToken
    );

    const user = volunteerDetailData.members.find(
      (member) => member.name === profileData.nickName
    );
    if (user) {
      userRole = user.role;
    }
  }

  return {
    props: {
      isSSRLoggedIn,
      noticeData,
      profileData,
      noticeID,
      userRole,
    },
  };
}
