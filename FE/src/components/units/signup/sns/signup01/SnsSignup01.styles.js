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
  width: 66%;
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
  position: relative;
`;

export const InfoTitleName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const InfoNameItem = styled.input`
  width: 344px;
  height: 60px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  margin-top: 12px;
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

export const UserSelect = styled.div`
  width: 344px;
  height: 60px;
  line-height: 60px;
  background-color: #fef8f2;
  border: ${(props) =>
    props.isUserFocused ? "2px solid #bea597" : "2px solid transparent"};
  color: ${(props) => (props.isUserFocused ? "#bea597" : "#bea597")};
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 10px;
  margin-right: 4px;
`;

export const UserArrowBlock = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52px;
  right: 20px;
`;

export const UserDropdown = styled.div`
  position: absolute;
  height: 86px;
  top: 100px;
  left: 0px;
  width: 344px;
  background-color: #fef8f2;
  border: 2px solid #bea597;
  border-radius: 10px;
  padding-bottom: 15px;
  z-index: 10;
`;

export const UserOption = styled.div`
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

export const ShelterUserDescriptionBlock = styled.div`
  width: 342px;
  height: 81px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
  padding-left: 25px;
`;

export const DescriptionItem = styled.div`
  font-size: 11.6px;
  font-weight: 300;
  color: #878282;
  position: relative;
`;

export const CustomBullet = styled.div`
  position: absolute;
  left: -12px;
`;

export const CheckboxContainer = styled.div`
  width: 344px;
  display: flex;
  align-items: center;
  margin: 10px 0;
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
  border: 1px solid #595959;
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
  margin-left: 5px;
  cursor: pointer;
`;

export const NextButtonItem = styled.button`
  background-color: #ff6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-top: 264px;
  cursor: pointer;
`;
