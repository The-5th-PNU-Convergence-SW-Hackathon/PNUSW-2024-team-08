import { fetchChatImages } from "../../../../src/components/units/chatting/[id]/albums/Albums.queries";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import Albums from "../../../../src/components/units/chatting/[id]/albums/Albums.container";

export default function AlbumsPage({
  isSSRLoggedIn,
  profileURL,
  chatRoomId,
  chatImagesData,
}) {
  return (
    <>
      <Albums
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        chatRoomId={chatRoomId}
        chatImagesData={chatImagesData}
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

    let chatImagesData = null;
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
      chatImagesData = await fetchChatImages(id, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        chatRoomId,
        chatImagesData,
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
        chatImagesData: null,
      },
    };
  }
}
