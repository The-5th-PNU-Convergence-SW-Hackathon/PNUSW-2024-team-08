import CommunityEdit from "../../../../src/components/units/community/[id]/edit/CommunityEdit.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import { fetchCommunityDetail } from "../../../../src/components/units/community/[id]/CommunityDetail.queries";

export default function CommunityEditPage({
  isSSRLoggedIn,
  profileURL,
  communityDetailData,
}) {
  return (
    <>
      <CommunityEdit
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        communityDetailData={communityDetailData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /community/[id]/edit");
    const { id } = context.params;

    if (!id) {
      throw new Error("Missing question ID");
    }

    const authResult = await checkAuth(context);
    console.log("authResult in /community/[id]/edit:", authResult);

    const { isSSRLoggedIn, profileURL } = authResult.props;

    const accessToken = context.req.cookies.accessToken;

    let communityDetailData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching community edit for id: ${id}`);
      communityDetailData = await fetchCommunityDetail(id, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        communityDetailData,
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
        communityDetailData: null,
      },
    };
  }
}
