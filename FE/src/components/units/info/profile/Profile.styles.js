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

export const WrapperProfile = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const ProfileCard = styled.div`
  width: 390px;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProfilePhoto = styled.div`
  width: 105px;
  height: 105px;
  margin-right: 11px;
`;

export const ProfileInfoContainer = styled.div`
  width: 200px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 25px;
`;

export const ProfileNickname = styled.h1`
  font-size: 24px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const ProfileInfo = styled.div`
  color: #898684;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 3px;
`;

export const ProfileEditButton = styled.button`
  width: 342px;
  height: 44px;
  line-height: 44px;
  color: white;
  font-size: 20px;
  background-color: #240d05;
  border: none;
  border-radius: 30px;
  margin-top: 5px;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
  }
`;

export const WrapperInfo = styled.div`
  width: 390px;
  height: calc(100% - 188px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const InfoContainer = styled.div`
  width: 342px;
  margin: 18px 0;
`;

export const InfoTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const InfoItemList = styled.div`
  width: 334px;
  background-color: #fef8f2;
  border-radius: 20px;
  padding: 20px;
`;

export const InfoItemBlock = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  height: 35px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  :hover {
    cursor: pointer;
    color: #898684;
  }
`;

export const InfoItemAdded = styled.div`
  height: 35px;
  font-size: 16px;
  color: #898684;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
