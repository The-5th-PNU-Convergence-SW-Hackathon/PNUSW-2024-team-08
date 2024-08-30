import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 390px;
  width: 350px;
  height: 210px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 317px;
  height: 159px;
`;

export const Message = styled.div`
  width: 100%;
  height: 25px;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 21px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Notice = styled.div`
  width: 100%;
  min-height: 34px;
  text-align: center;
  margin-bottom: 29px;
  white-space: pre-wrap;  // 이 줄을 추가

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const CancelButton = styled.div`
  width: 151px;
  height: 100%;
  cursor: pointer;
  background-color: #EEEEEE;
  color: black;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled.div`
  width: 151px;
  height: 100%;
  cursor: pointer;
  background-color: #FF6636;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
