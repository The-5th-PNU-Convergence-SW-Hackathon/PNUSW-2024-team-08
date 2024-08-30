import { useNavigate } from "../../../commons/hooks/useNavigate";
import ChattingDetailHandlerUI from "./ChattingDetailHandler.presenter";

export default function ChattingDetailHandler({ chatRoomId }) {
  const paths = {
    albums: `/chatting/${chatRoomId}/albums`,
    files: `/chatting/${chatRoomId}/files`,
    links: `/chatting/${chatRoomId}/links`,
  };

  const { navigateTo, isActive, navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailHandlerUI
        chatRoomId={chatRoomId}
        paths={paths}
        isActive={isActive}
        navigateTo={navigateTo}
        navigateBack={navigateBack}
      />
    </>
  );
}
