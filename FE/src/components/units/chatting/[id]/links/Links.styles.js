import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const WrapperLinks = styled.div`
  width: 390px;
  height: calc(100vh - 143px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  padding-left: 14px;
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

export const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 추가: 이미지 줄을 수평 가운데 정렬 */
  gap: 10px;
  margin-bottom: 20px; /* 날짜 그룹 간의 간격 */
  width: 100%; /* 부모 요소의 전체 너비를 사용 */
`;

export const LinkWrapper = styled.div`
  width: 176px;
  height: 160px;
  position: relative; /* 레이아웃 내 위치를 조절 */
  overflow: hidden; /* 이미지가 부모 요소를 넘지 않도록 */
`;

export const MsgLinkBlock = styled.div`
  width: 176px;
  height: 160px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const MsgLinkImg = styled.div`
  width: 174px;
  height: 79px;
  overflow: hidden;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;

  img {
    object-fit: cover;
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
  }
`;

export const MsgLinkDefaultImg = styled.div`
  width: 174px;
  height: 79px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #4574e7;
`;

export const MsgLinkInfoBlock = styled.div`
  width: 174px;
  height: 78px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 5px 10px;
`;

export const MsgLinkTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  width: 153px;
  height: 18px;
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 생략 표시(...) */
`;

export const MsgLinkDescription = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 1px;
  width: 153px;
  height: 30px;
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 생략 표시(...) */
`;

export const MsgLinkSite = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 8px;
`;

export const ImageLoadingSkeleton = styled.div`
  width: 220px;
  height: 200px;
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
