import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow-y: auto;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const ChattingTextContainer = styled.div`
  width: 195px;
  height: 76px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-right: 148px;
`;

export const ChattingText = styled.h1`
  font-size: 30px;
`;

export const ChattingSearchBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 35px;
  margin-bottom: 20px;
`;

export const ChattingSearch = styled.input`
  width: 342px;
  height: 44px;
  background-color: #f6f6f6;
  border: 2px solid transparent;
  outline: none;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 300;
  padding-left: 55px;

  ::placeholder {
    color: black;
  }

  :focus {
    border: 2px solid black;
    color: black;
  }
`;

export const ChattingSearchIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  left: 45px;
`;

export const ChattingBlock = styled.div`
  width: 344px;
  height: 60px;
  background-color: #fef8f2;
  border-radius: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;

export const UserProfileImg = styled.div`
  width: 38px;
  height: 38px;
  margin-left: 10px;
  margin-right: 6px;
`;

export const ChattingInfoBlock = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 3px;
`;

export const ChattingDate = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #828282;
  position: absolute;
  top: 2px;
  left: 155px;
`;

export const ChattingContent = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
