import RegularMeetings from "../../../../src/components/units/volunteer/regular_meetings/Regular_Meetings.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import { fetchProfileData } from "../../../../src/components/units/info/profile/Profile.queries";
import { fetchVolunteerDetailWithAuth } from "../../../../src/components/units/volunteer/[id]/VolunteerDetail.quries";
import { useUser } from "../../../../src/components/commons/hooks/useRoleContext";
import { useEffect } from "react";

export default function RegularMeetingsPage({
  isSSRLoggedIn,
  volunteerDetailData,
  userRole
}) {
  const { setUserRole } = useUser();

  useEffect(() => {
    setUserRole(userRole);
  }, [userRole, setUserRole]);

  return (
    <>
      <RegularMeetings
        isSSRLoggedIn={isSSRLoggedIn}
        volunteerDetailData={volunteerDetailData}
        userRole={userRole}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /volunteer/[id]");
    const { id } = context.params;

    if (!id) {
      throw new Error("Missing volunteerDetail ID");
    }

    const authResult = await checkAuth(context);
    console.log("authResult in /volunteer/[id]:", authResult);
    const accessToken = context.req.cookies.accessToken;

    let volunteerDetailData = null;
    let userRole = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching volunteer detail with auth for id: ${id}`);
      volunteerDetailData = await fetchVolunteerDetailWithAuth(id, accessToken);
      const profileData = await fetchProfileData(accessToken);

      const user = volunteerDetailData.members.find(member => member.name === profileData.nickName);
      if (user) {
        userRole = user.role;
      }
    }

    return {
      props: {
        ...authResult.props,
        volunteerDetailData,
        userRole
      },
    };
  } catch (error) {
    console.error(
      `Error fetching volunteer details in volunteer/[id] getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        volunteerDetailData: null,
        error: "Failed fetch volunteer detail",
      },
    };
  }
}
