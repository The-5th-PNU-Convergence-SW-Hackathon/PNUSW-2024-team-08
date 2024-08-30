import { useState } from "react";
import Headers from "../../commons/headers/Headers.container";
import useRequireLogin from "../../commons/hooks/useRequireLogin";
import { useTruncateString } from "../../commons/hooks/useTruncateString";
import Navigation from "../../commons/navigation/Navigation.container";
import ChattingUI from "./Chatting.presenter";
import { useRouter } from "next/router";
import { useNavigate } from "../../commons/hooks/useNavigate";
import { useFormatDateTime } from "../../units/volunteer/hooks/useFormat";
import Cookies from "js-cookie";

export default function Chatting({ isSSRLoggedIn, profileURL, chatRoomsData }) {
  console.log("Chatting isSSRLoggedIn: ", isSSRLoggedIn);

  console.log("chatRoomsData: ", chatRoomsData);
  const accessToken = Cookies.get("accessToken");
  console.log("accessToken: ", accessToken);

  const router = useRouter();
  const [chatRooms, setChatRooms] = useState(chatRoomsData);

  const { navigateTo } = useNavigate();
  const { truncateString } = useTruncateString();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <ChattingUI
        chatRooms={chatRooms}
        useFormatDateTime={useFormatDateTime}
        truncateString={truncateString}
        navigateTo={navigateTo}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
