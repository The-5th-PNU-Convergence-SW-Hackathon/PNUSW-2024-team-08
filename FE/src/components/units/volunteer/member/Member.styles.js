import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const Container = styled.div`
  width: 344px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const SearchAndInviteContainer = styled.div`
  margin-top: 30px;
  width: 390px;
  height: ${(props) => (props.active ? "70px" : "116px")};
  border-bottom: 1px solid #DBDBDB;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const SearchContainer = styled.div`
  width: 344px;
  height: 44px;
  position: relative;
`;

export const Search = styled.input`
  width: 100%;
  height: 100%;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 50px;

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
  left: 14px;
  top: 7px;
`;

export const InviteContainer = styled.div`
  width: 344px;
  height: 41px;
  margin-bottom: 13px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
`;

export const InviteImg = styled.div`
  width: 40px;
  height: 100%;
  padding-left: 8px;
`;

export const InviteBlock = styled.div`
  width: 221px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const InviteTitle = styled.div`
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: bold;
`;

export const InviteExplain = styled.div`
  width: 100%;
  height: 20px;
  font-size: 13px;
  color: #AFAEAD;
`;

export const MemberInfo = styled.div`
  margin-top: 17px;
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: bold;
`;

export const MemberListContainer = styled.div`
  width: 344px;
  margin-top: 16px;
  border-radius: 28.5px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const MemberBlock = styled.div`
  width: 100%;
  height: ${props => (props.active ? "114px" : "57px")};
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 28.5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: ${props => props.adjustedPosition}px;
  left: 0;
  z-index: ${props => props.zIndex};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${({ animationState }) => animationState === 'exiting' || animationState === 'entering' ? 0 : 1};
  transform: ${({ animationState }) => animationState === 'exiting' ? 'scale(0.8)' : 'scale(1)'};
`;

export const MemberBox = styled.div`
  width: 344px;
  height: 57px;
  background-color: #fef8f2;
  border-radius: 28.5px;
  
  padding: 4px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const MemberIcon = styled.div`
  width: 49px;
  height: 49px;
`;

export const MemberImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  
`;

export const MemberName = styled.p`
  width: 120px;
  height: 57px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StatusBlock = styled.div`
  width: 170px;
  height: 57px;
  font-size: 13px;
  border-radius: 30px;


  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  visibility: visible;
`;

export const Status = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 20px;
  color: #AFAEAD;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 57px;

  display: flex;
  flex-direction: row;
  gap: 30px;

  opacity: ${props => props.active ? 1 : 0};
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease-in-out, visibility 0.1s ease-in-out;
  transition-delay: ${props => props.active ? '0.3s' : '0s'};
`;

export const ExpelBtn = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #FF6636;
  background-color: white;
  border: 1px solid #FF6636;
  margin-left:30px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RoleChangeBtn = styled.div`
  width: 120px;
  height: 40px;
  color: #FFFFFF;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  background-color: #FF6636;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;