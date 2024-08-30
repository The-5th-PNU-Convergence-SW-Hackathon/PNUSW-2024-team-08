import { checkAuth } from "../../src/components/commons/utils/auth";
import Login from "../../src/components/units/login/Login.container";

export default function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  if (isSSRLoggedIn) {
    return {
      redirect: {
        destination: "/home",
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
