import styled from 'styled-components';

export const ModalContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding-bottom: 92px;
`;

export const ModalContent = styled.div`
  width: 370px;
  height: 200px;
  background-color: #FEF8F2;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  animation: ${(props) => (props.show ? 'slide-up 0.3s' : 'slide-down 0.4s')};

  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-down {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
`;

export const ModalTitileCotaniner = styled.div`
  width: 330px;
  height: 40px;
  margin-bottom: 10px;
  padding: 0 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.div`
  width: 290px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 100%;
  border-radius: 50%;
`

export const InputField = styled.input`
  width: 330px;
  height: 47px;
  margin-bottom: 15px;
  padding-left: 8px;
  background-color: white;
  border: 2px solid #BEA597;
  border-radius: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: gray;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const CancleButtom = styled.div`
  width: 150px;
  height: 100%;
  color: #FF6636;
  background-color: white;
  border: 1px solid #FF6636;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ConfirmButton = styled.div`
  width: 150px;
  height: 100%;
  border: none;
  background-color: #ff6636;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
