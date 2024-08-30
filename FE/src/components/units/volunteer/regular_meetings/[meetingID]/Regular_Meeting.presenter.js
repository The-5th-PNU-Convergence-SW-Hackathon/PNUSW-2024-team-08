import * as S from "./Regular_Meeting.styles";
import Image from "next/image";
import { useFormatDate, useFormatCost } from "../../hooks/useFormat";

export default function RegularMeetingUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.ContentsContainer>
          <S.MeetingMainImg>
            <S.MainImg
              src={props.regularMeetingInfos.profileURL}
              alt="meeting_main_img"
            />
          </S.MeetingMainImg>
          <S.WrapperMeetingInfo>
            <S.MeetingInfoContainer>
              <S.MeetingTitle>{props.regularMeetingInfos.name}</S.MeetingTitle>
              <S.DetailInfoContainer>
                <S.InFosBlock>
                  <S.InfoName>일시</S.InfoName>
                  <S.DetailInfo>{useFormatDate(props.regularMeetingInfos.meetDate)}</S.DetailInfo>
                </S.InFosBlock>
                <S.InFosBlock>
                  <S.InfoName>위치</S.InfoName>
                  <S.DetailInfo>{props.regularMeetingInfos.location}</S.DetailInfo>
                </S.InFosBlock>
                <S.InFosBlock>
                  <S.InfoName>비용</S.InfoName>
                  <S.DetailInfo>{useFormatCost(props.regularMeetingInfos.cost) + "원"}</S.DetailInfo>
                </S.InFosBlock>
                <S.InFosBlock>
                  <S.InfoName>인원</S.InfoName>
                  <S.JoinInfoBlock>
                    <S.JoinedPeople style={{ marginRight: props.regularMeetingInfos.participantNum >= 10 ? "10px" : "5px" }}
                    >{props.regularMeetingInfos.participantNum}
                    </S.JoinedPeople>
                    /
                    <S.Maximun>
                      {props.regularMeetingInfos.maxNum}
                    </S.Maximun>
                  </S.JoinInfoBlock>
                </S.InFosBlock>
                <S.InFosBlock>
                  <S.InfoName>주최</S.InfoName>
                  <S.DetailInfo>{props.regularMeetingInfos.organizer}</S.DetailInfo>
                </S.InFosBlock>
              </S.DetailInfoContainer>
              <S.DetailBlock dangerouslySetInnerHTML={{__html: props.regularMeetingInfos.description}} />
            </S.MeetingInfoContainer>
          </S.WrapperMeetingInfo>
          <S.participantTitle>
            참가자
          </S.participantTitle>
          <S.ParticipantPeopleContainer>
            {props.regularMeetingInfos.participants.map((infos, index) => (
              <S.ParticipantPeopleBlock>
                <S.ParticipantImgBlock
                  key={index}
                >
                  <S.ParticipantImg
                    src={infos.profileURL}
                    alt="user"
                  />
                </S.ParticipantImgBlock>
                <S.ParticipantNickName>
                  {infos.nickName}
                </S.ParticipantNickName>
              </S.ParticipantPeopleBlock>
            ))}
          </S.ParticipantPeopleContainer>
          {props.userRole !== "CREATOR" && (
            props.match ? (
              <S.NextButtonBlock onClick={props.handleRequestWithdraw}>
                <S.NextButtonItem style={{ backgroundColor: "black" }}>탈퇴하기</S.NextButtonItem>
              </S.NextButtonBlock>
            ) : (
              <S.NextButtonBlock onClick={props.handleRequestJoin}>
                <S.NextButtonItem>참여하기</S.NextButtonItem>
              </S.NextButtonBlock>
            )
          )}
        </S.ContentsContainer>
      </S.WrapperContents>
    </>
  )
}