import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  position: relative;
  z-index: 3;
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
  position: relative;
  z-index: 3;

  filter: ${(props) => (props.active ? "brightness(0.8)" : "brightness(1.0)")};
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 23px;
  padding-bottom: 1px;
`;

export const LeftArrowTitleContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

export const MenuContainer = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  position: relative;
  cursor: pointer;
`;

export const MenuBlock = styled.ul`
  width: 127px;
  height: 87px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 42px;
  right: 0;

  visibility: ${(props) => (props.active ? "visible" : "hidden")};

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.li`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  color: black;
  border-bottom: 1px solid #dbdbdb;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Report = styled.li`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  color: #ff6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
