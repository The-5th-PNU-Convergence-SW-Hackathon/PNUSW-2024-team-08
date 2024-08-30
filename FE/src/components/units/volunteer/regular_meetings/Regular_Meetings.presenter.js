import * as S from "./Regular_Meetings.styles";
import Image from "next/image";

export default function RegularMeetingsUI(props) {
  return (
    <>
      <S.WrapperContents ref={props.scrollRef}>
        <S.Container>
          <S.SearchAndInviteContainer active={props.userRole === "USER"}>
            <S.SearchContainer>
              <S.Search
                type="text"
                placeholder="검색어를 입력해주세요"
                value={props.search}
                onChange={props.handleSearch}
              />
              <S.SearchImageContainer>
                <Image
                  src="/images/info/search_icon_info.svg"
                  alt="search_icon"
                  width={31.36}
                  height={31.36}
                />
              </S.SearchImageContainer>
            </S.SearchContainer>
            {props.userRole == "CREATOR" && (
              <S.InviteContainer onClick={props.navigateTo(`/volunteer/${props.id}/regular_meetings/addMeeting`)}>
                <S.InviteImg>
                  <Image
                    src="/images/signup/add_profile.svg"
                    alt="add_meeting"
                    width={25}
                    height={25}
                  />
                </S.InviteImg>
                <S.InviteBlock>
                  <S.InviteTitle>정모 생성하기</S.InviteTitle>
                  <S.InviteExplain>정기모임을 생성해서 모임을 가져보세요.</S.InviteExplain>
                </S.InviteBlock>
              </S.InviteContainer>
            )}
          </S.SearchAndInviteContainer>
          <S.MeetingInfo>
            진행중인 정모 <span style={{color: "#FF6636"}}>{props.regularMeetingsInfos.length}개</span>
          </S.MeetingInfo>
          <S.WrapperMeetingDetail>
            {props.regularMeetingsInfos.length > 0 ? (
              props.regularMeetingsInfos.map((infos, index) => (
                <S.MeetingDetailContainer key={infos.id}>
                  <S.MeetingDetailContentsBlock>
                    <S.DetailContentsDateBox>
                      <S.DetailDate>{infos.meetDate.substring(0, 8)}</S.DetailDate>
                      <S.LeftDdayBox>
                        D-<S.Day>{props.daysDifferences[index]}</S.Day>
                      </S.LeftDdayBox>
                    </S.DetailContentsDateBox>
                    <S.MeetingName>{infos.name}</S.MeetingName>
                    <S.MeetingDetailInfoBox>
                      <Image
                        src={infos.profileURL}
                        alt="meeting_detail_main"
                        width={148}
                        height={92}
                        priority={true}
                        objectFit="cover"
                      />
                      <S.MeetingDetailInfo>
                        <S.MeetingDetailItems>
                          <S.DetailInfoName>일시</S.DetailInfoName>
                          <S.DetailInfo>{infos.meetDate}</S.DetailInfo>
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
                            <S.ParticipatedPeople>{infos.participantNum}</S.ParticipatedPeople>/
                            <S.MaximunPeople>{infos.maxNum}</S.MaximunPeople>
                          </S.DetailInfo>
                        </S.MeetingDetailItems>
                      </S.MeetingDetailInfo>
                    </S.MeetingDetailInfoBox>
                    <S.UsersAndParticipateBox>
                      <S.UsersItems>
                        {infos.participants.map((participant, index) => (
                          <S.UserImg
                            style={{ right: index > 0 ? index * 8 + "px" : "" }}
                            key={index}
                          >
                            <S.ParticipantImg
                              src={participant}
                              alt="participate_user"
                            />
                          </S.UserImg>
                        ))}
                      </S.UsersItems>
                      <S.ParticipateBtn
                        active={props.userRole === "USER"}
                        onClick={props.navigateTo(
                          `/volunteer/${props.id}/regular_meetings/${infos.id}`
                        )}
                      >
                        {props.userRole == "USER" ? "참가하기" : "수정하기"}
                      </S.ParticipateBtn>
                    </S.UsersAndParticipateBox>
                  </S.MeetingDetailContentsBlock>
                </S.MeetingDetailContainer>
              ))
            ) : null}
          </S.WrapperMeetingDetail>
          {props.scrollLoading && (
            <S.LoadingImgBox>
              <S.LoadingImg />
            </S.LoadingImgBox>
          )}
        </S.Container>
      </S.WrapperContents>
    </>
  );
}
