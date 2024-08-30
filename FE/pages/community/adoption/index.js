import CommunityAdoption from "../../../src/components/units/community/adoption/CommunityAdoption.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function CommunityAdoptionPage({ isSSRLoggedIn, profileURL }) {
  return (
    <>
      <CommunityAdoption
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /community/adopt");
  const authResult = await checkAuth(context);
  console.log("authResult in /community/adopt:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
