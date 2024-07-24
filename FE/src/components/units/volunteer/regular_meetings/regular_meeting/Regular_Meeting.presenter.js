import * as S from "./Regular_Meeting.styles";
import Image from "next/image";

export default function RegularMeetingUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.MeetingMainImg>
          <Image
            src="/images/volunteer/regular_meeting/meeting_main_img.svg"
            alt="meeting_main_img"
            width={390}
            height={201}
          />
        </S.MeetingMainImg>
        <S.WrapperMeetingInfo>
          <S.MeetingInfoContainer>
            <S.MeetingTitle>{props.regularMeetingInfos.name}</S.MeetingTitle>
            <S.DetailInfoContainer>
              <S.InFosBlock>
                <S.InfoName>일시</S.InfoName>
                <S.DetailInfo>{props.regularMeetingInfos.date}</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>위치</S.InfoName>
                <S.DetailInfo>{props.regularMeetingInfos.location}</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>비용</S.InfoName>
                <S.DetailInfo>{props.regularMeetingInfos.cost + "원"}</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>인원</S.InfoName>
                <S.JoinInfoBlock>
                  <S.JoinedPeople>{props.regularMeetingInfos.participantNum}</S.JoinedPeople>/
                  <S.Maximun>{props.regularMeetingInfos.maxNum}</S.Maximun>
                </S.JoinInfoBlock>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>주최</S.InfoName>
                <S.DetailInfo>봉사천재 김포포</S.DetailInfo>
              </S.InFosBlock>
            </S.DetailInfoContainer>
            <S.DetailBlock>
            {props.regularMeetingInfos.description}
            </S.DetailBlock>
            <S.NextButtonBlock>
              <S.NextButtonItem>참여하기</S.NextButtonItem>
            </S.NextButtonBlock>
          </S.MeetingInfoContainer>
        </S.WrapperMeetingInfo>
        <S.Blank />
      </S.WrapperContents>
    </>
  )
}