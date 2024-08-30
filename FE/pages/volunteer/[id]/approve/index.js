import Approve from "../../../../src/components/units/volunteer/approve/Approve.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";

export default function ApprovePage({ isSSRLoggedIn, profileURL }) {
  return (
    <>
      <Approve isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
    </>
  )
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /adopt/pets:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;
  return {
    props: {
      isSSRLoggedIn,
      profileURL
    }
  };
}