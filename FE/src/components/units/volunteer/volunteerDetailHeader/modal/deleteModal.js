import React from "react";
import * as S from "./deleteModal.styles"
import { useRouter } from "next/router";

const DeleteModal = ({ isOpen, onClose, onConfirm, children, showCancelButton = true, notice, confirmButtonText }) => {
  if (!isOpen) return null;
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <S.Overlay>
      <S.ModalContent>
        <S.ContentContainer>
          <S.Message>{children}</S.Message>
          <S.Notice>
            {notice.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < notice.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </S.Notice>
          <S.ButtonContainer>
            {showCancelButton && <S.CancelButton onClick={onClose}>취소</S.CancelButton>}
            <S.ConfirmButton onClick={onConfirm}>
              {confirmButtonText}
            </S.ConfirmButton>
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.ModalContent>
    </S.Overlay>
  );
};

export default DeleteModal;
