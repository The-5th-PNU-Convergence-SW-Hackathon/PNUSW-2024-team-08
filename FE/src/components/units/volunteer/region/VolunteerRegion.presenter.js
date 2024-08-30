import * as S from "./VolunteerRegion.styles";
import Image from "next/image";

export default function VolunteerRegionUI(props) {
  return (
    <>
      <S.WrapperContents ref={props.scrollRef}>
        <S.Notice>다른 지역의 모임도 볼 수 있어요!</S.Notice>
        <S.VolunteerRegionMenuBlock ref={props.wrapperRef}>
          <S.VolunteerRegionMenu
            isProvinceFocused={props.isProvinceFocused}
            onClick={props.toggleProvinceDropdown}
          >
            {props.selectedProvince}
          </S.VolunteerRegionMenu>
          <S.MenuArrowBlock
            isProvinceFocused={props.isProvinceFocused}
            onClick={props.toggleProvinceDropdown}
            className={props.isProvinceDropdownOpen ? 'open' : ''}
          >
            <Image
              src="/images/volunteer/volunteer_arrow_down_icon.svg"
              alt="volunteer_arrow_down_icon"
              width={18}
              height={20}
            />
          </S.MenuArrowBlock>
          <S.ProvinceDropdown className={props.isProvinceDropdownOpen ? 'open' : ''}>
            {Object.keys(props.regions).map((province, index) => (
              <S.ProvinceOption
                key={index}
                onClick={() => props.handleProvinceSelect(province)}
              >
                {province}
              </S.ProvinceOption>
            ))}
          </S.ProvinceDropdown>
          <S.VolunteerRegionMenuSub
            isDistrictFocused={props.isDistrictFocused}
            onClick={props.toggleDistrictDropdown}
          >
            {props.selectedDistrict}
          </S.VolunteerRegionMenuSub>
          <S.MenuSubArrowBlock
            isDistrictFocused={props.isDistrictFocused}
            onClick={props.toggleDistrictDropdown}
            className={props.isDistrictDropdownOpen ? 'open' : ''}
          >
            <Image
              src="/images/volunteer/volunteer_arrow_down_icon.svg"
              alt="volunteer_arrow_down_icon"
              width={18}
              height={20}
            />
          </S.MenuSubArrowBlock>
          <S.DistrictDropdown className={props.isDistrictDropdownOpen ? 'open' : ''}>
            {props.regions[props.selectedProvince]
              ? Object.keys(props.regions[props.selectedProvince]).map(
                (district, index) => (
                  <S.DistrictOption
                    key={index}
                    onClick={() =>
                      props.handleDistrictSelect(district)
                    }
                  >
                    {district}
                  </S.DistrictOption>
                )
              )
              : null
            }
          </S.DistrictDropdown>
        </S.VolunteerRegionMenuBlock>
        <S.VolunteerNewTitle>새로 생겼어요</S.VolunteerNewTitle>
        <S.VolunteerNewBlock>
          {props.volunteerInfos.volunteerNewGroupInfos?.map((infos, index) => (
            <S.VolunteerNew
              key={infos.id}
              onClick={props.navigateTo(`/volunteer/${infos.id}`)}
            >
              <S.VolunteerNewImg>
                <Image
                  src={infos.profileURL}
                  alt="volunteer_new"
                  width={208}
                  height={120}
                  objectFit="cover"
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
        <S.VolunteerRegionTitle>{props.uidistrict} 모임</S.VolunteerRegionTitle>
        {props.volunteerInfos.volunteerRegionInfos?.map((infos, index) => (
          <S.VolunteerBlock
            key={infos.id}
            onClick={props.navigateTo(`/volunteer/${infos.id}`)}
          >
            <S.VolunteerImg>
              <Image
                src={infos.profileURL}
                alt="volunteer_1"
                width={324}
                height={183}
                objectFit="cover"
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
                {infos.participationNum}명 참여중
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
        {props.scrollLoading && (
          <S.LoadingImgBox>
            <S.LoadingImg />
          </S.LoadingImgBox>
        )}
        <S.VolunteerAddIcon
          showModal={props.showModal}
          onClick={() => props.handleRequireModal("/volunteer/create_volunteer")}
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
