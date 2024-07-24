import * as S from "./Home.styles";
import Image from "next/image";

export default function HomeUI(props) {
  return (
    <S.WrapperHomeContents>
      <S.HomeIntroContainer>
        <S.HomeIntroTitle>포포는 무슨 일을 하나요?</S.HomeIntroTitle>
        <S.PawImageSmallBlock>
          <Image
            src="/images/home/paw_small.svg"
            alt="paw_small"
            width={38}
            height={38}
          />
        </S.PawImageSmallBlock>
        <S.PawImageBigBlock>
          <Image
            src="/images/home/paw_big.svg"
            alt="paw_big"
            width={60}
            height={60}
          />
        </S.PawImageBigBlock>
        <S.HomeIntroTextUpper>
          유기동물에 관한 종합적인 케어 서비스를 제공하는
        </S.HomeIntroTextUpper>
        <S.HomeIntroTextLower>
          브랜드 '포포'에 관한 이야기를 확인해보세요!
        </S.HomeIntroTextLower>
        <S.HomeIntroArrowBlock>
          <Image
            src="/images/home/arrow_right_intro.svg"
            alt="arrow_right_intro"
            width={15}
            height={15}
          />
        </S.HomeIntroArrowBlock>
      </S.HomeIntroContainer>
      <S.HomeIconContainer>
        <S.HomeIconBlock onClick={props.navigateTo(props.paths.faq)}>
          <S.HomeIcon>
            <Image
              src="/images/home/faq_icon.svg"
              alt="faq_icon"
              width={84}
              height={84}
            />
          </S.HomeIcon>
          <S.HomeIconText>자주 하는 질문</S.HomeIconText>
        </S.HomeIconBlock>
        <S.HomeIconBlock onClick={props.navigateTo(props.paths.dogs)}>
          <S.HomeDogsCatsIcon>
            <Image
              src="/images/home/dogs_icon.svg"
              alt="dogs_icon"
              width={100}
              height={100}
            />
          </S.HomeDogsCatsIcon>
          <S.HomeIconText>강아지 키우기</S.HomeIconText>
        </S.HomeIconBlock>
        <S.HomeIconBlock onClick={props.navigateTo(props.paths.cats)}>
          <S.HomeDogsCatsIcon>
            <Image
              src="/images/home/cats_icon.svg"
              alt="cats_icon"
              width={92}
              height={92}
            />
          </S.HomeDogsCatsIcon>
          <S.HomeIconText>고양이 키우기</S.HomeIconText>
        </S.HomeIconBlock>
      </S.HomeIconContainer>
      <S.HomeContentsContainer>
        <S.HomeTitleBlock>
          <S.HomeTitle>입양/임시보호</S.HomeTitle>
          <Image
            src="/images/commons/arrow_right_icon.svg"
            alt="arrow_right_icon"
            width={15}
            height={25}
            onClick={props.navigateTo(props.paths.adopt)}
          />
        </S.HomeTitleBlock>
        <S.AdoptPetBlock>
          {props.homeData?.animals?.map((pet) => (
            <S.AdoptPet
              key={pet.id}
              onClick={props.navigateTo(`/adopt/${pet.id}`)}
            >
              <S.PetImg
                src={pet.profileURL}
                alt="dog_1"
                width={254}
                height={254}
              />
              <S.AdoptInfoBlock>
                <S.AdoptNameGender>
                  {pet.name}
                  <Image
                    src={
                      props.petDetail?.gender === "M"
                        ? "/images/pets/male_icon.svg"
                        : "/images/pets/female_icon.svg"
                    }
                    alt="male_icon"
                    width={17}
                    height={17}
                  />
                </S.AdoptNameGender>
                <S.AdoptBirthAddress>
                  {pet.age.slice(0, 4)}년생{" "}
                  {props.findProvinceKo(pet.region.split(" ")[0])}{" "}
                  {props.findDistrictKo(pet.region.split(" ")[1])}
                </S.AdoptBirthAddress>
                <S.AdoptLikeBlock>
                  <S.AdoptLike></S.AdoptLike>
                  {pet.likeNum}
                </S.AdoptLikeBlock>
                <S.AdoptViewBlock>
                  <S.AdoptView></S.AdoptView>
                  {pet.inquiryNum}
                </S.AdoptViewBlock>
              </S.AdoptInfoBlock>
            </S.AdoptPet>
          ))}
          <S.AdoptArrow onClick={props.navigateTo(props.paths.adopt)}>
            <Image
              src="/images/home/arrow_right_adopt.svg"
              alt="arrow_right_adopt"
              width={87.51}
              height={63.46}
            />
          </S.AdoptArrow>
        </S.AdoptPetBlock>
      </S.HomeContentsContainer>
      <S.HomeContentsContainer>
        <S.HomeTitleBlock>
          <S.HomeTitle>봉사활동</S.HomeTitle>
          <Image
            src="/images/commons/arrow_right_icon.svg"
            alt="arrow_right_icon"
            width={15}
            height={25}
            onClick={props.navigateTo(props.paths.volunteer)}
          />
        </S.HomeTitleBlock>
        {props.homeData?.groups?.map((group) => (
          <S.VolunteerBlock
            key={group.id}
            onClick={props.navigateTo(`/volunteer/detail/${group.id}`)}
          >
            <S.VolunteerImg>
              <Image
                src="/images/volunteer/volunteer_1.svg"
                alt="volunteer_1"
                width={324}
                height={183}
              />
              <S.VolunteerLikeBlock>
                <Image
                  src="/images/volunteer/volunteer_like_icon.svg"
                  alt="volunteer_like_icon"
                  width={17}
                  height={14}
                />
                {group.likeNum}
              </S.VolunteerLikeBlock>
            </S.VolunteerImg>
            <S.VolunteerTitleBlock>
              <S.VolunteerTitle>{group.name}</S.VolunteerTitle>
            </S.VolunteerTitleBlock>
            <S.VolunteerText>
              {props.truncateString(group.description, 63)}
            </S.VolunteerText>
            <S.VolunteerInfoBlock>
              <S.VolunteerNumberOfMember>
                {group.participation}명 참여중
              </S.VolunteerNumberOfMember>
              <S.VolunteerCategoryBlock>
                <S.VolunteerCategory>{group.category}</S.VolunteerCategory>
              </S.VolunteerCategoryBlock>
              <S.VolunteerRegionBlock>
                <S.VolunteerRegion>
                  {props.findProvinceKo(group.province) + " "}
                  {props.findDistrictKo(group.district)}
                </S.VolunteerRegion>
              </S.VolunteerRegionBlock>
            </S.VolunteerInfoBlock>
          </S.VolunteerBlock>
        ))}
      </S.HomeContentsContainer>
      <S.HomeContentsContainer>
        <S.HomeTitleBlock>
          <S.HomeTitle>인기글</S.HomeTitle>
          <Image
            src="/images/commons/arrow_right_icon.svg"
            alt="arrow_right_icon"
            width={15}
            height={25}
            onClick={props.navigateTo(props.paths.community)}
          />
        </S.HomeTitleBlock>
        {props.homeData?.posts?.map((post) => (
          <S.CommunityBlock key={post.id}>
            <S.CommunityImg>
              <Image
                src="/images/community/community_1.svg"
                alt="community_1"
                width={115}
                height={117}
              />
            </S.CommunityImg>
            <S.CommunityInfoBlock>
              <S.CommunityTitle>
                {props.truncateString(post.title, 13)}
              </S.CommunityTitle>
              <S.CommunityText>
                {props.truncateString(post.content, 26)}
              </S.CommunityText>
              <S.CommunityName>{post.name}</S.CommunityName>
              <S.CommunityLikeBlock>
                <S.CommunityLike>
                  <Image
                    src="/images/community/like_icon_active.svg"
                    alt="active_icon"
                    width={20}
                    height={20}
                  />
                </S.CommunityLike>
                {post.likeNum}
              </S.CommunityLikeBlock>
              <S.CommunityViewBlock>
                <S.CommunityView>
                  <Image
                    src="/images/community/comment_icon.svg"
                    alt="comment_icon"
                    width={16}
                    height={16}
                  />
                </S.CommunityView>
                {post.commentNum}
              </S.CommunityViewBlock>
            </S.CommunityInfoBlock>
          </S.CommunityBlock>
        ))}
      </S.HomeContentsContainer>
    </S.WrapperHomeContents>
  );
}
