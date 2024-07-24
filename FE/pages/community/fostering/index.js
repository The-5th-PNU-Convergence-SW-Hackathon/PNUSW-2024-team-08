import CommunityFostering from "../../../src/components/units/community/fostering/CommunityFostering.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function CommunityFosteringPage({ isSSRLoggedIn }) {
  return (
    <>
      <CommunityFostering isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /adopt/pets:", authResult);
  return authResult;
}
