import * as S from "./VolunteerRegion.styles";
import Image from "next/image";

export default function VolunteerRegionUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.VolunteerRegionMenuBlock>
          <S.VolunteerRegionMenu>
            <option value="" disabled selected>
              지역명
            </option>
          </S.VolunteerRegionMenu>
          <S.MenuArrowBlock>
            <Image
              src="/images/volunteer/volunteer_arrow_down_icon.svg"
              alt="volunteer_arrow_down_icon"
              width={18}
              height={20}
            />
          </S.MenuArrowBlock>
          <S.VolunteerRegionMenuSub>
            <option value="" disabled selected>
              지역명
            </option>
          </S.VolunteerRegionMenuSub>
          <S.MenuSubArrowBlock>
            <Image
              src="/images/volunteer/volunteer_arrow_down_icon.svg"
              alt="volunteer_arrow_down_icon"
              width={18}
              height={20}
            />
          </S.MenuSubArrowBlock>
        </S.VolunteerRegionMenuBlock>
        <S.VolunteerNewTitle>새로 생겼어요</S.VolunteerNewTitle>
        <S.VolunteerNewBlock>
          {props.volunteerNewGroupInfos.map((infos, index) => (
            <S.VolunteerNew key={infos.id}>
              <S.VolunteerNewImg>
                <Image
                  src="/images/volunteer/volunteer_new.svg"
                  alt="volunteer_new"
                  width={208}
                  height={120}
                />
              </S.VolunteerNewImg>
              <S.VolunteerNewNameBlock>
                <S.VolunteerNewName>{infos.name}</S.VolunteerNewName>
              </S.VolunteerNewNameBlock>
              <S.VolunteerNewInfoBlock>
                <S.VolunteerNewCategoryBlock>
                  <S.VolunteerNewCategory>
                    {infos.category}
                  </S.VolunteerNewCategory>
                </S.VolunteerNewCategoryBlock>
                <S.VolunteerNewRegion>
                  {props.findProvinceKo(infos.province) + " "}
                  {props.findDistrictKo(infos.district)}
                </S.VolunteerNewRegion>
              </S.VolunteerNewInfoBlock>
            </S.VolunteerNew>
          ))}
        </S.VolunteerNewBlock>
        <S.VolunteerNewAlarmBlock>
          <S.VolunteerNewAlarmIcon>
            <Image
              src="/images/volunteer/volunteer_new_alarm_icon.svg"
              alt="volunteer_new_alarm_icon"
              width={14}
              height={16}
            />
          </S.VolunteerNewAlarmIcon>
          새 모임 알림
        </S.VolunteerNewAlarmBlock>
        <S.VolunteerRegionTitle>장전동 모임</S.VolunteerRegionTitle>
        {props.volunteerRegionInfos.map((infos, index) => (
          <S.VolunteerBlock key={infos.id}>
            <S.VolunteerImg>
              <Image
                src="/images/volunteer/volunteer_1.svg"
                alt="volunteer_1"
                width={324}
                height={183}
              />
              <S.VolunteerLikeBlock
                onClick={(event) => {
                  event.stopPropagation();
                  props.handleToggleClick(infos.id);
                }}
              >
                <Image
                  src={
                    infos.isLike
                      ? "/images/volunteer/volunteer_like_icon.svg"
                      : "/images/volunteer/volunteer_unlike_icon.svg"
                  }
                  alt="volunteer_like_icon"
                  width={17}
                  height={14}
                />
                {infos.likeNum}
              </S.VolunteerLikeBlock>
            </S.VolunteerImg>
            <S.VolunteerTitleBlock>
              <S.VolunteerTitle>{infos.name}</S.VolunteerTitle>
            </S.VolunteerTitleBlock>
            <S.VolunteerText>
              {infos.description.length > 63
                ? `${infos.description.slice(0, 63)}...`
                : infos.description}
            </S.VolunteerText>
            <S.VolunteerInfoBlock>
              <S.VolunteerNumberOfMember>
                {infos.participation}명 참여중
              </S.VolunteerNumberOfMember>
              <S.VolunteerCategoryBlock>
                <S.VolunteerCategory>{infos.category}</S.VolunteerCategory>
              </S.VolunteerCategoryBlock>
              <S.VolunteerRegionBLock>
                <S.VolunteerRegion>
                  {props.findProvinceKo(infos.province) + " "}
                  {props.findDistrictKo(infos.district)}
                </S.VolunteerRegion>
              </S.VolunteerRegionBLock>
            </S.VolunteerInfoBlock>
          </S.VolunteerBlock>
        ))}
        <S.MoreBtn onClick={props.loadUpdatedVolunteerRegionData}>더보기</S.MoreBtn>
        <S.VolunteerAddIcon
          onClick={props.navigateTo("/volunteer/create_volunteer")}
        >
          <Image
            src="/images/volunteer/volunteer_add_icon.svg"
            alt="volunteer_add_icon"
            width={28}
            height={28}
          />
        </S.VolunteerAddIcon>
      </S.WrapperContents>
    </>
  );
}
