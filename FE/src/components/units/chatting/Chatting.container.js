import Headers from "../../commons/headers/Headers.container";
import { useNavigate } from "../../commons/hooks/useNavigate";
import useRequireLogin from "../../commons/hooks/useRequireLogin";
import { useTruncateString } from "../../commons/hooks/useTruncateString";
import Navigation from "../../commons/navigation/Navigation.container";
import ChattingUI from "./Chatting.presenter";
import useFetchChatRoomList from "./hook/useFetchChatRoomList";

export default function Chatting({ isSSRLoggedIn }) {
  console.log("Chatting isSSRLoggedIn: ", isSSRLoggedIn);

  const { chatRoomList } = useFetchChatRoomList();
  const { navigateTo } = useNavigate();
  const { truncateString } = useTruncateString();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <ChattingUI
        chatRoomList={chatRoomList}
        truncateString={truncateString}
        navigateTo={navigateTo}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
