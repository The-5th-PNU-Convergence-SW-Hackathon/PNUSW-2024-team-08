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
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const Container = styled.div`
  width: 344px;
  height: auto;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const WrapperMeetingDetail = styled.div`
  width: 100%; /*344px*/
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const MeetingInfo = styled.div`
  margin-top: 17px;
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: bold;
`;

/*정기모임 큰 박스*/
export const MeetingDetailContainer = styled.div`
  width: 343px;
  height: 233px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 20px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  /*display 설정*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/*정기모임 블록 안에 있는 내용 박스*/
export const MeetingDetailContentsBlock = styled.div`
  width: 312px;
  height: 193px;

  /*display 설정*/
  display: flex;
  flex-direction: column;
`;

export const DetailContentsDateBox = styled.div`
  width: 100%; /*312px*/
  height: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailDate = styled.p`
  width: 79px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.7px;
`;

export const LeftDdayBox = styled.div`
  width: 57px;
  height: 24px;
  border: 2px solid #ff6636;
  border-radius: 20px;
  color: #ff6636;
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.p`
  color: #ff6636;
  font-size: 16px;
`;

export const MeetingName = styled.p`
  margin-top: 8px;
  width: 100%;
  height: 19px;
  font-size: 16px;
  font-weight: bold;
`;

export const MeetingDetailInfoBox = styled.div`
  margin-top: 8px;
  width: 100%; /*312px*/
  height: 92px;

  display: flex;
  flex-direction: row;
`;

export const MeetingDetailImg = styled.div`
  width: 148px;
  height: 92px;
`;

export const MeetingDetailInfo = styled.div`
  margin-left: 16px;
  width: 150px;
  height: 92px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MeetingDetailItems = styled.div`
  width: 125px;
  height: 14px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailInfoName = styled.p`
  width: 21px;
  height: 14px;
  font-size: 12px;
  color: #878787;
`;

export const DetailInfo = styled.div`
  width: 96px;
  height: 14px;
  font-size: 12px;
  font-weight: 500;
  color: black;
  letter-spacing: -0.5px;

  display: flex;
  flex-direction: row;
`;

export const ParticipatedPeople = styled.p`
  color: #ff7272;
`;

export const MaximunPeople = styled.p`
  color: black;
`;

export const UsersAndParticipateBox = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UsersItems = styled.div`
  width: 226px;
  height: 30px;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: -5px;
`;

export const UserImg = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const ParticipantImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2.5px solid #FEF8F2;
`;

export const ParticipateBtn = styled.button`
  width: 86px;
  height: 30px;
  background-color: ${(props) => (props.active ? "#240d05" : "white")};
  color: ${(props) => (props.active ? "white" : "#ff6636")};
  border: ${(props) => (props.active ? "none" : "1px solid #ff6636")};
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

export const AddMeeting = styled.div`
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
