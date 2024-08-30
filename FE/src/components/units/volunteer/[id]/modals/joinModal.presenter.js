import React, { useState, useEffect } from 'react';
import * as S from './joinModal.styles';

const JoinModal = ({ showModal, handleClose, handleConfirm, profileURL }) => {
  const [input, setInput] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(showModal);

  useEffect(() => {
    if (showModal) {
      setIsVisible(true);
      setIsAnimating(true);
    } else if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setIsVisible(false);
      }, 300); // 애니메이션 시간 (0.3초)과 일치시킴
      return () => clearTimeout(timer);
    }
  }, [showModal, isAnimating]);

  const handleCloseModal = () => {
    setInput('');
    handleClose();
  };

  const handleConfirmModal = () => {
    handleConfirm(input);
    setInput('');
  };

  return (
    isVisible && (
      <S.ModalContainer>
        <S.ModalContent show={showModal}>
          <S.ModalTitileCotaniner>
            <S.ModalTitle>가입인사를 작성해주세요.</S.ModalTitle>
            <S.ProfileImg
              src={profileURL}
              alt='profile'
            />
          </S.ModalTitileCotaniner>
          <S.InputField
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ex) 앞으로 잘 부탁드려요!"
          />
          <S.ButtonContainer>
            <S.CancleButtom onClick={handleCloseModal}>취소</S.CancleButtom>
            <S.ConfirmButton onClick={handleConfirmModal}>완료</S.ConfirmButton>
          </S.ButtonContainer>
        </S.ModalContent>
      </S.ModalContainer>
    )
  );
};

export default JoinModal;
