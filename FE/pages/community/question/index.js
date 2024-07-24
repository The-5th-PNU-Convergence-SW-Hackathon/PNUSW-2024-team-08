import CommunityQuestion from "../../../src/components/units/community/question/CommunityQuestion.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function CommunityQuestionPage({ isSSRLoggedIn }) {
  return (
    <>
      <CommunityQuestion isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /adopt/pets:", authResult);
  return authResult;
}
