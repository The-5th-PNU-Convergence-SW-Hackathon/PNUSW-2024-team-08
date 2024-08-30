import { useTruncateString } from "../../../../../../src/components/commons/hooks/useTruncateString";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import ChattingDetailHandler from "../ChattingDetailHandler.container";
import LinksUI from "./Links.presenter";
import useFetchChatLinksData from "./hooks/useFetchChatLinksData";
import usePaginationScroll from "../../../../../../src/components/commons/hooks/usePaginationScroll";

export default function Links({
  isSSRLoggedIn,
  profileURL,
  chatRoomId,
  chatLinksData,
}) {
  console.log("chatLinksData: ", chatLinksData);
  const {
    chatLinks,
    loadedImages,
    handleImageLoad,
    loadChatLinksData,
    handleLoadLinksData,
    isLastPage,
    loading,
    getMainDomain,
  } = useFetchChatLinksData(chatRoomId, chatLinksData);
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadLinksData,
    isLastPage
  );
  const { truncateString } = useTruncateString();
  const { navigateBack } = useNavigate();

  return (
    <>
      <ChattingDetailHandler chatRoomId={chatRoomId} />
      <LinksUI
        chatRoomId={chatRoomId}
        chatLinks={chatLinks}
        loadedImages={loadedImages}
        handleImageLoad={handleImageLoad}
        truncateString={truncateString}
        getMainDomain={getMainDomain}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
        navigateBack={navigateBack}
      />
      ;
    </>
  );
}
