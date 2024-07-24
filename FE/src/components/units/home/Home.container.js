import HomeHeader from "../../commons/headers/HomeHeader.container";
import Navigation from "../../commons/navigation/Navigation.container";
import HomeUI from "./Home.presenter";
import { useNavigate } from "../../commons/hooks/useNavigate";
import useFetchHomeData from "./hooks/useFetchHomeData";
import { useTruncateString } from "../../commons/hooks/useTruncateString";
import {
  findProvinceKo,
  findDistrictKo,
} from "../../commons/district/districtName";
import useRequireLogin from "../../commons/hooks/useRequireLogin";

export default function Home({ isSSRLoggedIn }) {
  console.log("Home isSSRLoggedIn: ", isSSRLoggedIn);

  const { homeData } = useFetchHomeData();
  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();

  const paths = {
    adopt: "/adopt/pets",
    volunteer: "/volunteer/recommend",
    community: "/community/adoption",
    faq: "/home/faq",
    dogs: "home/dogs",
    cats: "home/cats",
  };

  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  return (
    <>
      <HomeHeader isSSRLoggedIn={isSSRLoggedIn} />
      <HomeUI
        homeData={homeData}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        truncateString={truncateString}
        navigateTo={navigateTo}
        paths={paths}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
