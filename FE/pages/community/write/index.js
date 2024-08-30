import { checkAuth } from "../../../src/components/commons/utils/auth";
import CommunityWrite from "../../../src/components/units/community/write/CommunityWrite.container";

export default function CommunityWritePage({ isSSRLoggedIn }) {
  return (
    <>
      <CommunityWrite isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /community/write");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult:", authResult);
  const { isSSRLoggedIn, profileURL } = authResult.props;

  if (!isSSRLoggedIn) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
