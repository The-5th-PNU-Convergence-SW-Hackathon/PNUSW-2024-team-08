import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  height: 844px;
  background-color: white;
`;

export const ProgressBarBlock = styled.div`
  width: 100%;
  height: 3px;
  background-color: #DBDBDB;
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.progress`
    width: 75%;
    height: 3px;
    appearance: none;
    
    &::-webkit-progress-bar {
      background-color: #DBDBDB; 
    }

    &::-webkit-progress-value {
      background-color: #FF6636; 
    }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 651px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoBlock = styled.div`
  width: 344px;
  height: 584px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InfoTitleItem = styled.div`
  width: 100%;
  height: 29px;
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
  background-color: #FEF8F2;
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
  color: #BEA597;
`;

export const InfoTitlePassWord = styled.div`
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: 600;
`;

export const SetPassWord = styled.input`
  width: 100%;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  border: 2px solid transparent;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`;

export const InfoFormPassWord = styled.p`
  width: 300px;
  height:17px;
  color: #C6C6C6;
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`;

export const CheckPassWordTitle = styled.div`
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: 600;
`;

export const CheckPassWord = styled.input`
  width: 100%;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  border: 1px solid transparent;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`;

export const PassWordCorrect = styled.p`
  width: 300px;
  height:17px;
  color: #9AC8FF;
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
`;

export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 104px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
