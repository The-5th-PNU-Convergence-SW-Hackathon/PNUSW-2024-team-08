import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentsContainer = styled.div`
  width: 390px;
  height: calc(100vh - 100px);

  overflow-y: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */

  ::-webkit-scrollbar {
   display: none;
  }
`;

export const MeetingMainImg = styled.div`
  width: 100%;
  height: 201px;
`;

export const MainImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 201px;
  object-fit: cover;
`;

export const WrapperMeetingInfo = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  padding-bottom: 35px;
  border-bottom: 1px solid #DBDBDB;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const MeetingInfoContainer = styled.div`
  width: 371px;
  height: auto;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 23px;
`;

export const MeetingTitle = styled.p`
  width: 293px;
  height: auto;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.8px;
`;

export const DetailInfoContainer = styled.div`
  width: 345PX;
  height: 184px;
  margin-top: 26px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InFosBlock = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const InfoName = styled.p`
 width: 10%;
 height: 100%;
 font-size: 20px;
 color: #878787;
 letter-spacing: -0.3px;
 
`;

export const DetailInfo = styled.p`
  width: 80%;
  height: 100%;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

export const JoinInfoBlock = styled.div`
  width: 163px;
  height: 100%;
  font-size: 20px;

  display: flex;
  flex-direction: row;
`;

export const JoinedPeople = styled.p`
  width: 8px;
  height: 24px;
  color: #FF7272;
  margin-right: 5px;
`;

export const Maximun = styled.p`
  width: 8px;
  height: 24px;
`;

export const DetailBlock = styled.p`
  width: 344px;
  height: auto;
  font-size: 20px;
  margin-top: 40px;
  line-height: 24px;
  word-wrap: break-word;
  line-height: 24px;
  white-space: pre-wrap;

  letter-spacing: -0.2px;
`;

export const participantTitle = styled.div`
  width: 51px;
  height: 24px;
  font-size: 20px;
  color: #878787;
  letter-spacing: -0.7px;

  margin-left: 24px;
  margin-top: 16px;
`;

export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 61px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ParticipantPeopleContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 19px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ParticipantPeopleBlock = styled.div`
  width: 344px;
  height: 57px;
  position: relative;
  border-radius: 28.5px;
  background-color: #FEF8F2;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ParticipantImgBlock = styled.div`
  width: 49px;
  height: 49px;
  position: relative;
  border-radius: 50%;
  background-color: #fef8f2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ParticipantImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
`;

export const ParticipantNickName = styled.div`
  width: auto;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 16px;
`;