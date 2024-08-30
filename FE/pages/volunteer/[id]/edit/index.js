import EditVolunteer from "../../../../src/components/units/volunteer/[id]/edit/Edit.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import { fetchVolunteerEditData } from "../../../../src/components/units/volunteer/[id]/edit/Edit.queries";
import { fetchVolunteerDetailWithAuth } from "../../../../src/components/units/volunteer/[id]/VolunteerDetail.quries";
import { fetchProfileData } from "../../../../src/components/units/info/profile/Profile.queries";
import { useUser } from "../../../../src/components/commons/hooks/useRoleContext";
import { useEffect } from "react";

export default function EditVolunteerPage({ isSSRLoggedIn, volunteerEditData, userRole }) {
  const { setUserRole } = useUser();

  useEffect(() => {
    setUserRole(userRole);
  }, [userRole, setUserRole]);

  return (
    <>
      <EditVolunteer isSSRLoggedIn={isSSRLoggedIn} volunteerEditData={volunteerEditData} userRole={userRole} />
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;

    if (!id) {
      throw new Error("Missing volunteerDetail ID");
    }

    console.log("getServerSideProps called for /info/profile/edit");
    const authResult = await checkAuth(context);
    console.log("authResult in /info/profile/edit:", authResult);

    const { isSSRLoggedIn, profileURL } = authResult.props;

    const accessToken = context.req.cookies.accessToken;

    let volunteerEditData = null;
    let userRole  = "visitor";

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching profile data`);
      volunteerEditData = await fetchVolunteerEditData(id, accessToken);
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
        profileURL,
        volunteerEditData,
        userRole
      },
    };
  } catch (error) {
    console.error(
      `Error fetching profile data in /info/profile/edit getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        volunteerEditData: null,
        error: "Failed to fetch profile data",
      },
    };
  }
}