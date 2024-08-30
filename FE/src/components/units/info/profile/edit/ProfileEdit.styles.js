import styled from "@emotion/styled";

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

export const WrapperProfileEdit = styled.div`
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

export const ProfileEditPhotoContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  position: relative;
  flex-shrink: 0;
`;

export const ProfileEditPhoto = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 103px;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const EditText = styled.div`
  font-size: 16px;
  color: white;
  z-index: 1;
  position: absolute;
  top: 87px;
  cursor: pointer;
`;

export const NameText = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const ProfileEditContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const EditTextBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const EditTitle = styled.h1`
  font-size: 24px;
  margin-left: 5px;
`;

export const ProfileInfoLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  margin-top: 30px;
`;

export const NickNameEditBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NickNameInput = styled.input`
  width: 342px;
  height: 60px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 10px;
  color: #bea597;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const NickNameEditButton = styled.button`
  width: 76px;
  height: 43px;
  line-height: 43px;
  font-size: 16px;
  font-weight: 400;
  color: white;
  background-color: #240d05;
  border-radius: 30px;
  position: absolute;
  top: 18px;
  left: 253px;

  :hover {
    cursor: pointer;
  }
`;

export const NickNameMsg = styled.div`
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  top: 76px;
  left: 5px;
  color: ${(props) => {
    if (props.isPossibleNickName === null) {
      return "#c6c6c6"; // 디폴트 색상 (예: 검정)
    } else if (props.isPossibleNickName) {
      return "#9ac8ff"; // 가능할 때의 색상
    } else {
      return "#FF6F61"; // 불가능할 때의 색상
    }
  }};
`;

export const AreaSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 20px;
`;

export const ProvinceContainer = styled.div`
  width: 342px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  left: 4px;
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

export const DistrictContainer = styled.div`
  width: 164px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  left: 5px;
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

export const SubDistrictContainer = styled.div`
  width: 164px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubDistrictSelect = styled.div`
  width: 164px;
  height: 60px;
  line-height: 60px;
  background-color: #fef8f2;
  border: ${(props) =>
    props.isSubDistrictFocused ? "2px solid #bea597" : "2px solid transparent"};
  color: ${(props) => (props.isSubDistrictFocused ? "#bea597" : "#bea597")};
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

export const SubDistrictArrowBlock = styled.div`
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

export const SubDistrictDropdown = styled.div`
  position: absolute;
  height: 86px;
  top: 76px;
  left: 181px;
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

export const SubDistrictOption = styled.div`
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

export const ProfileEditButton = styled.button`
  background-color: #ff6636;
  color: white;
  margin-top: 120px;
  cursor: pointer;
`;

export const CropModalOverlay = styled.div`
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

export const CropModalContent = styled.div`
  background: white;
  width: 350px;
  height: 55vh;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 101;
`;

export const CropTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const CropContainer = styled.div`
  width: 320px;
  height: 40vh;
  position: relative;
  margin-bottom: 20px;

  .reactEasyCrop_Container {
    border-radius: 50px; /* 크롭퍼 모서리를 둥글게 */
    background-color: #fff;
    /* overflow: hidden; 크롭퍼 영역 외부의 이미지 숨김 */
  }

  /* 크롭퍼 내부 캔버스 스타일 변경 */
  .reactEasyCrop_CropArea {
    border: 0.5px solid #fff; /* 크롭 영역의 테두리 스타일 변경 */
    border-radius: 50%;
  }
`;

export const CropBtnBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const UploadBtn = styled.button`
  width: 155px;
  font-size: 18px;
  background-color: #ff6636;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  width: 155px;
  font-size: 18px;
  background-color: #eeeeee;
  border-radius: 10px;
  cursor: pointer;
`;
