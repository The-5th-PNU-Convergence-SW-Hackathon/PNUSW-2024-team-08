import styled from "@emotion/styled";

export const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: opacity 0.6s ease-in-out;
`;
