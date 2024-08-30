import React from 'react';
import * as S from './ConfirmationModal.styles';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, memberName, currentRole, newRole, modalType }) => {
  if (!isOpen) return null;

  const getRoleDisplayName = (role) => role === "ADMIN" ? "매니저" : "회원";
  
  let message, notice;

  if (modalType === "roleChange") {
    message = `역할 변경`;
    notice = `${memberName}님의 역할을\n${getRoleDisplayName(currentRole)}에서 ${getRoleDisplayName(newRole)}(으)로 바꾸시겠습니까?`;
  } else if (modalType === "expel") {
    message = `내보내기`;
    notice = `${memberName}님을 내보내시겠습니까?\n언제든 방장에 의해 재가입이 가능합니다!`;
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ContentContainer>
          <S.Message>{message}</S.Message>
          <S.Notice>{notice}</S.Notice>
          <S.ButtonContainer>
            <S.CancelButton onClick={onClose}>취소</S.CancelButton>
            <S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.ModalContent>
    </S.Overlay>
  );
};

export default ConfirmationModal;