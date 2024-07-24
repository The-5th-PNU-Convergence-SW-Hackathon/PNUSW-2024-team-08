import * as S from "./Notices.styles";
import Image from "next/image";

export default function NoticesUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.Container>
          {props.noticesInfos.notice.map((infos, index) => (
            <S.AnnouncementBlock
              onClick={props.navigateTo(`/volunteer/detail/notices/notice/${infos.id}`)}
              key={infos.id}
              style={{
                backgroundColor:
                  props.clickedIndex === index ? "#FFF0EB" : "#F6F6F6",
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
          ))}
          <S.AddAnnouncement
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
          </S.AddAnnouncement>
        </S.Container>
      </S.WrapperContents>
    </>
  );
}
