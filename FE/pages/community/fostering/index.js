import CommunityFostering from "../../../src/components/units/community/fostering/CommunityFostering.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function CommunityFosteringPage({ isSSRLoggedIn, profileURL }) {
  return (
    <>
      <CommunityFostering
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /community/fostering");
  const authResult = await checkAuth(context);
  console.log("authResult in /community/fostering:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
