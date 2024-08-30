import usePaginationScroll from "../../../../../../src/components/commons/hooks/usePaginationScroll";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailHandler from "../ChattingDetailHandler.container";
import AlbumsUI from "./Albums.presenter";
import useFetchChatImagesData from "./hooks/useFetchChatImagesData";

export default function Albums({
  isSSRLoggedIn,
  profileURL,
  chatRoomId,
  chatImagesData,
}) {
  console.log("chatImagesData: ", chatImagesData);
  const {
    chatImages,
    loadedImages,
    handleImageLoad,
    loadChatImagesData,
    handleLoadImagesData,
    isLastPage,
  } = useFetchChatImagesData(chatRoomId, chatImagesData);
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadImagesData,
    isLastPage
  );
  const { navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailHandler chatRoomId={chatRoomId} />
      <AlbumsUI
        chatRoomId={chatRoomId}
        chatImages={chatImages}
        loadedImages={loadedImages}
        handleImageLoad={handleImageLoad}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
        navigateBack={navigateBack}
      />
      ;
    </>
  );
}
