import * as S from "./VolunteerDetail.styles";
import Image from "next/image";

export default function VolunteerDetailUI(props) {
  return (
    <>
      <S.Judge
        style={{ visibility: props.isJoinedClikced ? "visible" : "hidden" }}
      >
        <S.JudgeText>가입 멤버만 확인할 수 있습니다.</S.JudgeText>
      </S.Judge>
      <S.WrapperContents active={props.isJoinedClikced}>
        <S.VolunteerIntroContainer>
          <S.IntroMainImgBlock>
            <Image
              src={props.volunteerDetailInfos.profileURL}
              alt="volunteer_main_image"
              width={344}
              height={160}
              priority={true}
            />
          </S.IntroMainImgBlock>
          <S.IntroTitle>{props.volunteerDetailInfos.name}</S.IntroTitle>
          <S.IntroDetail>
            {props.volunteerDetailInfos.description}
          </S.IntroDetail>
        </S.VolunteerIntroContainer>
        <S.AnnouncementContainer>
          <S.AnnouncementTitleBlock>
            <S.AnnouncementTitle>공지사항</S.AnnouncementTitle>
            <S.RightArrowImgBlock>
              <Image
                onClick={props.navigateTo("/volunteer/detail/notices")}
                src="/images/volunteer/volunteerDetail/right_arrow.svg"
                alt="right_arrow"
                width={44}
                height={44}
                priority={true}
              />
            </S.RightArrowImgBlock>
          </S.AnnouncementTitleBlock>
          <S.AnnouncementDetailContainer>
            {props.volunteerDetailInfos.notices.map((infos, index) => (
              <S.AnnouncementDetailBlock
                onClick={props.navigateTo(`/volunteer/detail/notices/notice/${infos.id}`)}
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
            <S.RightArrowImgBlock>
              <Image
                onClick={props.navigateTo("/volunteer/detail/regular_meetings")}
                src="/images/volunteer/volunteerDetail/right_arrow.svg"
                alt="right_arrow"
                width={44}
                height={44}
                priority={true}
              />
            </S.RightArrowImgBlock>
          </S.MeetingTitleBlock>
          <S.WrapperMeetingDetail>
            {props.volunteerDetailInfos.meetings.map((infos, index) => (
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
                        <S.DetailInfoName>인원</S.DetailInfoName>
                        <S.DetailInfo>
                          <S.ParticipatedPeople>
                            {infos.participantCnt}
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
                          <Image
                            src={participant.profileURL}
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
        </S.MeetingContainer>
        <S.MemberContainer>
          <S.MemberTitleBlock>
            <S.MemberTitle>회원목록</S.MemberTitle>
          </S.MemberTitleBlock>
          {props.volunteerDetailInfos.members.map((infos, index) => (
            <S.MemberListContainer key={infos.id}>
              <S.MemberBox
              // onClick={props.navigateTo('/volunteer/detail/regular_meetings/regular_meeting')}
              >
                <S.MemberIcon>
                  <Image
                    src="/images/volunteer/volunteerDetail/member_icon.svg"
                    alt="member_icon"
                    width={49}
                    height={49}
                    priority={true}
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
                        infos.role == "ADMIN" ? "#FF6636" : "#240D05",
                    }}
                  >
                    {infos.role == "ADMIN" ? "관리자" : "매니저"}
                  </S.Status>
                </S.StatusBlock>
              </S.MemberBox>
            </S.MemberListContainer>
          ))}
          <S.Blank />
        </S.MemberContainer>
      </S.WrapperContents>
      <S.NextButtonBlock
        style={{
          backgroundColor: props.status == "member" ? "white" : "#FF6636",
          width: props.status == "member" ? "60px" : "344px"
        }}
      >
        <S.NextButtonItem
          style={{
            width: props.status == "member" ? "60px" : "344px"
          }}
          onClick={() => props.handleFavClick(`/volunteer/detail/${props.id}`)}
        >
          {props.status === "member" ?
            <Image
              src="/images/volunteer/chat_Icon.svg"
              alt="chat"
              width={60}
              height={60}
            />
            :
            "가입하기"
          }
        </S.NextButtonItem>
      </S.NextButtonBlock>
    </>
  );
}
