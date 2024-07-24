import styled from "@emotion/styled";

export const WrapperCats = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: #FDFAF7;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CatsMainContainer = styled.div`
  width: 390px;
  height: 315px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
`;

export const CatsMainImageBlurBox = styled.div`
  width: 390px;
  height: 315px;
  background-color: white;
  opacity: 0.5;
  position: absolute;
`;

export const CatsMainTitleBlock = styled.div`
  width: 199px;
  height: 124px;
  position: absolute;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const CatsMainTitle = styled.p`
  width: 199px;
  height: 66px;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -2px;
`;

export const CatsTitleContent = styled.p`
  width: 165px;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  margin-top: 10px;
  letter-spacing: -1px;
`;

export const CatsContentsContainer = styled.div`
  width: 344px;
  height: 327px;
  margin-top: 24px;
`;

export const CatsContentsTitle = styled.p`
  width: 344px;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const CatsContentsDetail = styled.p`
  width: 344px;
  height: 72px;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  margin-bottom: 18px;
  letter-spacing: -0.4px;
`;

export const ConcludingWords = styled.div`
  width: 344px;
  height: 266px;
  font-size: 28px;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 60px;
`;