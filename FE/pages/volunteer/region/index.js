import VolunteerRegion from "../../../src/components/units/volunteer/region/VolunteerRegion.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function VolunteerRegionPage({ isSSRLoggedIn }) {
  return (
    <>
      <VolunteerRegion isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /adopt/pets:", authResult);
  return authResult;
}