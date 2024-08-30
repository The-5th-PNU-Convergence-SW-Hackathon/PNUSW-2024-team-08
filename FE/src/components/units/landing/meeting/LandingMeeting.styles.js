import styled from "@emotion/styled";
import Image from "next/image";

/*정기모임 큰 박스*/
export const MeetingDetailContainer = styled.div`
  width: 343px;
  height: 233px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 20px;
  margin-left: 7px;
  margin-bottom: 15px;

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
  width: 100%;
  height: 24px;
  margin-top: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailDate = styled.p`
  width: 79px;
  height: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.7px;
`;

export const LeftDdayBox = styled.div`
  width: 60px;
  height: 23px;
  border: 2px solid #ff6636;
  border-radius: 20px;
  color: #ff6636;
  font-size: 16px;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.p`
  color: #ff6636;
`;

export const MeetingName = styled.p`
  margin-top: 2px;
  margin-bottom: 3px;
  width: 100%;
  height: 19px;
  font-size: 18px;
  font-weight: 700;
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
  width: 135px;
  height: 14px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 3px;
`;

export const DetailInfoName = styled.p`
  width: 21px;
  height: 14px;
  font-size: 12px;
  color: #878787;
`;

export const DetailInfo = styled.div`
  width: 106px;
  height: 14px;
  font-size: 12px;
  font-weight: 400;
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

export const UserImgBox = styled.div`
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
  margin-right: 5px;

  font-size: 14px;
  font-weight: 400;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  width: 390px;
  height: 250px;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 195px);
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.85) 65%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 10;
`;
