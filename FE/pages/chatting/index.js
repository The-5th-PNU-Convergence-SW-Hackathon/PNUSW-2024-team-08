import { checkAuth } from "../../src/components/commons/utils/auth";
import Chatting from "../../src/components/units/chatting/Chatting.container";

export default function ChattingPage({ isSSRLoggedIn }) {
  return (
    <>
      <Chatting isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /chatting");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /chatting:", authResult);
  return authResult;
}
