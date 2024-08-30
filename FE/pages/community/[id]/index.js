import { fetchCommunityDetail } from "../../../src/components/units/community/[id]/CommunityDetail.queries";
import CommunityDetail from "../../../src/components/units/community/[id]/CommunityDetail.container";
import { fetchProfileData } from "../../../src/components/units/info/profile/Profile.queries";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function CommunityDetailPage({
  isSSRLoggedIn,
  profileURL,
  communityDetailData,
  profileData,
  communityId,
}) {
  return (
    <>
      <CommunityDetail
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        communityDetailData={communityDetailData}
        profileData={profileData}
        communityId={communityId}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /adopt/[id]");
    const { id } = context.params;

    if (!id) {
      throw new Error("Missing pet ID");
    }

    const authResult = await checkAuth(context);
    console.log("authResult in /adopt/[id]:", authResult);
    const accessToken = context.req.cookies.accessToken;
    const { isSSRLoggedIn, profileURL } = authResult.props;
    const communityId = id;

    let communityDetailData = null;
    let profileData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching adoption id: `, communityId, accessToken);
      communityDetailData = await fetchCommunityDetail(
        communityId,
        accessToken
      );
      console.log(`Fetching profile data`);
      profileData = await fetchProfileData(accessToken);
    }

    console.log("communityDetailData: ", communityDetailData);

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        communityDetailData,
        profileData,
        communityId,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching pet details in adopt/[id] getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        communityDetailData: null,
        profileData: null,
        communityId: null,
      },
    };
  }
}
