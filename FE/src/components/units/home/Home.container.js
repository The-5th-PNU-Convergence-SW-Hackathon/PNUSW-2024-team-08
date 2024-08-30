import HomeHeader from "../../commons/headers/HomeHeader.container";
import Navigation from "../../commons/navigation/Navigation.container";
import HomeUI from "./Home.presenter";
import { useNavigate } from "../../commons/hooks/useNavigate";
import { useTruncateString } from "../../commons/hooks/useTruncateString";
import {
  findProvinceKo,
  findDistrictKo,
} from "../../commons/district/districtName";
import useRequireLogin from "../../commons/hooks/useRequireLogin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useDragAndClick from "../../commons/hooks/useDragAndClick";
import useModalStore from "../../../../src/store/useModalStore";
import { volunteerLike } from "../volunteer/Volunteer.quries";
import { useState, useCallback } from "react";
import { useFormatDateTime } from "../../units/volunteer/hooks/useFormat";

export default function Home({ isSSRLoggedIn, homeData, profileURL }) {
  console.log("Home isSSRLoggedIn: ", isSSRLoggedIn);
  console.log("profileURL: ", profileURL);
  console.log("homeData: ", homeData);

  const [homeVolunteer, setHomeVolunteer] = useState(homeData.groups);

  const { truncateString } = useTruncateString();
  const { navigateTo } = useNavigate();
  const { openModal } = useModalStore();

  const paths = {
    adopt: "/adopt/pets",
    volunteer: "/volunteer/recommend",
    community: "/community/adoption",
    faq: "/home/faq",
    dogs: "home/dogs",
    cats: "home/cats",
  };

  const getSliderSettings = {
    dots: false,
    infinite: false,
    centerMode: true,
    centerPadding: "56px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } = useDragAndClick();

  const handleRequireModal = useRequireLogin(isSSRLoggedIn);

  const handleToggleLike = useCallback(async (volunteerId) => {
    try {
      const response = await volunteerLike(volunteerId);

      if (response.success) {
        setHomeVolunteer((prev) =>
          prev.map((group) =>
            group.id === volunteerId
              ? {
                  ...group,
                  isLike: !group.isLike,
                  likeNum: group.isLike ? group.likeNum - 1 : group.likeNum + 1,
                }
              : group
          )
        );
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  }, []);

  const handleToggleClick = (volunteerId) => {
    if (!isSSRLoggedIn) {
      openModal();
    } else {
      handleToggleLike(volunteerId);
    }
  };

  return (
    <>
      <HomeHeader isSSRLoggedIn={isSSRLoggedIn} profileURL={profileURL} />
      <HomeUI
        homeData={homeData}
        homeVolunteer={homeVolunteer}
        getSliderSettings={getSliderSettings}
        handleMouseDown={handleMouseDown}
        handleMouseMove={handleMouseMove}
        handleMouseUp={handleMouseUp}
        findProvinceKo={findProvinceKo}
        findDistrictKo={findDistrictKo}
        truncateString={truncateString}
        navigateTo={navigateTo}
        handleToggleClick={handleToggleClick}
        paths={paths}
        useFormatDateTime={useFormatDateTime}
        handleRequireModal={handleRequireModal}
      />
      <Navigation handleRequireModal={handleRequireModal} />
    </>
  );
}
