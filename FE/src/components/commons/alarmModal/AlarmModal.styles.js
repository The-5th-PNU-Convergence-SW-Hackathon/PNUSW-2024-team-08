import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 100px;
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    bottom: 100px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  background-color: white;
  color: #FF6636;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  border: 1px solid #FF6636;
  border-radius: 29px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${props => props.show ? slideUp : slideDown} 0.5s ease-in-out forwards;
`;