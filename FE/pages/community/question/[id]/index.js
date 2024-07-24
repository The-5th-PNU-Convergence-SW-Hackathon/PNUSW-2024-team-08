import QuestionDetail from "../../../../src/components/units/community/question/[id]/QuestionDetail.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import { fetchQuestionDetail } from "../../../../src/components/units/community/question/[id]/QuestionDetail.queries";

export default function QuestionDetailPage({
  isSSRLoggedIn,
  questionDetailData,
}) {
  return (
    <>
      <QuestionDetail
        isSSRLoggedIn={isSSRLoggedIn}
        questionDetailData={questionDetailData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /community/question/[id]");
    const { id } = context.params;

    if (!id) {
      throw new Error("Missing question ID");
    }

    const authResult = await checkAuth(context);
    console.log("authResult in /community/question/[id]:", authResult);
    const accessToken = context.req.cookies.accessToken;
    let questionDetailData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching question detail for id: ${id}`);
      questionDetailData = await fetchQuestionDetail(id, accessToken);
    }
    return {
      props: {
        ...authResult.props,
        questionDetailData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching question detail in /community/question/[id] getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        questionDetailData: null,
        error: "Failed to fetch question detail",
      },
    };
  }
}
