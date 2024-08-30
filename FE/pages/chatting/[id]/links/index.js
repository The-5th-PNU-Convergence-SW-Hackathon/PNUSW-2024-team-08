import { fetchChatLinks } from "../../../../src/components/units/chatting/[id]/links/Links.queries";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import Links from "../../../../src/components/units/chatting/[id]/links/Links.container";

export default function LinksPage({
  isSSRLoggedIn,
  profileURL,
  chatRoomId,
  chatLinksData,
}) {
  return (
    <>
      <Links
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        chatRoomId={chatRoomId}
        chatLinksData={chatLinksData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /chatting/[id]");
    const { id } = context.query;
    console.log("id:", id);
    const authResult = await checkAuth(context);
    console.log("authResult in /chatting:", authResult);
    const { isSSRLoggedIn, profileURL } = authResult.props;
    const accessToken = context.req.cookies.accessToken;

    console.log("getServerSideProps: accessToken from cookies:", accessToken);

    let chatLinksData = null;
    let chatRoomId = id;

    if (!id) {
      console.log("getServerSideProps: Missing chatRoom ID");
      throw new Error("Missing chatRoom ID");
    }

    if (!isSSRLoggedIn) {
      console.log("getServerSideProps: Not logged in, redirecting to /login");
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else if (accessToken) {
      console.log(
        `getServerSideProps: Fetching chatting images with accessToken: ${accessToken}`
      );
      chatLinksData = await fetchChatLinks(id, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        chatRoomId,
        chatLinksData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching chatting message list in /chatting/[id] getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        chatRoomId: null,
        chatLinksData: null,
      },
    };
  }
}
