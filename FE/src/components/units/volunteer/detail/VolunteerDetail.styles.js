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
  padding-bottom: 10px;
  filter: ${(props) => (props.active ? "brightness(0.8)" : "brightness(1.0)")};

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const VolunteerIntroContainer = styled.div`
  width: 344px;
  height: 224px;
  margin-top: 40px;
`;

export const IntroMainImgBlock = styled.div`
  width: 344px;
  height: 160px;
`;

export const IntroTitle = styled.p`
  width: 100%;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
`;

export const IntroDetail = styled.p`
  width: 100%;
  height: 19px;
  font-size: 16px;
  margin-top: 8px;
`;

export const AnnouncementContainer = styled.div`
  width: 344px;
  margin-top: 30px;
`;

export const AnnouncementTitleBlock = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
`;

export const AnnouncementTitle = styled.p`
  width: 300px;
  height: 44px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0px;
`;

export const RightArrowImgBlock = styled.div`
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

export const AnnouncementDetailContainer = styled.div`
  width: 100%;
  margin-top: 6px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const AnnouncementDetailBlock = styled.div`
  width: 343px;
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

export const AnnouncementItems = styled.div`
  width: 314px;
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
  width: 267px;
  height: 34px;
  font-size: 14px;
  letter-spacing: -0.7px;
  margin-left: 10px;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MeetingContainer = styled.div`
  width: 344px;
  margin-top: 40px;
`;

export const MeetingTitleBlock = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
`;

export const MeetingTitle = styled.p`
  width: 300px;
  height: 44px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0px;
`;

export const WrapperMeetingDetail = styled.div`
  width: 100%; /*344px*/
  margin-top: 6px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
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
`;

export const UserImg = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 50%;
  background-color: #fef8f2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ParticipateBtn = styled.button`
  width: 86px;
  height: 30px;
  background-color: #240d05;
  border-radius: 20px;
  cursor: pointer;

  font-size: 16px;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MemberContainer = styled.div`
  width: 344px;
  margin-top: 40px;
`;

export const MemberTitleBlock = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
`;

export const MemberTitle = styled.p`
  width: 300px;
  height: 44px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0px;
`;

export const MemberListContainer = styled.div`
  width: 344px;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const MemberBox = styled.div`
  width: 344px;
  height: 57px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
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

export const MemberName = styled.p`
  width: 189px;
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
  width: 86px;
  height: 57px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  visibility: visible;
`;

export const Status = styled.div`
  width: 86px;
  height: 30px;
  border-radius: 20px;
  background-color: #ff6636;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/*떠있는 버튼을 위한 공간 만들어주기*/
export const Blank = styled.div`
  width: 390px;
  height: 80px;
`;

/*버튼 css*/
export const NextButtonBlock = styled.div`
  width: 344px;
  height: 60px;
  border-radius: 30px;
  position: fixed;
  bottom: 100px;
  right: calc(50% - 172px);

  /*display 설정*/
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const NextButtonItem = styled.button`
  background-color: transparent;
  border-radius: 30px;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

/*가입안되었을 때*/
export const Judge = styled.div`
  margin-top: 240px;
  width: 344px;
  height: 72px;
  border-radius: 16px;
  background-color: white;
  position: fixed;
  right: calc(50% - 172px);
  visibility: hidden;
  z-index: 2;

  /*display 설정*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const JudgeText = styled.p`
  width: 239px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.6px;
`;
