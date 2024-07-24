import AdpotShelters from "../../../src/components/units/adopt/shelters/AdoptShelters.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function AdpotSheltersPage({ isSSRLoggedIn }) {
  return (
    <>
      <AdpotShelters isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult:", authResult);
  return authResult;
}
