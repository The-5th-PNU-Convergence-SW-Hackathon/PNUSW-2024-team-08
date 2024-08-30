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
  width: 60%;
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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 35px;
  flex-shrink: 0;
`;

export const InfoTitleItem = styled.div`
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
  background-color: #fef8f2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  color: #bea597;

  :focus {
    border: 2px solid #bea597;
    outline: none;
  }
  ::placeholder {
    color: #bea597;
    font-size: 16px;
  }
`;

export const AddressIcon = styled.span`
  width: 30px;
  height: 60px;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectAddressBlock = styled.div`
  width: 144px;
  height: 60px;
  border-radius: 10px;
  background-color: #fef8f2;
  position: relative;

  z-index: 1;
`;

export const SelectAddress = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  border: ${(props) =>
    props.isEmailFocused ? "2px solid #bea597" : "2px solid transparent"};
  border-radius: 10px;
  padding-left: 15px;
  color: #bea597;
  cursor: pointer;
  font-size: 16px;
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

export const EmailDropdown = styled.div`
  position: absolute;
  top: 65px;
  left: 0px;
  width: 144px;
  height: auto;
  background-color: #fef8f2;
  border: 2px solid #bea597;
  border-radius: 10px;
  padding-bottom: 15px;
  z-index: 10;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0); /* 스크롤바 뒷 배경을 투명 처리한다 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bea597; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 처리 */
    border: 3px solid #fef8f2; /* 스크롤바 외곽선(선택사항) */
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const EmailOption = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-left: 12px;
  font-size: 16px;
  color: #bea597;
  border-radius: 10px;
  cursor: pointer;
  flex-shrink: 0;

  :hover {
    opacity: 0.5;
  }
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
  height: 17px;
  font-size: 13px;
  font-weight: 500;
  margin-left: 5px;
  color: ${(props) => {
    if (props.isValid === null) {
      return "#c6c6c6"; // 디폴트 색상 (예: 검정)
    } else if (props.isValid) {
      return "#9ac8ff"; // 가능할 때의 색상
    } else {
      return "#FF6F61"; // 불가능할 때의 색상
    }
  }};
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
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  max-height: ${(props) => (props.isVisible ? "126px" : "0")};
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  position: relative;
`;

export const VerificationCodeTitle = styled.div`
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: 600;
`;

export const VerificationCodeItem = styled.input`
  width: 342px;
  height: 60px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const TimerItem = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  margin-right: 20px;
  position: absolute;
  top: 34px;
  left: 275px;
  visibility: hidden;
`;

export const CheckCodeBlock = styled.div`
  width: 344px;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const CodeMessage = styled.div`
  height: 17px;
  font-size: 13px;
  font-weight: 500;
  margin-left: 5px;
  color: ${(props) => {
    if (props.isValid === null) {
      return "#c6c6c6"; // 디폴트 색상 (예: 검정)
    } else if (props.isValid) {
      return "#9ac8ff"; // 가능할 때의 색상
    } else {
      return "#FF6F61"; // 불가능할 때의 색상
    }
  }};
`;

export const CodeResendBtn = styled.button`
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
  transition: all 0.2ms ease-in-out;

  &:disabled {
    background-color: #e2e2e2;
    color: #afafaf;
    cursor: not-allowed;
  }
`;

export const RetryVerification = styled.div`
  width: 190px;
  height: 17px;
  font-size: 12px;
  color: #c6c6c6;
  cursor: pointer;
  margin-top: 20px;
`;

export const NextButtonItem = styled.button`
  background-color: #ff6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 122px;
  cursor: pointer;
`;
