import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
  /* opacity: 0; */
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

export const ForPawImageContainer = styled.div`
  width: 52px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 8px;
`;

export const InfoContainer = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
`;

export const InfoIconContainer = styled.div`
  width: 44px;
  height: 44px;

  :hover {
    cursor: pointer;
  }
`;

export const ProfileIconContainer = styled.div`
  width: 44px;
  height: 44px;
  margin-left: 10px;

  :hover {
    cursor: pointer;
  }
`;

export const HeaderLogo = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 19px;
  padding-top: 8px;
`;
