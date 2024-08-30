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
  console.log("getServerSideProps called for /community/question/[id]/answer");
  const authResult = await checkAuth(context);
  console.log("authResult in /community/question/[id]/answer:", authResult);

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
