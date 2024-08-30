import VolunteerDetail from "../../../src/components/units/volunteer/[id]/VolunteerDetail.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";
import {
  fetchVolunteerDetailWithAuth,
  fetchVolunteerDetailWithoutAuth
} from "../../../src/components/units/volunteer/[id]/VolunteerDetail.quries";
import { useUser } from "../../../src/components/commons/hooks/useRoleContext";
import { fetchProfileData } from "../../../src/components/units/info/profile/Profile.queries";
import { useEffect } from "react";

export default function VolunteerDetailPage({ isSSRLoggedIn, volunteerDetailData, profileURL, userRole }) {
  const { setUserRole } = useUser();

  useEffect(() => {
    setUserRole(userRole);
  }, [userRole, setUserRole]);

  return (
    <>
      <VolunteerDetail
        isSSRLoggedIn={isSSRLoggedIn}
        volunteerDetailData={volunteerDetailData}
        profileURL={profileURL}
        userRole={userRole}
      />
    </>
  )
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

    const { isSSRLoggedIn, profileURL } = authResult.props;

    let volunteerDetailData = null;
    let userRole = 'visitor';

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching volunteer detail with auth for id: ${id}`);
      volunteerDetailData = await fetchVolunteerDetailWithAuth(id, accessToken);
      const profileData = await fetchProfileData(accessToken);

      const user = volunteerDetailData.members.find(member => member.name === profileData.nickName);
      if (user) {
        userRole = user.role;
      }
    } else {
      console.log(`Fetching volunteer detail without auth for id: ${id}`);
      volunteerDetailData = await fetchVolunteerDetailWithoutAuth(id);
    }

    return {
      props: {
        isSSRLoggedIn,
        volunteerDetailData,
        profileURL,
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
        userRole: "visitor",
        error: "Failed fetch volunteer detail",
      }
    };
  }
}