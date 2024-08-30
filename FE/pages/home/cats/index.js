import { checkAuth } from "../../../src/components/commons/utils/auth";
import Cats from "../../../src/components/units/home/cats/Cats.container";

export default function CatsPage({ isSSRLoggedIn, profileURL }) {
  return <Cats isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />;
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /home/cats");
  const authResult = await checkAuth(context);
  console.log("authResult in /home/cats:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
