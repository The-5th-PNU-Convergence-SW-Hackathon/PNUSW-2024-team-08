import styled from "@emotion/styled";
import DaumPostcode from "react-daum-postcode";

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

export const WrapperInquire = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  overflow-y: auto;
  padding-bottom: 20px;

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

export const InfoContainer = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const InfoTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-top: 30px;
`;

export const InfoLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const InfoLargeBlock = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const InfoLargeInput = styled.input`
  width: 342px;
  height: 44px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  color: #bea597;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const GenderAgeBlock = styled.div`
  width: 342px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoSmallBlock = styled.div`
  width: 163px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoSmallInput = styled.input`
  width: 163px;
  height: 44px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 12px;
  margin-top: 15px;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const InfoAddressSearchBlock = styled.div`
  width: 342px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoPostalCodeInput = styled.input`
  width: 253px;
  height: 44px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding: 0px 12px;
  margin-bottom: 10px;
  color: #bea597;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const InfoSearchButton = styled.button`
  width: 73px;
  height: 44px;
  background-color: #240d05;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const InquireButton = styled.button`
  background-color: #ff6636;
  color: #ffffff;
  margin-top: 50px;
`;

export const AddressModalOverlay = styled.div`
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

export const AddressModalContent = styled.div`
  background: white;
  width: 350px;
  height: 500px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 101;
`;

export const AddressTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;
