import styled from "@emotion/styled";

export const WrapperFaq = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: #FEF8F2;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FaqContentsContainer = styled.div`
  width: 344px;
  height: 284px;
`;

export const ImageBlock = styled.div`
  width: 344px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ImageBlurBox = styled.div`
  width: 344px;
  height: 200px;
  background-color: white;
  opacity: 0.5;
  position: absolute;
`;

export const FaqTitle = styled.p`
  width: 298px;
  height: 120px;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  margin-bottom: 20px;
  margin-left: 20px;
  letter-spacing: -1px;
`;

export const FaqDetail = styled.p`
  width: 344px;
  height: 72px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -1px;
  margin-top: 12px;
  letter-spacing: -0.4px;
`;

export const ConcludingWords = styled.div`
  width: 344px;
  height: 266px;
  font-size: 28px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 32px;
`;

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
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;