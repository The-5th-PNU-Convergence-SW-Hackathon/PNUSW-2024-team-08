import styled from "@emotion/styled";

export const ChatInputWrapper = styled.div`
  width: 390px;
  height: 84px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  padding: 7px 15px 0 15px;
  border-top: 1px solid #dbdbdb;
  background-color: white;
  position: relative;
  z-index: 10;
`;

export const ChatDataAdd = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ff6636;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ChatInputBlock = styled.input`
  width: 232px;
  height: 44px;
  background-color: #f6f6f6;
  border: 2px solid transparent;
  outline: none;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 300;
  padding-left: 18px;

  ::placeholder {
    color: #888;
  }

  :focus {
    border: 2px solid black;
    color: #888;
  }
`;

export const ChatInputButton = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #272727;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DataModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const DataModalContent = styled.div`
  background: white;
  width: 350px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 101;
`;

export const UploadTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const UploadDataContainer = styled.div`
  width: 320px;
  max-height: 270px;
  margin-bottom: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  /* padding-left: 12px; */

  /* Chrome, Safari 등 */
  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
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

export const UploadDataBlock = styled.div`
  width: 320px;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  position: relative;
`;

export const UploadPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
`;

export const UploadDataInfo = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const UploadDataName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const UploadDataSize = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

export const UploadDataDelete = styled.div`
  font-size: 10px;
  position: absolute;
  top: 5px;
  right: 15px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

export const DataBtnBlock = styled.div`
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
