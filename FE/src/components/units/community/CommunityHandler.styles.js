import styled from "@emotion/styled";

export const WrapperCommunityHandler = styled.div`
  width: 390px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const CommunityMenuContainer = styled.div`
  width: 390px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommunityMenu = styled.div`
  width: 104px;
  height: 52px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  color: ${(props) => (props.active ? "black" : "#bdbdbd")};
  font-weight: ${(props) => (props.active ? 600 : "normal")};
  border-bottom: ${(props) => (props.active ? "4px solid #ff6636" : "none")};
  padding-bottom: ${(props) => (props.active ? "8px" : "12px")};

  :hover {
    cursor: pointer;
  }
`;
