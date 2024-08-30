import {
  fetchChatMsgList,
  fetchChatRoomDrawer,
} from "../../../src/components/units/chatting/[id]/ChattingDetail.queries";
import { checkAuth } from "../../../src/components/commons/utils/auth";
import ChattingDetail from "../../../src/components/units/chatting/[id]/ChattingDetail.container";

export default function ChattingDetailPage({
  isSSRLoggedIn,
  profileURL,
  chatRoomId,
  chatMsgListData,
  chatRoomDrawerData,
}) {
  return (
    <>
      <ChattingDetail
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        chatRoomId={chatRoomId}
        chatMsgListData={chatMsgListData}
        chatRoomDrawerData={chatRoomDrawerData}
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

    let chatMsgListData = null;
    let chatRoomDrawerData = null;
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
        `getServerSideProps: Fetching chatting message list with accessToken: ${accessToken}`
      );
      chatMsgListData = await fetchChatMsgList(id, accessToken);
      console.log(chatMsgListData);

      console.log(
        `getServerSideProps: Fetching chatting drawer with accessToken: ${accessToken}`
      );
      chatRoomDrawerData = await fetchChatRoomDrawer(id, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        chatRoomId,
        chatMsgListData,
        chatRoomDrawerData,
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
        chatMsgListData: null,
        chatRoomDrawerData: null,
      },
    };
  }
}
