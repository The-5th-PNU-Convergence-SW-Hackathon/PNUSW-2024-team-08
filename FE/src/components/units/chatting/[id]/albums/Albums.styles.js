import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const WrapperAlbums = styled.div`
  width: 390px;
  height: calc(100vh - 143px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  padding-left: 10px;
  padding-bottom: 10px;
  overflow-y: scroll;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 143px - 60px);
  }
`;

export const DataTextBlock = styled.div`
  align-self: flex-start;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const ImagesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 추가: 이미지 줄을 수평 가운데 정렬 */
  gap: 5px;
  margin-bottom: 20px; /* 날짜 그룹 간의 간격 */
  width: 100%; /* 부모 요소의 전체 너비를 사용 */
`;

export const ImageWrapper = styled.div`
  width: 120px; /* 각 이미지의 고정 너비 */
  height: 120px; /* 각 이미지의 고정 높이 */
  position: relative; /* 레이아웃 내 위치를 조절 */
  overflow: hidden; /* 이미지가 부모 요소를 넘지 않도록 */
  img {
    object-fit: cover; /* 이미지가 부모 요소를 꽉 채우도록 */
  }
`;

export const ImageLoadingSkeleton = styled.div`
  width: 120px;
  height: 120px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: skeleton-animation 1.2s infinite ease-in-out;

  @keyframes skeleton-animation {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingImgBox = styled.div`
  height: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoadingImg = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid #ff6636;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
`;
