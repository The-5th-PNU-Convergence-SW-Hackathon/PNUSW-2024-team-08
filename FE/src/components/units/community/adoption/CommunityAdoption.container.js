import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityAdoptionUI from "./CommunityAdoption.presenter";
import useFetchAdoptionList from "./hooks/useFetchAdoptionList";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import { useSortSelection } from "../../../../../src/components/commons/hooks/useSortSelection";
import useSubIcons from "../../../../../src/components/commons/hooks/useSubIcons";
import { useFormatDateTime } from "../../../units/volunteer/hooks/useFormat";
import FloatingIconUI from "../floating_icon/FloatingIcon.presenter";
import useMenuToggle from "../../../../../src/components/commons/hooks/useMenuToggle";
import usePaginationScroll from "../../../../../src/components/commons/hooks/usePaginationScroll";

export default function CommunityAdoption({ isSSRLoggedIn, profileURL }) {
  // console.log("CommunityAdoption isSSRLoggedIn: ", isSSRLoggedIn);

  const { adoptions, isLastPage, handleLoadAdoptions, sort, setSort, loading } =
    useFetchAdoptionList();
  const { scrollRef, scrollLoading } = usePaginationScroll(
    handleLoadAdoptions,
    isLastPage,
    [sort]
  );
  const { handleNewestClick, handlePopularityClick } = useSortSelection(
    sort,
    setSort,
    loading
  );
  const { isMenuClicked, handleMenuClick, menuRefs } = useMenuToggle(1);
  const { isSubIconsVisible, handleMainIconClick } = useSubIcons();
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);
  // console.log("adoptions: ", adoptions);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <CommunityHandler />
      <CommunityAdoptionUI
        adoptions={adoptions}
        loading={loading}
        handleLoadAdoptions={handleLoadAdoptions}
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
        type={"ADOPTION"}
        isSubIconsVisible={isSubIconsVisible}
        handleMainIconClick={handleMainIconClick}
        handleRequireModal={handleRequireModal}
      />
    </>
  );
}
