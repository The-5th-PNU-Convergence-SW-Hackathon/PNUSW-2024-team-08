import styled from "@emotion/styled";
import Image from "next/image";

export const CommunityQuestionBlock = styled.div`
  width: 344px;
  height: 219px;
  background-color: ${(props) => (props.isAnswered ? "#fff0eb" : "#f6f6f6")};
  border-radius: 20px;
  margin-top: 10px;
  flex-shrink: 0;
  position: relative;
  padding-top: 20px;
`;

export const QuestionInfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  /* border: 1px solid red; */
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

export const Overlay = styled.div`
  width: 390px;
  height: 250px;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 195px);
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.85) 65%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 10;
`;
