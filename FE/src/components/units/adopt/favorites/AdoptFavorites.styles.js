import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
  padding-top: 3px;
  padding-bottom: 15px;

  /* 크롬, 사파리 등에서 스크롤 바 숨기기 */
  &::-webkit-scrollbar {
    display: none; /* 스크롤 바 숨기기 */
  }

  /* 파이어폭스에서 스크롤 바 숨기기 */
  scrollbar-width: none;

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 334px - 60px);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const AddPetBox = styled.div`
  width: 344px;
  height: 344px;
  border: 1px dashed black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  margin-top: 12px;
`;

export const AddIcon = styled.div`
  width: 120px;
  height: 120px;
  border: 1px dashed black;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 100px;
  cursor: pointer;
`;

export const VerticaDottedlLine = styled.div`
  width: 80px;
  height: 80px;
  border-top: 1px dashed black;
  position: absolute;
  top: 60px;
`;

export const HorizontalDottedLine = styled.div`
  width: 80px;
  height: 80px;
  border-right: 1px dashed black;
  position: absolute;
  right: 60px;
`;

export const AddPetText = styled.div`
  font-size: 30px;
  font-weight: 100;
  position: absolute;
  text-align: center;
  top: 220px;
`;

export const PetLoadingSkeleton = styled.div`
  width: 344px;
  height: 344px;
  background-color: #e0e0e0;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-shrink: 0;
  position: relative;
  margin-top: 12px;
  animation: ${pulse} 1.5s infinite;
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
  background-color: rgba(255, 255, 255, 0.7);
  /* backdrop-filter: blur(10px); */
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
  gap: 2px;
  top: 74px;
  left: 233px;
  font-family: "Roboto", sans-serif;
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
  gap: 2px;
  top: 74px;
  left: 275px;
  font-family: "Roboto", sans-serif;
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
  margin-top: 12px;
  cursor: pointer;
`;
