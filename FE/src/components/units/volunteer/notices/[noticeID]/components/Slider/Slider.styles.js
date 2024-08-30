import styled from '@emotion/styled';

export const SliderContainer = styled.div`
  position: relative;
  width: 390px;
  height: 201px;
  overflow: hidden;
  margin: 0 auto;

  &:hover .arrow {
    opacity: 1;
  }
`;

export const Slide = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  width: 100%; /* 각 슬라이드가 전체 너비를 차지하도록 설정 */
`;

export const SlideItem = styled.div`
  min-width: 100%; /* 각 이미지의 너비를 슬라이더의 너비와 동일하게 설정 */
  flex-shrink: 0;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 201px;
  object-fit: cover;
`;

export const Arrow = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 20px;
  line-height: 0;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

export const Indicator = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  border-radius: 50%;
  transition: background-color 0.3s ease;
`;
