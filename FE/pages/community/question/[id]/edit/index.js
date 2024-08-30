import { checkAuth } from "../../../../../src/components/commons/utils/auth";
import { fetchQuestionDetail } from "../../../../../src/components/units/community/question/[id]/QuestionDetail.queries";
import QuestionEdit from "../../../../../src/components/units/community/question/[id]/edit/QuestionEdit.container";

export default function QuestionAnswerPage({
  isSSRLoggedIn,
  profileURL,
  questionDetailData,
}) {
  return (
    <>
      <QuestionEdit
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        questionDetailData={questionDetailData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /community/question/[id]/edit");
    const { id } = context.params;

    if (!id) {
      throw new Error("Missing question ID");
    }

    const authResult = await checkAuth(context);
    console.log("authResult in /community/question/[id]/edit:", authResult);

    const { isSSRLoggedIn, profileURL } = authResult.props;

    const accessToken = context.req.cookies.accessToken;

    let questionDetailData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching question edit for id: ${id}`);
      questionDetailData = await fetchQuestionDetail(id, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        questionDetailData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching question edit in /community/question/[id]/edit getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        questionDetailData: null,
      },
    };
  }
}
