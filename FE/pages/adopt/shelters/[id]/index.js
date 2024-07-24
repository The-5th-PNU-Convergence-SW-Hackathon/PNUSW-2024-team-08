import AdpotShelterDetail from "../../../../src/components/units/adopt/shelters/[id]/AdoptShelterDetail.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";

export default function AdpotShelterDetailPage({ isSSRLoggedIn }) {
  return (
    <>
      <AdpotShelterDetail isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult:", authResult);
  return authResult;
}
