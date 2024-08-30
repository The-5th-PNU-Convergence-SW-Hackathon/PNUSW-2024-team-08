import RegularMeeting from "../../../../../src/components/units/volunteer/regular_meetings/[meetingID]/Regular_Meeting.container";
import { checkAuth } from "../../../../../src/components/commons/utils/auth";
import { fetchRegularMeeting } from "../../../../../src/components/units/volunteer/regular_meetings/[meetingID]/Regular_Meeting.quries";
import { useUser } from "../../../../../src/components/commons/hooks/useRoleContext";
import { fetchProfileData } from "../../../../../src/components/units/info/profile/Profile.queries";
import { fetchVolunteerDetailWithAuth } from "../../../../../src/components/units/volunteer/[id]/VolunteerDetail.quries";
import { memo, useEffect } from "react";


export default function RegularMeetingPage({ isSSRLoggedIn, meetingData, profileURL, meetingID, userRole, match }) {
  const { setUserRole } = useUser();

  useEffect(() => {
    setUserRole(userRole);
  }, [userRole, setUserRole]);
  return (
    <>
      <RegularMeeting
        isSSRLoggedIn={isSSRLoggedIn}
        meetingData={meetingData}
        profileURL={profileURL}
        meetingID={meetingID}
        userRole={userRole}
        match={match}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { meetingID } = context.params;

  console.log("getServerSideProps called for /volunteer/[id]/notices/[noticeID]");
  const authResult = await checkAuth(context);
  console.log("authResult in /volunteer/[id]/notices/[noticeID]:", authResult);
  const accessToken = context.req.cookies.accessToken;

  const { isSSRLoggedIn, profileURL } = authResult.props;

  let meetingData = null;
  let userRole = null;
  let match = false;

  if (isSSRLoggedIn && accessToken) {
    console.log(`Fetching volunteer Notice detail id: `, meetingID, accessToken);
    meetingData = await fetchRegularMeeting(id, meetingID, accessToken);
    console.log(`Fetching profile data`);
    const profileData = await fetchProfileData(accessToken);
    const volunteerDetailData = await fetchVolunteerDetailWithAuth(id, accessToken);

    const user = volunteerDetailData.members.find(member => member.name === profileData.nickName);
    if (user) {
      userRole = user.role;
    }
    match = meetingData.participants.some(member => member.profileURL === profileURL);
  }

  return {
    props: {
      isSSRLoggedIn,
      meetingData,
      profileURL,
      meetingID,
      userRole,
      match
    },
  };
}