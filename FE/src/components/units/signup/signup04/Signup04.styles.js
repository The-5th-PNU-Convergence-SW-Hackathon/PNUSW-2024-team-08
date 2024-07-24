import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  height: 912px;
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
    width: 100%;
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
  height: 719px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoBlock = styled.div`
  width: 344px;
  height: 652px;
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

export const InfoContentProfileContainer = styled.div`
  width: 344px;
  height: 132px;
  margin-top: 24px;
`;

export const InfoTitleProfile = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
  font-weight: 600;
`;

export const SetProfileBlock = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 8px;
  cursor: pointer;
`;

export const SetProfileItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: #FEF8F2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UploadedImage = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoNickNameContainer = styled.div`
  width: 342px;
  height: 90px;
  margin-top: 24px;
`;

export const InfoTitleNickName = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
  font-weight: 600; 
`;

export const SetNickName = styled.input`
  width: 342px;
  height: 60px;
  border-radius: 10px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-left: 15px;
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

export const CheckNickNameBlock = styled.div`
  width: 344px;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const AvailableNickName = styled.p`
  width: 167px;
  height: 17px;
  font-size: 12px;
  color: #C6C6C6;
`;

export const CheckNickNameBtn = styled.button`
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

export const EditTextBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ProfileInfoLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  margin-top: 30px;
`;


export const AreaSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 24px;
`;

export const ProvinceSelect = styled.div`
  width: 342px;
  height: 60px;
  line-height: 60px;
  background-color: #fef8f2;
  border: ${(props) =>
    props.isProvinceFocused ? "2px solid #bea597" : "2px solid transparent"};
  color: ${(props) => (props.isProvinceFocused ? "#bea597" : "#bea597")};
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 10px;
  position: relative;
`;

export const ProvinceArrowBlock = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 83px;
  left: 305px;
`;

export const ProvinceDropdown = styled.div`
  position: absolute;
  height: 120px;
  top: 130px;
  left: 2px;
  width: 342px;
  background-color: #fef8f2;
  border: 2px solid #bea597;
  border-radius: 10px;
  padding-bottom: 15px;
  z-index: 10;
  overflow-y: auto;

  /* Chrome, Safari 등 */
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

  /* Firefox */
  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: #bea597 rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const ProvinceOption = styled.div`
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

export const DistrictSelectBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

export const DistrictSelect = styled.div`
  width: 164px;
  height: 60px;
  line-height: 60px;
  background-color: #fef8f2;
  border: ${(props) =>
    props.isDistrictFocused ? "2px solid #bea597" : "2px solid transparent"};
  color: ${(props) => (props.isDistrictFocused ? "#bea597" : "#bea597")};
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 10px;
  margin-right: 4px;
`;

export const DistrictArrowBlock = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 28px;
  left: 128px;
`;

export const DistrictDropdown = styled.div`
  position: absolute;
  height: 86px;
  top: 76px;
  left: 3px;
  width: 164px;
  background-color: #fef8f2;
  border: 2px solid #bea597;
  border-radius: 10px;
  padding-bottom: 15px;
  z-index: 10;
  overflow-y: auto;

  /* Chrome, Safari 등 */
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

  /* Firefox */
  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: #bea597 rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const DistrictOption = styled.div`
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

export const SubdistrictSelect = styled.div`
  width: 164px;
  height: 60px;
  line-height: 60px;
  background-color: #fef8f2;
  border: ${(props) =>
    props.isSubdistrictFocused ? "2px solid #bea597" : "2px solid transparent"};
  color: ${(props) => (props.isSubdistrictFocused ? "#bea597" : "#bea597")};
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 10px;
  margin-left: 4px;

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const SubdistrictArrowBlock = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 28px;
  left: 305px;
`;

export const SubdistrictDropdown = styled.div`
  position: absolute;
  height: 86px;
  top: 76px;
  left: 178px;
  width: 164px;
  background-color: #fef8f2;
  border: 2px solid #bea597;
  border-radius: 10px;
  padding-bottom: 15px;
  z-index: 10;
  overflow-y: auto;

  /* Chrome, Safari 등 */
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

  /* Firefox */
  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: #bea597 rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const SubdistrictOption = styled.div`
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
/*버튼 css */
export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
