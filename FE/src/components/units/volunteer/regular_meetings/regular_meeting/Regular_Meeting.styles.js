import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: auto;

  margin: 0 auto;
`;

export const MeetingMainImg = styled.div`
  width: 390px;
  height: 201px;
`;

export const WrapperMeetingInfo = styled.div`
  width: 390px;
  height: auto;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

export const MeetingInfoContainer = styled.div`
  width: 345px;
  height: auto;
  margin-top: 16px;
`;

export const MeetingTitle = styled.p`
  width: 293px;
  height: 33px;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.8px;
`;

export const DetailInfoContainer = styled.div`
  width: 209px;
  hieght: 184px;
  margin-top: 26px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InFosBlock = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const InfoName = styled.p`
 width: 34px;
 height: 100%;
 font-size: 20px;
 color: #878787;
 letter-spacing: -0.3px;
 
`;

export const DetailInfo = styled.p`
  width: 163px;
  height: 100%;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

export const JoinInfoBlock = styled.div`
  width: 163px;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const JoinedPeople = styled.p`
  width: 8px;
  height: 24px;
  color: #FF7272
`;

export const Maximun = styled.p`
  width: 8px;
  height: 24px;
`;

export const DetailBlock = styled.p`
  width: 344px;
  height: auto;
  font-size: 16px;
  margin-top: 40px;
  line-height: 24px;
  word-wrap: break-word;

  letter-spacing: -0.2px;
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

export const Blank = styled.div`
  width: 390px;
  height: 70px;
  background-color: white;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;