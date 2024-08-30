import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 231px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: white;
  padding-bottom: 15px;

  /* 크롬, 사파리 등에서 스크롤 바 숨기기 */
  &::-webkit-scrollbar {
    display: none; /* 스크롤 바 숨기기 */
  }

  /* 파이어폭스에서 스크롤 바 숨기기 */
  scrollbar-width: none;

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 231px - 60px);
  }
`;

export const CommunityMenuContainer = styled.div`
  width: 43px;
  height: 14px;
  align-self: flex-end;
  margin-top: 15px;
  margin-right: 28px;
  position: relative;
  cursor: pointer;
`;

export const CommunityMenuBlock = styled.ul`
  width: 60px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 20px;
  right: -5px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 101;
`;

export const CommunityMenuNewest = styled.li`
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.isActive ? "#646464" : "#bbb")};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommunityMenuPopularity = styled.li`
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.isActive ? "#646464" : "#bbb")};
  border-top: 1px solid #dbdbdb;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const CommunityLoadingSkeleton = styled.div`
  width: 344px;
  height: 143px;
  background-color: #e0e0e0;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  flex-shrink: 0;
  cursor: pointer;
  animation: ${pulse} 1.5s infinite;
`;

export const CommunityBlock = styled.div`
  width: 344px;
  height: 143px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const CommunityImg = styled.div`
  width: 115px;
  height: 117px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const StyledImage = styled(Image)`
  border-radius: 7px;
`;

export const CommunityInfoBlock = styled.div`
  width: 170px;
  height: 117px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const CommunityCategory = styled.div`
  font-size: 10px;
  font-weight: 300;
  margin-top: 5px;
`;

export const CommunityTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;

export const CommunityText = styled.div`
  font-size: 16px;
  font-weight: 300;
  width: 180px;
  height: 58px;
  margin-top: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
`;

export const CommunityNickNameDate = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: #434240;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 98px;
  gap: 7px;
`;

export const CommunityNickName = styled.div``;

export const CommunityDate = styled.div``;

export const CommunityLikeBlock = styled.div`
  font-size: 11px;
  font-weight: 400;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 94px;
  left: 120px;
  font-family: "Roboto", sans-serif;
`;

export const CommunityLike = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CommunityViewBlock = styled.div`
  font-size: 11px;
  font-weight: 400;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 94px;
  left: 156px;
  font-family: "Roboto", sans-serif;
`;

export const CommunityView = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
