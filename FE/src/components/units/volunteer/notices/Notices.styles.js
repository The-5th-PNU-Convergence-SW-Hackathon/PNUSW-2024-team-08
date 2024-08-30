import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const Container = styled.div`
  width: 344px;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;
`;

export const SearchAndInviteContainer = styled.div`
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

export const NoticeNumBlock = styled.div`
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 17px;
  margin-bottom: 20px;
`;

export const AnnouncementBlock = styled.div`
  width: 344px;
  height: 57px;
  border: 1px solid #f6f2ee;
  border-radius: 16px;
  cursor: pointer;
  background-color: #f6f6f6;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const AnnouncementItem = styled.div`
  width: 319px;
  height: 38px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 5px;

  /*display 영역*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckImg = styled.div`
  width: 27px;
  height: 19px;
`;

export const AnnouncementText = styled.p`
  width: 198px;
  height: 34px;
  font-size: 14px;
  letter-spacing: -0.7px;
  margin-left: 10px;
  margin-right: 12px;

  overflow: hidden;
`;

export const WritersBlock = styled.div`
  width: 59px;
  height: 34px;
  font-size: 12px;
  font-weight: 590;
  color: #7b7b7b;
  letter-spacing: -0.4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4.5px;
`;

export const Writer = styled.p`
  width: 100%; /*59px*/
  height: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Time = styled.p`
  width: 100%;
  height: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const NoneNoticeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 500px);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoneNoticeBlock = styled.div`
  width: 208px;
  height: 83px;
  padding-top: 3px;
  padding-bottom: 3px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;

export const NoneNoticeTitle = styled.div`
  width: 100%;
  height: 28px;
  color: #585757;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.7px;
`;

export const NoneNoticeContent = styled.div`
  width: 100%;
  height: 36px;
  color: #585757;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingImgBox = styled.div`
  height: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoadingImg = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid #ff6636;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
`;

export const MoreBtn = styled.button`
  width: 100PX;
  height: 44PX;
  font-size: 20px;
  font-weight: 500;
  border: 2px solid #FF6636;
  margin-top: 15px;
  cursor: pointer;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddAnnouncement = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6636;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 105px;
  right: calc(50% - 172px);
`;
