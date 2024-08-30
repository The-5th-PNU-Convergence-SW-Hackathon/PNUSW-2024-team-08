import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  z-index: 10;
  position: relative;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 179px - 60px);
  }
`;

export const MapDisplay = styled.div`
  width: 390px;
  height: 337px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 0;

  .gm-style,
  .gm-style * {
    border: none !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-focus-ring-color: transparent;
  }
`;

export const ShelterInfoContainer = styled.div`
  width: 390px;
  height: calc(100vh - 516px);
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  padding-top: 30px;
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const ShelterInfoBlock = styled.div`
  width: 344px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #b2b2b2;
  margin-top: 15px;
  flex-shrink: 0;
  padding-bottom: 10px;
`;

export const ShelterInfoTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const ShelterInfoText = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #808080;
`;
