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
  console.log("getServerSideProps called for /adopt/shelters/[id]/rescues");
  const authResult = await checkAuth(context);
  console.log("authResult in /adopt/shelters/[id]/rescues:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
