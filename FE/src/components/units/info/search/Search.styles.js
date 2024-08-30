import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 163px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

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

export const WrapperSearch = styled.div`
  width: 390px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const SearchContainer = styled.div`
  width: 390px;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

export const SearchWindow = styled.input`
  width: 253px;
  height: 44px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 50px;
  color: #bea597;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const SearchImageContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 37px;
  top: 30px;
`;

export const CancelButton = styled.button`
  width: 73px;
  height: 44px;
  line-height: 44px;
  background-color: #240d05;
  border: none;
  border-radius: 22px;
  font-size: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

export const SearchContentsContainer = styled.div`
  width: 390px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
`;

export const SearchContent = styled.div`
  //나중에 height auto로 변경*
  width: 342px;
  height: auto;
  flex-shrink: 0;
  margin-top: 24px;
`;

export const ContentTitle = styled.p`
  width: 100%;
  height: 36px;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

export const ContentBlocks = styled.div`
  //나중에 height auto로 변경*
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContentBlock = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  border-bottom: 1px solid #DBDBDB;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 74px;
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #D9D9D9;
  border-radius: 10px;
`;

export const ContentInfos = styled.div`
  width: 252px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NameAndDateBlock  = styled.div` /*post에만 붙어줄것*/
  width: 252px;
  height: 20px;

  display: flex;
  flex-direction: row;
`;

export const ContentName = styled.p`
  width: 170px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  letter-spacing: -0.4px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Date = styled.div`
  width: auto;
  height: 100%;
  color: #B6B6B6;
`;

export const NickName = styled.div`
  width: 50px;
  height: 100%;
  color: #B6B6B6;
`;

export const ContentDetail = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  letter-spacing: -0.5px;
  overflow: hidden;
  text-overflow: ellipsis;  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContentDetailInfo = styled.div`
  width: auto;
  height: 25px;
  padding-top: 5px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentCategory = styled.div`
  width: auto;
  height: 100%;
  background-color: #D9D9D9;
  border-radius: 20px;
  padding-left: 7px;
  padding-right: 7px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LikeImg = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LikeNum = styled.div`
  width: 17px;
  height: 100%;
  margin-left: 1px;

`;

export const ContentDistrict = styled.div`
  width: auto;
  height: 100%;
  padding-left: 5px;
  color: #B6B6B6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentParticipantNum = styled.div`
  width: auto;
  height: 100%;
  padding-left: 5px;
  color: #B6B6B6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentMeetingNum = styled.div`
  width: auto;
  height: 100%;
  padding-left: 5px;
  color: #FF6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReqInfosBtn = styled.div`
  width: 99px;
  height: 44px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 30px;
  border: 2px solid #ff6636;
  color: black;
  margin-top: 24px;
  margin: 24px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
`;
