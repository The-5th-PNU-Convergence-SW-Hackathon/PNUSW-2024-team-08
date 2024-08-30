import * as S from "./Slider.styles";
import Image from "next/image";

export default function SliderUI({ images, currentIndex, handleNext, handlePrev }) {
  return (
    <S.SliderContainer>
      <S.Arrow className="arrow left" onClick={handlePrev}>
        ❮
      </S.Arrow>
      <S.Slide currentIndex={currentIndex}>
        {images.map((image, index) => (
          <S.SlideItem key={index}>
            <S.SlideImg 
               src={image.imageURL}
               alt={`Slide ${index + 1}`}
            />
          </S.SlideItem>
        ))}
      </S.Slide>
      <S.Arrow className="arrow right" onClick={handleNext}>
        ❯
      </S.Arrow>
      <S.Indicators>
        {images.map((_, index) => (
          <S.Indicator key={index} active={index === currentIndex} />
        ))}
      </S.Indicators>
    </S.SliderContainer>
  );
}
