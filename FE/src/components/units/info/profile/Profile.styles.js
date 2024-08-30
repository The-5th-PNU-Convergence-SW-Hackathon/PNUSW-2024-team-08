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

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 95px - 60px);
  }
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
  border-radius: 50%;
  overflow: hidden;
  width: 103px;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 18px;
  margin-left: 7px;
  margin-bottom: 8px;
`;

export const InfoItemList = styled.div`
  width: 334px;
  background-color: #f4f4f4;
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
  color: ${(props) => (props.isSocialJoined ? "#898684" : "#000")};
`;

export const InfoText = styled.span`
  cursor: ${(props) => (props.isSocialJoined ? "not-allowed" : "pointer")};
  :hover {
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

export const LogoutModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const LogoutModalContainer = styled.div`
  background: white;
  width: 350px;
  height: 210px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  position: relative;
  gap: 25px;
  z-index: 101;
`;

export const LogoutModalText = styled.div`
  font-size: 21px;
  font-weight: 700;
  position: absolute;
  top: 35px;
`;

export const LogoutSubModalText = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 45px;
`;

export const LogoutModalBtnBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 15px;
`;

export const LogoutCancelModalBtn = styled.button`
  width: 151px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
`;

export const LogoutConfirmModalBtn = styled.button`
  width: 151px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ff6636;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
`;
