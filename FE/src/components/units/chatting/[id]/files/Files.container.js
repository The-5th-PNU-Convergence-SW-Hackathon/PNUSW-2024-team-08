import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailHandler from "../ChattingDetailHandler.container";
import FilesUI from "./Files.presenter";

export default function Files({
  isSSRLoggedIn,
  profileURL,
  chatRoomId,
  chatRoomImagesData,
}) {
  console.log("chatRoomImagesData: ", chatRoomImagesData);
  const { navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailHandler chatRoomId={chatRoomId} />
      <FilesUI chatRoomId={chatRoomId} navigateBack={navigateBack} />;
    </>
  );
}
