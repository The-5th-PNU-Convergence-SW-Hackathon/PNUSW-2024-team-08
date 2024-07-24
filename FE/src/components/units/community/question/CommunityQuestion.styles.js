import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 231px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 10px;
  overflow-y: auto;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const CommunityQuestionBlock = styled.div`
  width: 344px;
  height: 219px;
  background-color: ${(props) => (props.isAnswered ? "#fff0eb" : "#f6f6f6")};
  /* background-color: #f6f6f6; */
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
  gap: 10px;
`;

export const QuestionDate = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #807876;
`;

export const QuestionTtile = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 12px;
`;

export const QuestionText = styled.div`
  width: 286px;
  font-size: 16px;
  font-weight: 300;
  margin-top: 12px;
  margin-left: 12px;
`;

export const NumberOfAnswers = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #807876;
  text-align: end;
  padding-right: 12px;
  position: absolute;
  top: 180px;
`;

export const CommunityAddIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6636;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 12%;
  right: calc(50% - 172px);
  cursor: pointer;
`;

export const MoreButton = styled.button`
  margin-top: 12px;
  cursor: pointer;
`;
