import React, { useState, useEffect } from 'react';
import * as S from "./AlarmModal.styles";

export default function AlarmModal({ show, message }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (show) {
      setRender(true);
    } else {
      const timer = setTimeout(() => setRender(false), 300); // 페이드 아웃 시간
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!render) return null;

  return (
    <S.ModalContainer show={show}>
      {message}
    </S.ModalContainer>
  );
}