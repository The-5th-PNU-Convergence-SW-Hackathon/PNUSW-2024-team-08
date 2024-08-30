// SuccessModal.js
import React, { useEffect } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 350px;
  height: 160px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalButton = styled.button`
  width: 170px;
  background-color: #FF6636;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #FF6636;
  }
`;

const ModalText = styled.p`
  font-size: 21px;
  font-weight: 700;
`;

const SuccessModal = ({ showModal, onClose }) => {
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        onClose(); // 3초 후 모달 자동 닫힘 및 경로 이동
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showModal, onClose]);

  if (!showModal) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <ModalText>모임이 성공적으로 수정 되었습니다!</ModalText>
        <ModalButton onClick={onClose}>확인</ModalButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default SuccessModal;
