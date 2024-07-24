import styled from "@emotion/styled";

export const WrapperNavigation = styled.div`
  width: 390px;
  height: 84px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  border-top: 1px solid #dbdbdb;
  background-color: white;
  position: relative;
  z-index: 10;
  filter: ${(props) => (props.active ? "brightness(0.8)" : "brightness(1.0)")};
`;

export const NavigationIconContainer = styled.div`
  width: 44px;
  height: 44px;
  padding-top: 10px;
  z-index: 10;

  :hover {
    cursor: pointer;
  }
`;
