import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuBlock = styled.div`
  width: 12vw;
  height: 21.484vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 105px;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 3.906vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #F4F4F5;
  }

  background-color: ${(props) => (props.active? "#F4F4F5" : "white")};

  padding-left: 15px;
`;

export const MenuImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuTitle = styled.p`
  width: 6.25vw;
  height: 100%;
  font-size: 1.111vw;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 0.347vw;
`;