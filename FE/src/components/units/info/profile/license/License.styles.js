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

export const WrapperLicense = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 20px;
  background-color: white;
  overflow-y: scroll;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 95px - 60px);
  }
`;

export const LicenseTitle = styled.div`
  width: 390px;
  height: 29px;
  line-height: 29px;
  font-size: 15px;
  font-weight: 600;
  background-color: #f5f5f5;
  margin-bottom: 25px;
  padding-left: 24px;
`;

export const CopyrightText = styled.div`
  width: 345px;
  font-size: 11px;
  font-weight: 400;
  border-bottom: 0.5px solid #dcdcdc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const LicenseText1 = styled.div`
  width: 345px;
  font-size: 10px;
  font-weight: 300;
  border-bottom: 0.5px solid #dcdcdc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const LicenseText2 = styled.div`
  width: 345px;
  font-size: 11px;
  font-weight: 300;
`;
