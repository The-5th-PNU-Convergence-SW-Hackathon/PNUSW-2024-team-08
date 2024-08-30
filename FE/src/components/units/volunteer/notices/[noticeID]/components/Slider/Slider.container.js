import SliderUI from "./Slider.presenter";
import React, { useState } from "react";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SliderUI
      images={images} // images를 그대로 전달
      currentIndex={currentIndex}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
  );
}
