import styled from "@emotion/styled";

export const WrapperAdoptHandler = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const AdoptMenuContainer = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 0 12px;
  position: relative;
`;

export const LeftArrowBlock = styled.div`
  width: 15px;
  height: 25px;
  position: absolute;
  top: 12px;
  left: 23px;

  :hover {
    cursor: pointer;
  }
`;

export const AdoptMenu = styled.div`
  width: 164px;
  height: 50px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  color: ${(props) => (props.active ? "black" : "#bdbdbd")};
  font-weight: ${(props) => (props.active ? 600 : "normal")};
  border-bottom: ${(props) => (props.active ? "3px solid #ff6636" : "none")};
  padding-bottom: ${(props) => (props.active ? "9px" : "12px")};
  margin: 0 5px;

  :hover {
    cursor: pointer;
  }
`;
