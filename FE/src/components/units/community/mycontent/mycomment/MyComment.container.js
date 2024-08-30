import Navigation from "../../../../../../src/components/commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import MyCommunityHandler from "../MyCommunityHandler.container";
import MyCommentUI from "./MyComment.presenter";
import { useTruncateString } from "../../../../../../src/components/commons/hooks/useTruncateString";
import useRequireLogin from "../../../../../../src/components/commons/hooks/useRequireLogin";
import { useFormatDateTime } from "../../../../units/volunteer/hooks/useFormat";
import useFetchMyComment from "./hooks/useFetchMyComment";
import usePaginationScroll from "../../../../../../src/components/commons/hooks/usePaginationScroll";

export default function MyComment({
  isSSRLoggedIn,
  profileURL,
  myCommunityData,
}) {
  const { myComment, isLastPage, handleLoadMyComment } = useFetchMyComment();
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadMyComment,
    isLastPage
  );
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();

  const handleCommentClick = (postType, postId) => {
    if (postType === "입양 스토리")
      navigateTo(`/community/${postId}?type=adoption`)();
    else navigateTo(`/community/${postId}?type=fostering`)();
  };

  return (
    <>
      <MyCommunityHandler
        profileURL={profileURL}
        myCommunityData={myCommunityData}
      />
      <MyCommentUI
        myComment={myComment}
        truncateString={truncateString}
        useFormatDateTime={useFormatDateTime}
        handleRequireModal={handleRequireModal}
        handleCommentClick={handleCommentClick}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
