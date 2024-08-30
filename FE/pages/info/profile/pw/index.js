import { checkAuth } from "../../../../src/components/commons/utils/auth";
import PasswordEdit from "../../../../src/components/units/info/profile/pw/PasswordEdit.container";

export default function PassordEditPage() {
  return <PasswordEdit />;
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /info/profile/pw");
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
