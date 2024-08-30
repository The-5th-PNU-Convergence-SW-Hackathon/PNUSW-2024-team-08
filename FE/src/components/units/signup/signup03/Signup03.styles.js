import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 50px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 60px);
  }
`;

export const ProgressBarBlock = styled.div`
  width: 100%;
  height: 3px;
  background-color: #dbdbdb;
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.progress`
  width: 80%;
  height: 3px;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: #dbdbdb;
  }

  &::-webkit-progress-value {
    background-color: #ff6636;
  }
`;

export const InfoContainer = styled.div`
  width: 344px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 35px;
`;

export const InfoTitleItem = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const InfoContentsBlock = styled.div`
  width: 344px;
  height: 90px;
  margin-top: 24px;
`;

export const InfoTitleEmail = styled.div`
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: 600;
`;

export const CheckEmail = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fef8f2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const ShowEmail = styled.div`
  width: 300px;
  height: 20px;
  color: #bea597;
`;

export const InfoTitlePassWord = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const SetPassWord = styled.input`
  width: 100%;
  height: 60px;
  background-color: #fef8f2;
  border-radius: 10px;
  border: 2px solid transparent;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  color: #bea597;
  font-size: 16px;

  :focus {
    border: 2px solid #bea597;
    outline: none;
  }
  ::placeholder {
    color: #bea597;
    font-size: 16px;
  }
`;

export const InfoFormPassWord = styled.p`
  width: 300px;
  height: 17px;
  color: #c6c6c6;
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`;

export const CheckPassWordTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const CheckPassWord = styled.input`
  width: 100%;
  height: 60px;
  background-color: #fef8f2;
  border-radius: 10px;
  border: 1px solid transparent;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  color: #bea597;
  font-size: 16px;

  :focus {
    border: 2px solid #bea597;
    outline: none;
  }
  ::placeholder {
    color: #bea597;
    font-size: 16px;
  }
`;

export const PassWordCorrect = styled.p`
  width: 300px;
  height: 17px;
  color: #9ac8ff;
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`;

export const ConfrimMessageBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ConfirmMessage = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => {
    if (props.isValid === null) {
      return "#c6c6c6"; // 디폴트 색상 (예: 검정)
    } else if (props.isValid) {
      return "#9ac8ff"; // 가능할 때의 색상
    } else {
      return "#FF6F61"; // 불가능할 때의 색상
    }
  }};
  margin-top: 5px;
  margin-left: 5px;
`;

export const NextButtonItem = styled.button`
  background-color: #ff6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 101px;
  cursor: pointer;
`;
