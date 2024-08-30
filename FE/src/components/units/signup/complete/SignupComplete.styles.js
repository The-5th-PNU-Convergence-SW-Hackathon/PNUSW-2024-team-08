import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  overflow-y: scroll;

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

export const CompleteHeaderWrapper = styled.div`
  width: 390px;
  height: 258px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CompleteHeaderContainer = styled.div`
  width: 310px;
  height: 170px;
  margin-left: 25px;
`;

export const CompleteImageAndLogoBlock = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ImageItem = styled.div`
  width: 30px;
  height: 25px;
`;

export const LogoItem = styled.div`
  width: 73px;
  height: 31px;
`;

export const CompletePhrase = styled.div`
  width: 310px;
  height: 38px;
  font-size: 27px;
  font-weight: bold;
  line-height: 38px;
  margin-top: 32px;
  text-align: left;
`;

export const CompleteMsg = styled.div`
  width: 284px;
  height: 46px;
  font-size: 18px;
  margin-top: 14px;
`;

export const ComplateImageContainer = styled.div`
  width: 390px;
  height: 582px;
  position: relative;
`;

export const BlurrBlock = styled.div`
  width: 390px;
  height: 328px;
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  ); /* 그라데이션 설정 */
`;

/*css*/
export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

export const NextButtonItem = styled.button`
  background-color: #ff6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
