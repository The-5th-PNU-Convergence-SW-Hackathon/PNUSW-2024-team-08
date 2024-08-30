import AnswerEdit from "../../../../../../src/components/units/community/question/[id]/answer/edit/AnswerEdit.container";
import { checkAuth } from "../../../../../../src/components/commons/utils/auth";
import { fetchAnswerDetail } from "../../../../../../src/components/units/community/question/[id]/answer/edit/AnswerEdit.queries";

export default function AnswerEditPage({
  isSSRLoggedIn,
  profileURL,
  answerDetailData,
}) {
  return (
    <>
      <AnswerEdit
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        answerDetailData={answerDetailData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log(
      "getServerSideProps called for /community/question/[id]/answer/edit"
    );
    const { answer_id } = context.query;
    console.log("answer_id:", answer_id);

    if (!answer_id) {
      throw new Error("Missing question ID");
    }

    const authResult = await checkAuth(context);
    console.log(
      "authResult in /community/question/[id]/answer/edit:",
      authResult
    );
    const { isSSRLoggedIn, profileURL } = authResult.props;

    if (!isSSRLoggedIn) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const accessToken = context.req.cookies.accessToken;

    let answerDetailData = null;

    if (isSSRLoggedIn && accessToken) {
      console.log(`Fetching answer edit for id: ${answer_id}`);
      answerDetailData = await fetchAnswerDetail(answer_id, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        answerDetailData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching question edit in /community/question/[id]/answer/edit getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        answerDetailData: null,
      },
    };
  }
}
