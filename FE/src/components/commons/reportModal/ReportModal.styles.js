import styled from 'styled-components';

export const ModalContainer = styled.div`
  margin: 0 auto;
  width: 390px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding-bottom: 83px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalContent = styled.div`
  width: 350px;
  border-radius: 13px;
  height: auto;
  background-color: white;
`;

export const ReportTitleContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CancleReport = styled.div`
  width: 100%;
  height: 24PX;
  cursor: pointer;
  margin-top: 19px;
  margin-right: 19px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const ReportTitle = styled.div`
  width: 100%;
  height: 25px;
  font-size: 21px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Expalin = styled.div`
  width: 100%;
  height: 17px;
  margin-top: 11px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const ReportBlock = styled.div`
  margin: 0 auto;
  width: 304px;
  height: 302px;
  margin-top: 42px;

  display: flex;
  flex-direction: column;
  gap: 6px;

`;

export const Report = styled.div`
  width: 100%;
  height: 50px;
  background-color: #F2F2F2;
   border-radius: 7px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReportInput = styled.input`
 width: 14px;
  height: 14px;
  margin-right: 10px;
  appearance: none;
  border: 1px solid #AFAFAF;
  outline: none;
  cursor: pointer;
  background-color: white;

  &:checked {
    position: relative;
    &:after {
      content: '✔';
      font-size: 12px;
      color: #FF6636;
      position: absolute;
      top: -2px;
      left: 1px;
    }
  }
`;

export const ReportLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
  color: #595959;
  font-size: 15px;
`;

export const ReportBtn = styled.div`
  margin: 0 auto;
  width: 308px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? "#FF6636" : "#E2E2E2")};;
  color: ${(props) => (props.active ? "white" : "#AFAFAF")};
  border: ${(props) => (props.active ? "none" : "1px solid #AFAFAF")};
  font-size: 18px;
  font-weight: bold;
  margin-top: 56px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


