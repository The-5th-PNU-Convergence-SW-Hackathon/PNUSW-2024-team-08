import React from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import useModalStore from "../../../../src/store/useModalStore";
import * as S from "./ModalComponent.styles";

Modal.setAppElement("#__next");

const ModalComponent = () => {
  const { isOpen, closeModal, redirectPath, setRedirect } = useModalStore();
  const router = useRouter();

  const handleClose = () => {
    closeModal();
    if (redirectPath) router.push(redirectPath);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)", // 오버레이 배경색 어둡게 설정
          zIndex: 999,
        },
        content: {
          width: "390px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none", // 외곽선 제거
          borderRadius: "20px", // 보더 레디어스 설정
          padding: "20px", // 패딩 추가
          backgroundColor: "#fff", // 배경색 설정
          zIndex: 1000,
        },
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        로그인 후 이 서비스를 이용할 수 있어요
      </h2>
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        지금 로그인 하시겠어요?
      </h2>
      <S.buttonsContianer>
        <S.closeButton onClick={handleClose}>닫기</S.closeButton>
        <S.toLoginPageButton
          onClick={() => {
            closeModal();
            router.push("/login");
          }}
        >
          로그인 하기
        </S.toLoginPageButton>
      </S.buttonsContianer>
    </Modal>
  );
};

export default ModalComponent;
