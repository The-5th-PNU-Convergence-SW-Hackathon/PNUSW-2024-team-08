import * as S from "./Regular_Meetings.styles";
import Image from "next/image";

export default function RegularMeetingsUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.Container>
          <S.WrapperMeetingDetail>
            {props.regularMeetingsInfos.meetings.map((infos, index) => (
              <S.MeetingDetailContainer key={infos.id}>
                <S.MeetingDetailContentsBlock>
                  <S.DetailContentsDateBox>
                    <S.DetailDate>{infos.date.substring(0, 8)}</S.DetailDate>
                    <S.LeftDdayBox>
                      D-<S.Day>{props.daysDifferences[index]}</S.Day>
                    </S.LeftDdayBox>
                  </S.DetailContentsDateBox>
                  <S.MeetingName>{infos.name}</S.MeetingName>
                  <S.MeetingDetailInfoBox>
                    <Image
                      src="/images/volunteer/volunteerDetail/meeting_detail_main.svg"
                      alt="meeting_detail_main"
                      width={148}
                      height={92}
                      priority={true}
                    />
                    <S.MeetingDetailInfo>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>일시</S.DetailInfoName>
                        <S.DetailInfo>{infos.date}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>위치</S.DetailInfoName>
                        <S.DetailInfo>{infos.location}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>비용</S.DetailInfoName>
                        <S.DetailInfo>{infos.cost}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>
                          인원
                        </S.DetailInfoName>
                        <S.DetailInfo>
                          <S.ParticipatedPeople>{infos.participantCnt}</S.ParticipatedPeople>/
                          <S.MaximunPeople>{infos.maxNum}</S.MaximunPeople>
                        </S.DetailInfo>
                      </S.MeetingDetailItems>
                    </S.MeetingDetailInfo>
                  </S.MeetingDetailInfoBox>
                  <S.UsersAndParticipateBox>
                    <S.UsersItems>
                      {infos.participants.map((infos, index) => (
                        <S.UserImg
                          style={{ right: index > 0 ? index * 8 + "px" : "" }}
                          key={infos.id}
                        >
                          <Image
                            src={infos.profileURL}
                            alt="user"
                            width={25}
                            height={30}
                            priority={true}
                          />
                        </S.UserImg>
                      ))}
                    </S.UsersItems>
                    <S.ParticipateBtn
                      onClick={props.navigateTo(
                        `/volunteer/detail/regular_meetings/regular_meeting/${infos.id}`
                      )}
                    >
                      참가하기
                    </S.ParticipateBtn>
                  </S.UsersAndParticipateBox>
                </S.MeetingDetailContentsBlock>
              </S.MeetingDetailContainer>
            ))}
          </S.WrapperMeetingDetail>
          <S.AddMeeting
            style={{
              visibility: props.status == "member" ? "hidden" : "visible",
            }}
          >
            <Image
              src="/images/volunteer/volunteer_add_icon.svg"
              alt="volunteer_add_icon"
              width={28}
              height={28}
              priority={true}
            />
          </S.AddMeeting>
        </S.Container>
      </S.WrapperContents>
    </>
  );
}
