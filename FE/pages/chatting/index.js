import { fetchChatRooms } from "../../src/components/units/chatting/Chatting.queries";
import { checkAuth } from "../../src/components/commons/utils/auth";
import Chatting from "../../src/components/units/chatting/Chatting.container";

export default function ChattingPage({
  isSSRLoggedIn,
  profileURL,
  chatRoomsData,
}) {
  return (
    <>
      <Chatting
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        chatRoomsData={chatRoomsData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /chatting");
    const authResult = await checkAuth(context);
    console.log("authResult in /chatting:", authResult);
    const { isSSRLoggedIn, profileURL } = authResult.props;
    const accessToken = context.req.cookies.accessToken;
    let chatRoomsData = null;

    if (!isSSRLoggedIn) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else if (accessToken) {
      console.log(`Fetching chatRoomsData: `);
      chatRoomsData = await fetchChatRooms(accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        chatRoomsData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching chatRoomsData in /chatting getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        chatRoomsData: null,
      },
    };
  }
}
