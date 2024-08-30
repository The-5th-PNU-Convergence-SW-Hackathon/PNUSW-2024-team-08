import CommunityQuestion from "../../../src/components/units/community/question/CommunityQuestion.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function CommunityQuestionPage({ isSSRLoggedIn, profileURL }) {
  return (
    <>
      <CommunityQuestion
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /community/question");
  const authResult = await checkAuth(context);
  console.log("authResult in /community/question:", authResult);
  const { isSSRLoggedIn, profileURL } = authResult.props;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
    },
  };
}
