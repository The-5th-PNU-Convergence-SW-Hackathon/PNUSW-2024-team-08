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

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 95px;
  left: calc(50% - 195px);
  width: 390px;
  height: calc(100vh - 95px);
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const WrapperPetDetail = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow-y: auto;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const PetImgBlock = styled.div`
  width: 390px;
  height: 381px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  flex-shrink: 0;
`;

export const PetImg = styled.img`
  width: 390px;
  height: 381px;
  object-fit: cover;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const AdoptLikeToggle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  /* backdrop-filter: blur(10px); */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 318px;
  left: 323px;
  cursor: pointer;
`;

export const PetInfoContainer = styled.div`
  width: 390px;
  height: calc(100vh - 476px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  padding-left: 10px;

  /* Chrome, Safari 등 */
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0); /* 스크롤바 뒷 배경을 투명 처리한다 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f6f6f6; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 처리 */
    border: 3px solid #f6f6f6; /* 스크롤바 외곽선(선택사항) */
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* Firefox */
  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: #f6f6f6 rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const PetInfoBlock = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  flex-shrink: 0;
`;

export const PetNameGender = styled.div`
  font-size: 28px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 5px;
`;

export const PetGenderIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-bottom: 2px;
`;

export const PetRegionAge = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #707070;
  margin-left: 25px;
`;

export const PetInfoIconBlock = styled.div`
  width: 380px;
  max-width: 380px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 15px;
  flex-shrink: 0;
`;

export const PetPersonalityIcon = styled.div`
  height: 30px;
  background-color: #ffd645;
  border-radius: 15px;
  padding: 0 16px;
  white-space: nowrap;
`;

export const PetBreedIcon = styled.div`
  height: 30px;
  background-color: #aafff0;
  border-radius: 15px;
  padding: 0 16px;
  white-space: nowrap;
`;

export const PetWeightIcon = styled.div`
  /* width: 59px; */
  height: 30px;
  background-color: #d3ffa7;
  border-radius: 15px;
  padding: 0 16px;
  white-space: nowrap;
`;

export const PetNeuterIcon = styled.div`
  height: 30px;
  background-color: ${(props) =>
    props.neuter === "Y" ? "#ffda93" : "#eeeeee"};
  border-radius: 15px;
  padding: 0 16px;
  white-space: nowrap;
`;

export const PetProcessIcon = styled.div`
  height: 30px;
  background-color: ${(props) => {
    switch (props.processState) {
      case "공고중":
        return "#FFD580"; // 주황색
      case "보호중":
        return "#C1FFC1"; // 연한 초록색
      default:
        return "#D3D3D3"; // 기본값
    }
  }};
  border-radius: 15px;
  padding: 0 16px;
  padding: ${(props) =>
    props.processState === "공고중" || props.processState === "보호중"
      ? "0 16px"
      : "0 22px"};
  white-space: nowrap;
`;

export const PetContentTitle = styled.div`
  width: 350px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;

export const PetContentText = styled.div`
  width: 350px;
  height: 200px;
  line-height: 1.3;
  font-size: 16px;
  font-weight: 400;
  margin-top: 12px;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: justify; /* 양쪽 정렬 */
  text-justify: inter-word; /* 단어 간격을 조정하여 정렬 */

  /* Chrome, Safari 등 */
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0); /* 스크롤바 뒷 배경을 투명 처리한다 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f6f6f6; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 처리 */
    border: 3px solid #f6f6f6; /* 스크롤바 외곽선(선택사항) */
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* Firefox */
  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: #f6f6f6 rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const PetAdoptionPeriod = styled.div`
  width: 350px;
  font-size: 12px;
  font-weight: 300;
  color: #707070;
  margin-top: 20px;
`;

export const PetAdoptionButton = styled.button`
  background-color: #ff6636;
  color: white;
  margin-top: 20px;

  :hover {
    cursor: pointer;
  }
`;
