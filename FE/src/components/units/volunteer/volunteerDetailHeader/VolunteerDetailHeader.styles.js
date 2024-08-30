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
  background-color: white;
  position: relative;
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
  width: 300px;
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

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  max-width: 275px; // 대략적인 너비, 필요에 따라 조정
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  height: auto;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 42px;
  right: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: ${(props) => (props.active ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
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

  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Report = styled.li`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  color: #ff6636;
  border-bottom: 1px solid #dbdbdb;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 102, 54, 0.05);
  }
`;

export const Withdraw = styled.div`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  color: #ff6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 102, 54, 0.05);
  }
`;
