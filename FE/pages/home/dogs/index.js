import { checkAuth } from "../../../src/components/commons/utils/auth";
import Dogs from "../../../src/components/units/home/dogs/Dogs.container";

export default function DogsPage({ isSSRLoggedIn, profileURL }) {
  return <Dogs isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />;
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /home/dogs");
  const authResult = await checkAuth(context);
  console.log("authResult in /home/dogs:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
