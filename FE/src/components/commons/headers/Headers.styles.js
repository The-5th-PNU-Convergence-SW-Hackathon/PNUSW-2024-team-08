import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
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
