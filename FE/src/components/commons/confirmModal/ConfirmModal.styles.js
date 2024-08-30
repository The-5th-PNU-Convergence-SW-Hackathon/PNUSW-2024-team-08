import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
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

export const ModalContainer = styled.div`
  background: white;
  width: 350px;
  height: 210px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  position: relative;
  gap: 25px;
  z-index: 101;
`;

export const ModalText = styled.div`
  font-size: 21px;
  font-weight: 700;
  position: absolute;
  top: 35px;
`;

export const ModalSubText = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 45px;
`;

export const ModalBtnBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 15px;
`;

export const CancelModalBtn = styled.button`
  width: 151px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
`;

export const ConfirmModalBtn = styled.button`
  width: 151px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ff6636;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
`;
