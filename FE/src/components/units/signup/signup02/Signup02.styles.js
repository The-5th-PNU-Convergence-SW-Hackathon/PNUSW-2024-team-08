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
    width: 50%;
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

export const EmailTitle = styled.div`
    width: 100%;
    height: 21px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 24px;
    letter-spacing: -3%;
`;

export const EmailBlock = styled.div`
    width: 344px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    position: relative;
`;

export const EmailItem = styled.input`
    width: 144px;
    height: 60px;
    background-color: #FEF8F2;
    border: 2px solid transparent;
    border-radius: 10px;
    padding-left: 15px;

    :focus{
      border: 2px solid #BEA597;
      outline: none;
    }
    ::placeholder{
      color: #BEA597;
      font-size: 16px;
    }
`;

export const AddressIcon = styled.span`
    width: 30px;
    height: 60px;
    font-size: 30px;
    font-weight: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SelectAddressBlock = styled.div`
  width: 144px;
  height: 60px;
  border-radius: 10px; 
  background-color: #FEF8F2;

  position: relative;

  z-index: 1;
`;

export const SelectAddress = styled.select`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  color: #BEA597;
  cursor: pointer;
  font-size: 16px;
  position: absolute;

  z-index: 1;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }

  option {
    background-color: #FEF8F2;
    color: black;
  }

  ::-ms-expand{
    display:none;/*for IE10,11*/
  }

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const SmallSelectArrow = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 105px;
  top: 18px;
  z-index: 0;
`;

export const CheckEmailBlock = styled.div`
  width: 344px;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const AvailableEmail = styled.p`
  width: 167px;
  height: 17px;
  font-size: 12px;
  color: #C6C6C6;
  visibility: hidden;
`;

export const CheckEmailBtn = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
`;

export const InputVerificationCodeContainer = styled.div`
  width: 344px;
  height: 126px;
  margin-top: 23px;
  visibility: hidden;
`;

export const VerificationCodeTitle = styled.div`
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: 600;
  
`;

export const VerificationCodeBlock = styled.div`
  width: 342px;
  height: 60px;
  background-color: #FEF8F2;
  border: 3px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const VerificationCodeItem = styled.input`
  width: 150px;
  height: 50px;
  background-color: #FEF8F2;
  border: 1px solid transparent;
  border-radius: 10px;
  padding-left: 1px;

  :focus{
    outline: none;
  }
  
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TimerItem = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #FEF8F2;
  margin-right: 20px;
  visibility: hidden;
`;

export const RetryVerification = styled.div`
  width: 139px;
  height: 17px;
  font-size: 12px;
  color: #C6C6C6;
  cursor: pointer;
  margin-top: 20px;
`;

export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 183px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;