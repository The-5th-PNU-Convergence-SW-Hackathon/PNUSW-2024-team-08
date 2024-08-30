import { checkAuth } from "../../../src/components/commons/utils/auth";
import Alarm from "../../../src/components/units/info/alarm/Alarm.container";

export default function AlarmPage() {
  return <Alarm />;
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
