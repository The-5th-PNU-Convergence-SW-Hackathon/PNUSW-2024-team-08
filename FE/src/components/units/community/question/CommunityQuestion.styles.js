import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
  padding-top: 5px;
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

export const CommunityQuestionBlock = styled.div`
  width: 344px;
  height: 219px;
  background-color: ${(props) => (props.isAnswered ? "#fff0eb" : "#f6f6f6")};
  border-radius: 20px;
  margin-top: 10px;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
`;

export const QuestionInfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 12px;
`;

export const QuestionProfile = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

export const CircularImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const QuestionUserInfo = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const QuestionNickName = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin-top: 5px;
`;

export const QuestionDate = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 8px;
  color: #807876;
  margin-top: 6px;
`;

export const QuestionTtile = styled.div`
  width: 305px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 18px;
`;

export const QuestionText = styled.div`
  width: 310px;
  height: 57px;
  font-size: 12px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 10px;
  margin-left: 18px;
`;

export const NumberOfAnswers = styled.div`
  width: 100%;
  font-size: 11px;
  font-weight: 400;
  color: #807876;
  text-align: end;
  padding-right: 12px;
  position: absolute;
  top: 185px;
  right: 10px;
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

export const MoreButton = styled.button`
  margin-top: 12px;
  cursor: pointer;
`;
