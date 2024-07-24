import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityAdoptionUI from "./CommunityAdoption.presenter";
import useFetchAdoptionList from "./hooks/useFetchAdoptionList";
import { useTruncateString } from "../../../../../src/components/commons/hooks/useTruncateString";
import useRequireLogin from "../../../../../src/components/commons/hooks/useRequireLogin";
import { useSortSelection } from "../../../../../src/components/commons/hooks/useSortSelection";

export default function CommunityAdoption({ isSSRLoggedIn }) {
  const { adoptions, handleLoadAdoptions, sort, setSort } =
    useFetchAdoptionList();
  const { handleNewestClick, handlePopularityClick } =
    useSortSelection(setSort);
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();
  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <Headers isSSRLoggedIn={isSSRLoggedIn} />
      <CommunityHandler />
      <CommunityAdoptionUI
        adoptions={adoptions}
        handleLoadAdoptions={handleLoadAdoptions}
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
