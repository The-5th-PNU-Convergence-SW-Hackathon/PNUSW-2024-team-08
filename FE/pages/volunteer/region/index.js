import VolunteerRegion from "../../../src/components/units/volunteer/region/VolunteerRegion.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";
import { fetchProfileData } from "../../../src/components/units/info/profile/Profile.queries";

export default function VolunteerRegionPage({ isSSRLoggedIn, profileURL, profileData }) {
  return (
    <>
      <VolunteerRegion
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        profileData={profileData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /info/profile/edit");
    const authResult = await checkAuth(context);
    console.log("authResult in /info/profile/edit:", authResult);
    const accessToken = context.req.cookies.accessToken;

    const { isSSRLoggedIn, profileURL } = authResult.props;

    let profileData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching profile data & volunteer data`);
      profileData = await fetchProfileData(accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        profileData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching profile data in /volunteer/region getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileData: null,
        error: "Failed fetch volunteer",
      },
    };
  }
};