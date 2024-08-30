import React from "react";
import * as S from "./ResultModal.styles";

export default function ResultModalUI(props) {
  return (
    <>
      {props.isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContainer>
            <S.ModalText>{props.modalText.text}</S.ModalText>
            <S.ModalSubText>{props.modalText.subText}</S.ModalSubText>
            <S.ModalBtnBlock>
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
