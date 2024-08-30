import * as S from "./CommunityFostering.styles";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamic import for FontAwesomeIcon
const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function CommunityFosteringUI(props) {
  return (
    <>
      <S.WrapperContents ref={props.scrollRef}>
        <S.CommunityMenuContainer
          ref={(el) => (props.menuRefs.current[0] = el)}
          onClick={() => props.handleMenuClick(0)}
        >
          <Image
            src={`/images/community/${props.sort}_icon.svg`}
            alt={`${props.sort}_icon`}
            width={43}
            height={14}
          />
          <S.CommunityMenuBlock active={props.isMenuClicked[0]}>
            <S.CommunityMenuNewest
              isActive={props.sort === "newest"}
              onClick={props.handleNewestClick}
            >
              최신순
            </S.CommunityMenuNewest>
            <S.CommunityMenuPopularity
              isActive={props.sort === "popularity"}
              onClick={props.handlePopularityClick}
            >
              인기순
            </S.CommunityMenuPopularity>
          </S.CommunityMenuBlock>
        </S.CommunityMenuContainer>
        {props.fosterings.map((fostering) => (
          <S.CommunityBlock
            key={fostering.id}
            onClick={() =>
              props.handleRequireModal(
                `/community/${fostering.id}?type=fostering`
              )
            }
          >
            <S.CommunityImg>
              <S.StyledImage
                src={fostering.imageURL}
                alt="community_1"
                width={115}
                height={117}
                objectFit="cover"
              />
            </S.CommunityImg>
            <S.CommunityInfoBlock>
              <S.CommunityCategory>임시보호 스토리</S.CommunityCategory>
              <S.CommunityTitle>
                {props.truncateString(fostering.title, 30)}
              </S.CommunityTitle>
              <S.CommunityNickNameDate>
                <S.CommunityNickName>{fostering.nickName}</S.CommunityNickName>
                <S.CommunityDate>
                  {props.useFormatDateTime(fostering.date)}
                </S.CommunityDate>
              </S.CommunityNickNameDate>
              <S.CommunityLikeBlock>
                <S.CommunityLike>
                  <Image
                    src="/images/community/like_icon_active.svg"
                    alt="active_icon"
                    width={15}
                    height={15}
                  />
                </S.CommunityLike>
                {fostering.likeNum}
              </S.CommunityLikeBlock>
              <S.CommunityViewBlock>
                <S.CommunityView>
                  <Image
                    src="/images/community/comment_icon.svg"
                    alt="comment_icon"
                    width={12}
                    height={12}
                  />
                </S.CommunityView>
                {fostering.commentNum}
              </S.CommunityViewBlock>
            </S.CommunityInfoBlock>
          </S.CommunityBlock>
        ))}
        {props.scrollLoading && ( // 스크롤 로딩 중일 때 로딩 아이콘 표시
          <S.LoadingImgBox isLoading={props.scrollLoading}>
            <S.LoadingImg />
          </S.LoadingImgBox>
        )}
      </S.WrapperContents>
    </>
  );
}
