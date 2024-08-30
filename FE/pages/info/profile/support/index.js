import { checkAuth } from "../../../../src/components/commons/utils/auth";
import Support from "../../../../src/components/units/info/profile/support/Support.container";

export default function SupportPage() {
  return <Support />;
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
