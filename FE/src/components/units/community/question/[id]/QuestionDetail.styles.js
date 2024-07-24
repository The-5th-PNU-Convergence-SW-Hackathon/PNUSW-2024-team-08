import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
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

export const UserContainer = styled.div`
  width: 87%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: -10px;
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
`;

export const UserInfoBlock = styled.div`
  width: 290px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 7px;

  img {
    transform: rotate(90deg);
  }
`;

export const UserNickname = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

export const QuestionDetailBlock = styled.div`
  width: 344px;
  background-color: #f6f6f6;
  border-radius: 20px;
  margin-top: 10px;
  padding-left: 10px;
  padding-bottom: 25px;
  flex-shrink: 0;
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

export const AnswerBtn = styled.button`
  color: #ff6636;
  border: 1px solid #ff6636;
  background-color: #fff;
  margin-top: 25px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const AnswerDetailBlock = styled.div`
  width: 344px;
  background-color: #fff0eb;
  border-radius: 20px;
  margin-top: 10px;
  padding-left: 10px;
  padding-bottom: 25px;
  flex-shrink: 0;
`;

export const AnswerUserBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 12px;
`;

export const AnswerProfile = styled.div`
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AnswerInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const UpdatedTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #808080;
  margin-top: 3px;
`;

export const AnswerText = styled.div`
  width: 286px;
  font-size: 16px;
  font-weight: 300;
  margin-top: 12px;
  margin-left: 12px;
`;
