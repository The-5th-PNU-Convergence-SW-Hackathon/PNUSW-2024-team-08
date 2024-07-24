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
  overflow-y: auto;
  background-color: white;
  z-index: 10;
  position: relative;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const AddressInput = styled.input`
  width: 344px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  outline: none;
  font-size: 16px;
  font-weight: 400;
  padding-left: 20px;
  position: fixed;
  top: 275px;
  z-index: 10;

  ::placeholder {
    color: #808080;
  }

  :focus {
    border: 1px solid #808080;
    color: #808080;
  }
`;

export const AdoptShelterMenuBlock = styled.div`
  width: 308px;
  height: 43px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  position: fixed;
  top: 335px;
  margin-right: 35px;
  z-index: 10;
`;

export const ShelterDistance = styled.div`
  width: 114px;
  height: 43px;
  line-height: 43px;
  background-color: #ff6636;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  border-radius: 22px;
  color: white;
`;

export const ShelterOpen = styled.div`
  width: 76px;
  height: 43px;
  line-height: 43px;
  background-color: #ffffff;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  border-radius: 22px;
`;

export const ShelterCategory = styled.div`
  width: 99px;
  height: 43px;
  line-height: 43px;
  background-color: #ffffff;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  border-radius: 22px;
`;

export const MapDisplay = styled.div`
  width: 390px;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingImg = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ff6636;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
`;

export const MapInfoContainer = styled.div`
  width: 390px;
  height: 350px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: calc(100% - 120px);
  z-index: 1;
`;

export const MapInfoDragBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;

  :hover {
    cursor: pointer;
  }
`;

export const MapInfoDragIcon = styled.div`
  width: 32px;
  height: 20px;
  border-bottom: 3px solid #b9b9b9;
`;

export const MapCurrentLocationIcon = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  top: calc(100% - 187px);
  left: calc(50% - 190px);
  cursor: pointer;
  z-index: 10;
`;

export const MapInfoBlock = styled.div`
  width: 390px;
  height: 330px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  z-index: 1;
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

export const MapInfoItem = styled.div`
  width: 343px;
  height: 105px;
  border-bottom: 1px solid #f6f2ee;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "#FEF8F2" : "#fff")};
  padding: 0 15px;

  :hover {
    cursor: pointer;
  }
`;

export const MapInfoImg = styled.div`
  width: 74px;
  height: 74px;
  min-width: 74px;
  min-height: 74px;
`;

export const MapInfoDetailBlock = styled.div`
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 17px;
`;

export const ShelterName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
`;

export const ShelterPlace = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #808080;
  margin-top: 7px;
`;

export const ShelterStatus = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 7px;
`;
