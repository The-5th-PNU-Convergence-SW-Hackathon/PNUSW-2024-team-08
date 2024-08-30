import VolunteerJoined from "../../../src/components/units/volunteer/joined/VolunteerJoined.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";
import { fetchVolunteerWithAuth } from "../../../src/components/units/volunteer/Volunteer.quries";

export default function VolunteerJoinedPage({ isSSRLoggedIn, profileURL, joinVolunteerData }) {
  return (
    <>
      <VolunteerJoined isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} joinVolunteerData={joinVolunteerData} />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /adopt/pets");
    const authResult = await checkAuth(context);
    console.log("getServerSideProps authResult for /adopt/pets:", authResult);
    const accessToken = context.req.cookies.accessToken;

    const { isSSRLoggedIn, profileURL } = authResult.props;

    let joinVolunteerData = null

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching volunteer data with auth`);
      const volunteerData = await fetchVolunteerWithAuth(accessToken);
      joinVolunteerData = volunteerData.myGroups;
    }
    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        joinVolunteerData
      }
    };
  } catch (error) {
    console.log(`Error fetching volunteer data : ${error}`);

    return{
      props: {
        isSSRLoggedIn: false,
        joinVolunteerData: null,
        error: "Failed volunteer data"
      }
    }
  }
}
