import { checkAuth } from "../../../../src/components/commons/utils/auth";
import License from "../../../../src/components/units/info/profile/license/License.container";

export default function LicensePage() {
  return <License />;
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /info/alarm");
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
