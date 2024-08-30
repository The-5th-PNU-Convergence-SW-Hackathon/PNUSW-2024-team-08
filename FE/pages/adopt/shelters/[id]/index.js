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
  console.log("getServerSideProps called for /adopt/shelters/[id]");
  const authResult = await checkAuth(context);
  console.log("authResult in /adopt/shelters/[id]:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
