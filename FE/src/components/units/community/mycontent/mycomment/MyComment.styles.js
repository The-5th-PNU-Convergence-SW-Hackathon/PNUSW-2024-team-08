import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 352px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 10px 0 20px 0;
  z-index: 1;
  overflow-y: scroll;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 352px - 60px);
  }
`;

export const CommentContainer = styled.div`
  width: 344px;
  /* height: 94px; */
  background-color: #fff6ed;
  border-radius: 20px;
  margin-top: 10px;
  padding: 15px 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const CommentTitle = styled.div`
  width: 295px;
  height: 20px;
  border-bottom: 0.2px solid #1d1d1d;
  font-size: 10px;
  font-weight: 300;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export const CommentText = styled.div`
  width: 290px;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 4px;
`;

export const CommentDate = styled.div`
  font-size: 9px;
  font-weight: 300;
  color: #818181;
  align-self: flex-start;
  margin-left: 25px;
  margin-top: 5px;
`;

export const CommentCount = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: #616161;
  position: absolute;
  bottom: 13px;
  right: 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-family: "Roboto", sans-serif;
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
