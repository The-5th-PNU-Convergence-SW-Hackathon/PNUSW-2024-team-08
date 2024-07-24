import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import useFetchFosteringList from "./hooks/useFetchFosteringList";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import CommunityFosteringUI from "./CommunityFostering.presenter";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import { useSortSelection } from "../../../../../src/components/commons/hooks/useSortSelection";

export default function CommunityFostering({ isSSRLoggedIn }) {
  const { fosterings, handleLoadFosterings, sort, setSort } =
    useFetchFosteringList();
  const { handleNewestClick, handlePopularityClick } =
    useSortSelection(setSort);
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <CommunityHandler />
      <CommunityFosteringUI
        fosterings={fosterings}
        handleLoadFosterings={handleLoadFosterings}
        sort={sort}
        handleNewestClick={handleNewestClick}
        handlePopularityClick={handlePopularityClick}
        truncateString={truncateString}
        navigateTo={navigateTo}
        handleRequireModal={handleRequireModal}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
