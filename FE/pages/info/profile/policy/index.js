import Policy from "../../../../src/components/units/info/profile/policy/Policy.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";

export default function PolicyPage() {
  return <Policy />;
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
