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
  background: #dbdbdb;
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.progress`
  width: 20%;
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
  width: 100%;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 285px;
`;

export const CheckboxContainer = styled.div`
  width: 344px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 5px;
  position: relative;
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
  border: 1px solid #7c7c7c;
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

export const TotalLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-left: 5px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin-left: 5px;
  cursor: pointer;
`;

export const LabelArrow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const SubLabel = styled.label`
  font-size: 10px;
  font-weight: 500;
  color: #969393;
  position: absolute;
  top: 25px;
  left: 25px;
`;

export const BorderLine = styled.div`
  width: 344px;
  border-bottom: 0.7px solid #7c7c7c;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const NextButtonItem = styled.button`
  background-color: #ff6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 36px;
  cursor: pointer;
`;
