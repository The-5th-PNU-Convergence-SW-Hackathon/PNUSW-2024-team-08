import VolunteerRecommend from "../../../src/components/units/volunteer/recommend/VolunteerRecommend.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";
import { fetchVolunteerWithAuth, fetchVolunteerWithoutAuth } from "../../../src/components/units/volunteer/Volunteer.quries";

export default function VolunteerRecommendPage({ isSSRLoggedIn, profileURL, recommendVolunteer }) {
  return (
    <>
      <VolunteerRecommend isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} recommendVolunteer={recommendVolunteer} />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /volunteer/recommends");
    const authResult = await checkAuth(context);
    console.log("getServerSideProps authResult for /volunteer/recommends:", authResult);
    const accessToken = context.req.cookies.accessToken;

    const { isSSRLoggedIn, profileURL } = authResult.props;

    let recommendVolunteer = null

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching volunteer data with auth`);
      const volunteerData = await fetchVolunteerWithAuth(accessToken);
      recommendVolunteer =volunteerData.recommendGroups
    } else {
      console.log(`Fetching volunteer data without auth`);
      const volunteerData = await fetchVolunteerWithoutAuth();
      recommendVolunteer = volunteerData.recommendGroups
    }

    return {
      props: {
        isSSRLoggedIn,
        recommendVolunteer,
        profileURL
      }
    };
  } catch (error) {
    console.log(`Error fetching volunteer data : ${error}`);

    return{
      props: {
        isSSRLoggedIn: false,
        recommendVolunteer: null,
        error: "Failed volunteer data"
      }
    }
  }
}
