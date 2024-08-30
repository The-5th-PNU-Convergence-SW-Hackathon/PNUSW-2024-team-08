import React from "react";
import * as S from "./ConfirmModal.styles";

export default function ConfirmModalUI(props) {
  return (
    <>
      {props.isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContainer>
            <S.ModalText>{props.modalText.text}</S.ModalText>
            <S.ModalSubText>{props.modalText.subText}</S.ModalSubText>
            <S.ModalBtnBlock>
              <S.CancelModalBtn onClick={props.handleCancelBtn}>
                {props.modalText.cancelText}
              </S.CancelModalBtn>
              <S.ConfirmModalBtn onClick={props.handleConfirmBtn}>
                {props.modalText.confirmText}
              </S.ConfirmModalBtn>
            </S.ModalBtnBlock>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </>
  );
}
