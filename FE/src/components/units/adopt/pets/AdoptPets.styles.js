import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 334px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: white;
  padding-bottom: 12px;
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

export const AdoptPetMenuBlock = styled.div`
  width: 305px;
  height: 43px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 18px;
  margin-right: 40px;
  margin-bottom: 3px;
`;

export const AdoptPetMenuDate = styled.div`
  width: 91px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "date" ? "#ff6636" : "#eeeeee"};
  border-radius: 22px;
  color: ${(props) => (props.sort === "date" ? "#ffffff" : "#000000")};
  cursor: pointer;
`;

export const AdoptPetMenuDogs = styled.div`
  width: 53px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "dog" ? "#ff6636" : "#eeeeee"};
  color: ${(props) => (props.sort === "dog" ? "#ffffff" : "#000000")};
  border-radius: 22px;
  cursor: pointer;
`;

export const AdoptPetMenuCats = styled.div`
  width: 76px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "cat" ? "#ff6636" : "#eeeeee"};
  color: ${(props) => (props.sort === "cat" ? "#ffffff" : "#000000")};
  border-radius: 22px;
  cursor: pointer;
`;

export const AdoptPetMenuOthers = styled.div`
  width: 65px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "other" ? "#ff6636" : "#eeeeee"};
  color: ${(props) => (props.sort === "other" ? "#ffffff" : "#000000")};
  border-radius: 22px;
  cursor: pointer;
`;

export const AdoptPet = styled.div`
  width: 344px;
  height: 344px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-shrink: 0;
  position: relative;
  margin-top: 12px;

  :hover {
    cursor: pointer;
  }
`;

export const PetImg = styled.img`
  width: 344px;
  height: 344px;
  object-fit: cover;
  border-radius: 20px;
`;

export const AdoptLikeToggle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  left: 288px;
`;

export const AdoptInfoBlock = styled.div`
  width: 320px;
  height: 107px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  position: absolute;
  margin-bottom: 12px;
`;

export const AdoptNameGender = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 13px;
  left: 10px;
`;

export const AdoptText = styled.div`
  font-size: 12px;
  color: #4e4e48;
  position: absolute;
  top: 48px;
  left: 10px;
`;

export const PetBreed = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #4e4e48;
`;

export const PetInfoIconBlock = styled.div`
  width: 300px;
  max-width: 300px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 43px;
  margin-left: 8px;
  margin-bottom: 15px;
  flex-shrink: 0;
`;

export const PetWeightIcon = styled.div`
  /* width: 59px; */
  height: 25px;
  background-color: #d3ffa7;
  border-radius: 15px;
  padding: 0 16px;
  white-space: nowrap;
`;

export const PetProcessIcon = styled.div`
  height: 25px;
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

export const PetNeuterIcon = styled.div`
  height: 25px;
  background-color: ${(props) =>
    props.neuter === "Y" ? "#ffda93" : "#eeeeee"};
  border-radius: 15px;
  padding: 0 16px;
  white-space: nowrap;
`;

export const AdoptBirthAddress = styled.div`
  font-size: 12px;
  color: #4e4e48;
  position: absolute;
  top: 77px;
  left: 10px;
`;

export const AdoptLikeBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1px;
  top: 74px;
  left: 235px;
`;

export const AdoptLike = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AdoptViewBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 74px;
  left: 275px;
`;

export const AdoptView = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MoreButton = styled.button`
  /* width: 99px;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  color: #000;
  border: 2px solid #ff6636;
  font-size: 18px;
  font-weight: 500; */
  margin-top: 12px;
  cursor: pointer;
`;
