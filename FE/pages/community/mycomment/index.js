import { checkAuth } from "../../../src/components/commons/utils/auth";
import MyComment from "../../../src/components/units/community/mycontent/mycomment/MyComment.container";
import { fetchMyCommunity } from "../../../src/components/units/community/mycontent/MyCommunityHandler.queries";

export default function MyCommentPage({
  isSSRLoggedIn,
  profileURL,
  myCommunityData,
}) {
  return (
    <>
      <MyComment
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        myCommunityData={myCommunityData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /community/adopt");
    const authResult = await checkAuth(context);
    console.log("authResult in /community/adopt:", authResult);
    const { isSSRLoggedIn, profileURL } = authResult.props;
    const accessToken = context.req.cookies.accessToken;

    let myCommunityData = null;

    if (!isSSRLoggedIn) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else if (accessToken) {
      console.log(`Fetching my community`);
      myCommunityData = await fetchMyCommunity(accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        myCommunityData,
      },
    };
  } catch (error) {
    console.error(
      "Error fetching profile data in /community/adopt getServerSideProps"
    );

    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        myCommunityData: null,
      },
    };
  }
}
