import QuestionAnswer from "../../../../../src/components/units/community/question/[id]/answer/QuestionAnswer.container";
import { checkAuth } from "../../../../../src/components/commons/utils/auth";

export default function QuestionAnswerPage({ isSSRLoggedIn }) {
  return (
    <>
      <QuestionAnswer isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /adopt/pets:", authResult);
  return authResult;
}
