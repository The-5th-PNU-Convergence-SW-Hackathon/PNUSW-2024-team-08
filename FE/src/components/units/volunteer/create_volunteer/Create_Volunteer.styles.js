import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: 749px;
  margin: 0 auto;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentsContainer = styled.div`
  width: 344px;
  height: 693px;
`;

export const TitleBlock = styled.div`
  width: 100%;
  height: 24px;
  margin-top: 24px;
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const Title = styled.p`
  width: 109px;
  height: 24px;
`;

export const AddMainImg = styled.div`
  margin-top: 12px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;

  background-color: #FEF8F2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputVolunteerName = styled.input`
  width: 342px;
  height: 60px;
  border-radius: 10px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-left: 15px;
  margin-top: 12px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`;

/*지역 선택 관련*/
export const EditTextBlock = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ProfileInfoLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  margin-top: 24px;
`;


export const AreaSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
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

export const BigSelectWrap = styled.div`
  margin-top: 12px;
  width: 344px;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 10px;
  color: #BEA597;
  cursor: pointer;
  padding-left: 15px;
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

export const Arrow1Img = styled.div`
  width: 25px;
  height: 25px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 300px;
  top: 19px;
  
  z-index: 0;
`;

export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 73px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
