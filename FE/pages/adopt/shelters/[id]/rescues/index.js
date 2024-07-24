import AdpotShelterRescues from "../../../../../src/components/units/adopt/shelters/[id]/rescues/AdoptShelterRescues.container";
import { checkAuth } from "../../../../../src/components/commons/utils/auth";

export default function AdpotShelterRescuesPage({ isSSRLoggedIn }) {
  return (
    <>
      <AdpotShelterRescues isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult:", authResult);
  return authResult;
}
