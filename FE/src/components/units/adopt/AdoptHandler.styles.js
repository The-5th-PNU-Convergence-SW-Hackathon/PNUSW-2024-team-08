import styled from "@emotion/styled";

export const WrapperAdoptHandler = styled.div`
  width: 390px;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const AdoptTextContainer = styled.div`
  width: 270px;
  height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 70px;
  margin-bottom: 5px;
`;

export const AdoptText = styled.h1`
  font-size: 30px;
`;

export const AdoptMenuContainer = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 0 12px;
`;

export const AdoptMenu = styled.div`
  width: 104px;
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

  :hover {
    cursor: pointer;
  }
`;
