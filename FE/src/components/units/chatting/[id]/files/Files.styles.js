import styled from "@emotion/styled";

export const WrapperFiles = styled.div`
  width: 390px;
  height: calc(100vh - 143px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 143px - 60px);
  }
`;
