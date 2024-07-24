import VolunteerRecommend from "../../../src/components/units/volunteer/recommend/VolunteerRecommend.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function VolunteerRecommendPage({ isSSRLoggedIn }) {
  return (
    <>
      <VolunteerRecommend isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /adopt/pets:", authResult);
  return authResult;
}
