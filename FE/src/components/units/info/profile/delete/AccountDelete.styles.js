import styled from "@emotion/styled";
import Image from "next/image";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
  /* opacity: 0; */
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 23px;
  padding-bottom: 1px;
`;

export const LeftArrowTitleContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

export const WrapperAccountDelete = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  overflow-y: auto;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 95px - 60px);
  }
`;

export const LogoImageBlock = styled.div`
  width: 40px;
  height: 44px;
  margin-top: 53px;
`;

export const DeleteText1 = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  text-decoration: underline;
  margin-top: 31px;
`;

export const DeleteText2 = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #000;
  margin-top: 16px;
`;

export const DeleteText3 = styled.div`
  width: 285px;
  height: 64px;
  font-size: 12px;
  font-weight: 300;
  color: #595959;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  margin-top: 21px;
  background-color: #f6f6f6;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 17px 0 16px 0;
  gap: 5px;
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div`
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #afafaf;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms;
  cursor: pointer;

  &::after {
    content: "${({ isChecked }) => (isChecked ? "✔" : "")}";
    color: #ff6636;
    font-size: 14px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 300;
  color: #595959;
  cursor: pointer;
`;

export const BorderLine = styled.div`
  width: 294px;
  border-bottom: 0.7px solid #afafaf;
  transition: opacity 0.1s ease-in-out;
  opacity: ${({ isChecked }) => (isChecked ? 0 : 1)};
  transition-delay: ${({ isChecked }) => (isChecked ? "0s" : "0.4s")};
`;

export const AccountDeleteContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: ${(props) => (props.isChecked ? "100px" : "0px")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  position: relative;
`;

export const VerificationContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: ${(props) =>
    props.isChecked && props.isCorrectEmail && props.isButtonClicked
      ? "100px"
      : "0px"};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  margin-top: 15px; /* 컨테이너 간의 간격 */
  position: relative;
`;

export const AccountDeleteInput = styled.input`
  width: 294px;
  height: 50px;
  background-color: #fff;
  border: 0.7px solid #afafaf;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  color: #afafaf;

  ::placeholder {
    color: #afafaf;
  }
`;

export const EmailInput = styled.input`
  width: 294px;
  height: 50px;
  background-color: #fff;
  border: 0.7px solid #afafaf;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 12px;
  padding-right: 107px;
  color: #afafaf;

  ::placeholder {
    color: #afafaf;
  }
`;

export const VerificationInput = styled.input`
  width: 294px;
  height: 50px;
  background-color: #fff;
  border: 0.7px solid #afafaf;
  outline: none;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 12px;
  padding-right: 80px;
  color: #afafaf;
  position: relative;

  ::placeholder {
    color: #afafaf;
  }
`;

export const ConfrimMessageBlock = styled.div`
  width: 294px;
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

export const ErrorMessage = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #ff6f61;
  margin-top: 5px;
  margin-left: 5px;
`;

export const TimerItem = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
  position: absolute;
  top: 0;
  right: 50px;
  opacity: ${(props) =>
    props.isChecked && props.isCorrectEmail && props.isButtonClicked
      ? "1"
      : "0"};
  transition: opacity 0.1s ease-in-out;
  transition-delay: 0.4s;
`;

// export const VerificationButton = styled.button`
//   width: 90px;
//   height: ${(props) => (props.isChecked ? "40px" : "0px")};
//   line-height: ${(props) => (props.isChecked ? "40px" : "0px")};
//   font-size: 14px;
//   border-radius: 10px;
//   background-color: #240d05;
//   color: #fff;
//   position: absolute;
//   top: 5px;
//   right: 34px;
//   cursor: pointer;
//   overflow: hidden;
//   white-space: nowrap; /* 텍스트가 잘리지 않도록 */

//   transition: height ${(props) => (props.isChecked ? "0.35s" : "0.3s")}
//       ease-in-out ${(props) => (props.isChecked ? "0.05s" : "0.12s")},
//     line-height ${(props) => (props.isChecked ? "0.35s" : "0.3s")} ease-in-out
//       ${(props) => (props.isChecked ? "0.05s" : "0.12s")},
//     font-size 0.3s ease-in-out, opacity 0.3s ease-in-out;

//   &:disabled {
//     font-size: 0px;
//     opacity: 0;
//   }
// `;

export const VerificationButton = styled.button`
  width: 90px;
  height: ${(props) => (props.isChecked ? "40px" : "0px")};
  line-height: ${(props) => (props.isChecked ? "40px" : "0px")};
  font-size: 14px;
  border-radius: 10px;
  background-color: #240d05;
  color: #fff;
  position: absolute;
  top: 5px;
  right: 34px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid transparent;

  transition: height ${(props) => (props.isChecked ? "0.35s" : "0.3s")}
      ease-in-out ${(props) => (props.isChecked ? "0.05s" : "0.12s")},
    line-height ${(props) => (props.isChecked ? "0.35s" : "0.3s")} ease-in-out
      ${(props) => (props.isChecked ? "0.05s" : "0.12s")},
    font-size 0.3s ease-in-out, opacity 0.3s ease-in-out,
    background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border 0.2s ease-in-out;

  &:disabled {
    background-color: #e2e2e2;
    color: #afafaf;
    border: 1px solid #afafaf;
    cursor: not-allowed;
  }
`;

export const AccountDeleteButton = styled.button`
  width: 133px;
  height: 46px;
  line-height: 46px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  background-color: #ff6636;
  border: none;
  margin-top: 22px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    height: 44px;
    line-height: 44px;
    background-color: #e2e2e2;
    color: #afafaf;
    border: 1px solid #afafaf;
    cursor: not-allowed;
  }
`;

export const SignoutModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const SignoutModalContainer = styled.div`
  background: white;
  width: 350px;
  height: 210px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  position: relative;
  gap: 25px;
  z-index: 101;
`;

export const SignoutModalText = styled.div`
  font-size: 21px;
  font-weight: 700;
  position: absolute;
  top: 35px;
`;

export const SignoutSubModalText = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 45px;
`;

export const SignoutModalBtnBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 15px;
`;

export const SignoutCancelModalBtn = styled.button`
  width: 151px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
`;

export const SignoutConfirmModalBtn = styled.button`
  width: 151px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ff6636;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
`;
