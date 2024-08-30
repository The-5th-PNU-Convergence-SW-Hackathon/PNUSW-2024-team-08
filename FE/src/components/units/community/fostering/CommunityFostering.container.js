import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import useFetchFosteringList from "./hooks/useFetchFosteringList";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import CommunityFosteringUI from "./CommunityFostering.presenter";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import { useSortSelection } from "../../../../../src/components/commons/hooks/useSortSelection";
import useSubIcons from "../../../../../src/components/commons/hooks/useSubIcons";
import { useFormatDateTime } from "../../../units/volunteer/hooks/useFormat";
import FloatingIconUI from "../floating_icon/FloatingIcon.presenter";
import useMenuToggle from "../../../../../src/components/commons/hooks/useMenuToggle";
import usePaginationScroll from "../../../../../src/components/commons/hooks/usePaginationScroll";

export default function CommunityFostering({ isSSRLoggedIn, profileURL }) {
  console.log("CommunityFostering isSSRLoggedIn: ", isSSRLoggedIn);

  const {
    fosterings,
    isLastPage,
    handleLoadFosterings,
    sort,
    setSort,
    loading,
  } = useFetchFosteringList();
  const { handleNewestClick, handlePopularityClick } = useSortSelection(
    sort,
    setSort,
    loading
  );
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadFosterings,
    isLastPage,
    [sort]
  );
  const { isMenuClicked, handleMenuClick, menuRefs } = useMenuToggle(1);
  const { isSubIconsVisible, handleMainIconClick } = useSubIcons();
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <CommunityHandler />
      <CommunityFosteringUI
        fosterings={fosterings}
        handleLoadFosterings={handleLoadFosterings}
        handleRequireModal={handleRequireModal}
        sort={sort}
        handleNewestClick={handleNewestClick}
        handlePopularityClick={handlePopularityClick}
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        menuRefs={menuRefs}
        useFormatDateTime={useFormatDateTime}
        truncateString={truncateString}
        navigateTo={navigateTo}
        scrollRef={scrollRef}
        scrollLoading={scrollLoading}
      />
      <Navigation handleRequireModal={handleRequireModal} />
      <FloatingIconUI
        type={"FOSTERING"}
        isSubIconsVisible={isSubIconsVisible}
        handleMainIconClick={handleMainIconClick}
        handleRequireModal={handleRequireModal}
      />
    </>
  );
}
