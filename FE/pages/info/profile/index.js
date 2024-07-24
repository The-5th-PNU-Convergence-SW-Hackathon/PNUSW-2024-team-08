import Profile from "../../../src/components/units/info/profile/Profile.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";
import { fetchProfileData } from "../../../src/components/units/info/profile/Profile.queries";

export default function ProfilePage({ isSSRLoggedIn, profileData }) {
  return <Profile isSSRLoggedIn={isSSRLoggedIn} profileData={profileData} />;
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /info/profile");

    const authResult = await checkAuth(context);
    console.log("authResult in /info/profile:", authResult);
    const accessToken = context.req.cookies.accessToken;
    let profileData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching profile data`);
      profileData = await fetchProfileData(accessToken);
    }

    return {
      props: {
        ...authResult.props,
        profileData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching profile data in /info/profile getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileData: null,
        error: "Failed to fetch profile data",
      },
    };
  }
}
