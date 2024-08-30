import { checkAuth } from "../../../src/components/commons/utils/auth";
import Faq from "../../../src/components/units/home/faq/Faq.container";

export default function FaqPage({ isSSRLoggedIn, profileURL }) {
  return <Faq isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />;
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /home/faq");
  const authResult = await checkAuth(context);
  console.log("authResult in /home/faq:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
