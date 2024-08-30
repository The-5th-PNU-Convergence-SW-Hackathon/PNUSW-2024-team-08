import AdpotShelters from "../../../src/components/units/adopt/shelters/AdoptShelters.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function AdpotSheltersPage({ isSSRLoggedIn, profileURL }) {
  return (
    <>
      <AdpotShelters isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/shelters");
  const authResult = await checkAuth(context);
  console.log("authResult in /adopt/shelters:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
