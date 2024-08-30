import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentsContainer = styled.div`
  width: 344px;
  height: calc(100vh - 100px);

  overflow-y: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */

  ::-webkit-scrollbar {
   display: none;
  }
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
  width: auto;
  height: 24px;
`;

export const AddMainImgContainer = styled.div`
  margin-top: 12px;
  width: 344px;
  height: 160px;
  border-radius: 10px;
  cursor: pointer;

  background-color: #FEF8F2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddMainImgBlock = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

export const AddMainImgItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FEF8F2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 이미지가 컨테이너를 넘지 않도록 */
`;

export const VolunteerMainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 컨테이너를 꽉 채우도록 */
  border-radius: 10px;
  background-color: none;
`;

export const InputVolunteerName = styled.input`
  width: 100%;
  max-width: 342px;
  height: 60px;
  border-radius: 10px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-left: 15px;
  margin-top: 12px;
  color: #BEA597;
  font-size: 16px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`;

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
  width: 100%;
  max-width: 342px;
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
  width: 100%;
  max-width: 342px;
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
  width: 49%;
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
  width: 100%;
  max-width: 164px;
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
  width: 49%;
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
  width: 100%;
  max-width: 164px;
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

export const DescriptionContainer = styled.textarea`
  margin-top: 12px;
  width: 100%;
  max-width: 344px;
  min-height: 100px; 
  background-color: #FEF8F2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 16px;
  resize: none;
  overflow: hidden;
  color: #BEA597;
  font-size: 16px;

  :focus {
    outline: 0;
    border: 2px solid #BEA597
  }

  ::-webkit-input-placeholder {
    color: #BEA597;
  }
`;

export const CategoryContainer = styled.div`
  margin-top: 15px;
  width: 344px;
  height: 60px;
  position: relative;
  background-color: #fef8f2;
  border-radius: 10px;
  color: #BEA597;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CategorySelect = styled.div`
  width: 100%;
  max-width: 342px;
  height: 60px;
  line-height: 60px;
  padding-left: 15px;
  border-radius: 10px;
  border: ${(props) =>
    props.isCategoryFocused ? "2px solid #bea597" : "2px solid transparent"};
`;

export const CategoryArrowBlock = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  left: 305px;
`;

export const CategoryDropdown = styled.div`
  position: absolute;
  height: auto;
  top: 70px;
  left: 0px;
  width: 100%;
  max-width: 342px;
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
`;

export const CategoryOption = styled.div`
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

export const PeopleNumContainer = styled.div`
  margin-top: 15px;
  width: 344px;
  height: 60px;
  position: relative;
  background-color: #fef8f2;
  border-radius: 10px;
  color: #BEA597;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PeopleNumSelect = styled.div`
  width: 100%;
  max-width: 342px;
  height: 60px;
  line-height: 60px;
  padding-left: 15px;
  border-radius: 10px;
  border: ${(props) =>
    props.isPeopleNumFocused ? "2px solid #bea597" : "2px solid transparent"};
`;

export const PeopleNumArrowBlock = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  left: 305px;
`;

export const PeopleNumDropdown = styled.div`
  position: absolute;
  height: auto;
  top: 70px;
  left: 0px;
  width: 100%;
  max-width: 342px;
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
`;

export const PeopleNumOption = styled.div`
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


export const NextButtonBlock = styled.div`
  width: 344px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 30px;
`;

export const NextButtonItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  padding: 15px 30px; /* 버튼 패딩 추가 */
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