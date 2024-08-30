import * as S from "./VolunteerDetail.styles";
import Image from "next/image";

export default function VolunteerDetailUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.VolunteerIntroContainer>
          <S.IntroMainImgBlock>
            <Image
              src={props.volunteerDetailInfos.profileURL}
              alt="volunteer_main_image"
              width={344}
              height={160}
              priority={true}
              objectFit="cover"
            />
          </S.IntroMainImgBlock>
          <S.IntroTitle>{props.volunteerDetailInfos.name}</S.IntroTitle>
          <S.IntroDetail>
            {props.volunteerDetailInfos.description}
          </S.IntroDetail>
        </S.VolunteerIntroContainer>
        {props.userRole == "CREATOR" && (
          <S.ApproveContainer>
            <S.ApproveBlock>
              <S.Approve>가입승인 대기</S.Approve>
              <S.RightArrowImgBlock>
                <Image
                  onClick={props.navigateTo(`/volunteer/${props.id}/approve`)}
                  src="/images/volunteer/volunteerDetail/right_arrow.svg"
                  alt="right_arrow"
                  width={44}
                  height={44}
                  priority={true}
                />
              </S.RightArrowImgBlock>
            </S.ApproveBlock>
          </S.ApproveContainer>
        )}
        <S.AnnouncementContainer>
          <S.AnnouncementTitleBlock>
            <S.AnnouncementTitle>공지사항</S.AnnouncementTitle>
            {props.userRole !== "CREATOR" && (
              <S.RightArrowImgBlock>
                <Image
                  onClick={props.navigateTo(`/volunteer/${props.id}/notices`)}
                  src="/images/volunteer/volunteerDetail/right_arrow.svg"
                  alt="right_arrow"
                  width={44}
                  height={44}
                  priority={true}
                />
              </S.RightArrowImgBlock>
            )}
          </S.AnnouncementTitleBlock>
          <S.AnnouncementDetailContainer>
            {props.latestNotices.map((infos, index) => (
              <S.AnnouncementDetailBlock
                onClick={props.navigateTo(
                  `/volunteer/${props.id}/notices/${infos.id}`
                )}
                key={infos.id}
                style={{
                  backgroundColor:
                    props.clickedIndex === index ? "#FEF8F2" : "#F6F6F6",
                }}
                onMouseDown={() => props.handleAnnouncementClick(index)} // 마우스를 눌렀을 때만 처리
              >
                <S.AnnouncementItems>
                  <S.CheckBox
                    style={{
                      backgroundColor:
                        props.clickedIndex === index ? "#FF6636" : "#D9D9D9",
                    }}
                  >
                    <S.CheckImg>
                      <Image
                        src="/images/volunteer/volunteerDetail/check_icon.svg"
                        alt="check_icon"
                        width={27}
                        height={19}
                        priority={true}
                      />
                    </S.CheckImg>
                  </S.CheckBox>
                  <S.AnnouncementText>
                    {infos.title.length > 55
                      ? `${infos.title.slice(0, 55)}...`
                      : infos.title}
                  </S.AnnouncementText>
                </S.AnnouncementItems>
              </S.AnnouncementDetailBlock>
            ))}
          </S.AnnouncementDetailContainer>
        </S.AnnouncementContainer>
        <S.MeetingContainer>
          <S.MeetingTitleBlock>
            <S.MeetingTitle>정기모임</S.MeetingTitle>
            {props.userRole !== "CREATOR" && (
              <S.RightArrowImgBlock>
                <Image
                  onClick={props.navigateTo(`/volunteer/${props.id}/regular_meetings`)}
                  src="/images/volunteer/volunteerDetail/right_arrow.svg"
                  alt="right_arrow"
                  width={44}
                  height={44}
                  priority={true}
                />
              </S.RightArrowImgBlock>
            )}
          </S.MeetingTitleBlock>
          <S.WrapperMeetingDetail>
            {props.latestMeetings.map((infos, index) => (
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
                        <S.DetailInfoName>인원</S.DetailInfoName>
                        <S.DetailInfo>
                          <S.ParticipatedPeople>
                            {infos.participantNum}
                          </S.ParticipatedPeople>
                          /<S.MaximunPeople>{infos.maxNum}</S.MaximunPeople>
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
                            alt="participant_user"
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
                      {props.userRole === "USER" ? "참가하기" : "수정하기"}
                    </S.ParticipateBtn>
                  </S.UsersAndParticipateBox>
                </S.MeetingDetailContentsBlock>
              </S.MeetingDetailContainer>
            ))}
          </S.WrapperMeetingDetail>
        </S.MeetingContainer>
        <S.MemberContainer>
          <S.MemberTitleBlock>
            <S.MemberTitle>멤버목록</S.MemberTitle>
          </S.MemberTitleBlock>
          <S.MemberListContainer>
            {props.volunteerDetailInfos.members.map((infos, index) => (
              <S.MemberBox key={infos.id}>
                <S.MemberIcon>
                  <S.MemberImg
                    src={infos.profileURL}
                    alt={infos.name}
                  />
                </S.MemberIcon>
                <S.MemberName>{infos.name}</S.MemberName>
                <S.StatusBlock
                  style={{
                    visibility: infos.role == "USER" ? "hidden" : "visible",
                  }}
                >
                  <S.Status
                    style={{
                      backgroundColor:
                        infos.role == "CREATOR" ? "#FF6636" : "#240D05",
                    }}
                  >
                    {infos.role == "CREATOR" ? "관리자" : "매니저"}
                  </S.Status>
                </S.StatusBlock>
              </S.MemberBox>
            ))}
          </S.MemberListContainer>
          <S.Blank />
        </S.MemberContainer>
      </S.WrapperContents>
      <S.NextButtonBlock
        style={{
          backgroundColor: props.userRole == "visitor" ? "#FF6636" : "transparent",
          width: props.userRole == "visitor" ? "344px" : "60px",
        }}
      >
        <S.NextButtonItem
          style={{
            width: props.userRole == "visitor" ? "344px" : "40px",
          }}
        >
          {props.userRole === "visitor" ? (
            <S.JoinLetter onClick={() => props.handleFavClick()}>
              가입하기
            </S.JoinLetter>
          ) : (
            <S.ChatImgBox>
              <Image
                src="/images/navigation/chatting_icon_active.svg"
                alt="chat"
                width={40}
                height={40}
              />
            </S.ChatImgBox>
          )}
        </S.NextButtonItem>
      </S.NextButtonBlock>
    </>
  );
}
