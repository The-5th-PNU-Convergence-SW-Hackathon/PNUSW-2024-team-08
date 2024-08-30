import * as S from "./Notices.styles";
import Image from "next/image";

export default function NoticesUI(props) {
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
              <S.InviteContainer onClick={props.navigateTo(`/volunteer/${props.id}/notices/addNotice`)}>
                <S.InviteImg>
                  <Image
                    src="/images/signup/add_profile.svg"
                    alt="add_meeting"
                    width={25}
                    height={25}
                  />
                </S.InviteImg>
                <S.InviteBlock>
                  <S.InviteTitle>공지사항 생성하기</S.InviteTitle>
                  <S.InviteExplain>멤버들에게 알릴 공지사항을 추가해주세요!</S.InviteExplain>
                </S.InviteBlock>
              </S.InviteContainer>
            )}
          </S.SearchAndInviteContainer>
          <S.NoticeNumBlock>
            총 <span style={{ color: "#FF6636" }}>{props.noticesInfos.length}건</span>의 공지사항이 있어요
          </S.NoticeNumBlock>
          {props.noticesInfos.length > 0 ? (
            props.noticesInfos.map((infos, index) => (
              <S.AnnouncementBlock
                onClick={props.navigateTo(
                  `/volunteer/${props.id}/notices/${infos.id}`
                )}
                key={infos.id}
                style={{
                  backgroundColor:
                    props.clickedIndex === index ? "#FEF8F2" : "#F6F6F6",
                }}
                onMouseDown={() => props.handleAnnouncementClick(index)}
              >
                <S.AnnouncementItem>
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
                    {infos.title.length > 39
                      ? `${infos.title.slice(0, 39)}...`
                      : infos.title}
                  </S.AnnouncementText>
                  <S.WritersBlock>
                    <S.Writer>{infos.name}</S.Writer>
                    <S.Time>{infos.date}</S.Time>
                  </S.WritersBlock>
                </S.AnnouncementItem>
              </S.AnnouncementBlock>
            ))
          ) : (
            <S.NoneNoticeContainer>
              <S.NoneNoticeBlock>
                <S.NoneNoticeTitle>맴버들에게 공지사항을 남겨보세요</S.NoneNoticeTitle>
                <S.NoneNoticeContent>공지 글을 자주 쓸수록<br />더 활발한 모임을 만들 수 있어요.</S.NoneNoticeContent>
              </S.NoneNoticeBlock>
            </S.NoneNoticeContainer>
          )}
          {props.scrollLoading && (
            <S.LoadingImgBox>
              <S.LoadingImg />
            </S.LoadingImgBox>
          )}
          {!props.isLoading && props.hasMore && !props.scrollLoading && (
            <S.MoreBtn onClick={() => props.loadMoreNotices()}>더보기</S.MoreBtn>
          )}
        </S.Container>
      </S.WrapperContents>
    </>
  );
}
