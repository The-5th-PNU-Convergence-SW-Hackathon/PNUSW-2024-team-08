import Navigation from "../../../../../../src/components/commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import MyPostUI from "./MyPost.presenter";
import MyCommunityHandler from "../MyCommunityHandler.container";
import useFetchMyPost from "./hooks/useFetchMyPost";
import { useFormatDateTime } from "../../../../units/volunteer/hooks/useFormat";
import useRequireLogin from "../../../../../../src/components/commons/hooks/useRequireLogin";
import { useTruncateString } from "../../../../../../src/components/commons/hooks/useTruncateString";
import usePaginationScroll from "../../../../../../src/components/commons/hooks/usePaginationScroll";

export default function MyPost({ isSSRLoggedIn, profileURL, myCommunityData }) {
  const { myPost, isLastPage, handleLoadMyPost } = useFetchMyPost();
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadMyPost,
    isLastPage
  );
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();

  return (
    <>
      <MyCommunityHandler
        profileURL={profileURL}
        myCommunityData={myCommunityData}
      />
      <MyPostUI
        myPost={myPost}
        truncateString={truncateString}
        useFormatDateTime={useFormatDateTime}
        handleRequireModal={handleRequireModal}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
