import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  overflow-y: auto;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 60px);
  }
`;

export const WraaperLogoAndImage = styled.div`
  width: 100%;
  height: 223px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoAndImageBlock = styled.div`
  width: 73px;
  height: 87.67px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperImage = styled.div`
  width: 58.19px;
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperLogo = styled.div`
  width: 73px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9.67px;
`;

export const WrapperLoginContents = styled.div`
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LoginContentsBlock = styled.div`
  width: 344px;
  /* height: 552px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const IdAndPassWordContainer = styled.form`
  width: 342px;
  height: 128px;
`;

export const IdInput = styled.input`
  width: 344px;
  height: 60px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  color: #bea597;
  font-size: 16px;

  :focus {
    border: 2px solid #bea597;
    outline: none;
  }
  ::placeholder {
    color: #bea597;
    font-size: 16px;
  }
`;

export const PassWordInput = styled.input`
  width: 344px;
  height: 60px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  margin-top: 8px;
  color: #bea597;
  font-size: 16px;

  :focus {
    border: 2px solid #bea597;
    outline: none;
  }
  ::placeholder {
    color: #bea597;
    font-size: 16px;
  }
`;

export const LoginContainer = styled.div`
  width: 344px;
  height: 128px;
  margin-top: 16px;
`;

export const LoginButton = styled.button`
  background-color: #ff6636;
  border-radius: 30px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const SignUpBtn = styled.button`
  background-color: white;
  border: 2px solid #ff6636;
  border-radius: 30px;
  font-size: 20px;
  color: black;
  cursor: pointer;
  margin-top: 8px;
`;

export const OrContainer = styled.div`
  width: 100%;
  height: 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const KakaoAndGoogleBlock = styled.div`
  width: 344px;
  height: 128px;
  margin-top: 24px;
`;

export const KakaoButton = styled.button`
  background-color: #ffeb04;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  cursor: pointer;
  color: #000;
`;

export const GoogleButton = styled.button`
  background-color: #f9f9f9;
  border: 2px solid #dcdcdc;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  margin-top: 8px;
  padding-right: 15px;
`;

export const AccoutAndInfoContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
`;

export const AccoutFind = styled.div`
  width: 138px;
  height: 20px;
  color: #a1a1a1;
  border-bottom: 1px solid #a1a1a1;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BrowseAsGeust = styled.div`
  width: 58px;
  height: 20px;
  color: #a1a1a1;
  border-bottom: 1px solid #a1a1a1;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;

export const InfoPaw = styled.div`
  width: 158px;
  height: 17px;
  color: #a1a1a1;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 27px;
`;
