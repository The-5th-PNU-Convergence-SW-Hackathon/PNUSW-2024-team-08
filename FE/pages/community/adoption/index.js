import CommunityAdoption from "../../../src/components/units/community/adoption/CommunityAdoption.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function CommunityAdoptionPage({ isSSRLoggedIn }) {
  return (
    <>
      <CommunityAdoption isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /adopt/pets:", authResult);
  return authResult;
}
