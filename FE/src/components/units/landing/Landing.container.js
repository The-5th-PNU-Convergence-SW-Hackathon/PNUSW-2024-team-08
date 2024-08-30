import { useNavigate } from "../../commons/hooks/useNavigate";
import LandingUI from "./Landing.presenter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

export default function Landing() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };
  const handleStartButtonClick = () => {
    if (currentSlide === 3) {
      navigateTo("/login/signup/agreements")();
    } else {
      sliderRef.current.slickNext();
    }
  };
  const getSliderSettings = {
    dots: true,
    infinite: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };
  const { navigateTo } = useNavigate();

  return (
    <>
      <LandingUI
        sliderRef={sliderRef}
        currentSlide={currentSlide}
        handleAfterChange={handleAfterChange}
        handleStartButtonClick={handleStartButtonClick}
        getSliderSettings={getSliderSettings}
        navigateTo={navigateTo}
      />
    </>
  );
}
