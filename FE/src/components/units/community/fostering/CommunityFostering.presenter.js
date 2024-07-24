import * as S from "./CommunityFostering.styles";
import Image from "next/image";

export default function CommunityFosteringUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.CommunityMenuBlock>
          <S.CommunityMenuPopularity
            sort={props.sort}
            onClick={props.handlePopularityClick}
          >
            인기순
          </S.CommunityMenuPopularity>
          <S.CommunityMenuNewest
            sort={props.sort}
            onClick={props.handleNewestClick}
          >
            최신순
          </S.CommunityMenuNewest>
        </S.CommunityMenuBlock>
        {props.fosterings.map((fostering) => (
          <S.CommunityBlock
            key={fostering.id}
            onClick={() =>
              props.handleRequireModal(`/community/${fostering.id}`)
            }
          >
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
                {props.truncateString(fostering.title, 15)}
              </S.CommunityTitle>
              <S.CommunityText>
                {props.truncateString(fostering.content, 26)}
              </S.CommunityText>
              <S.CommunityName>{fostering.name}</S.CommunityName>
              <S.CommunityLikeBlock>
                <S.CommunityLike>
                  <Image
                    src="/images/community/like_icon_active.svg"
                    alt="active_icon"
                    width={20}
                    height={20}
                  />
                </S.CommunityLike>
                {fostering.likeNum}
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
                {fostering.commentNum}
              </S.CommunityViewBlock>
            </S.CommunityInfoBlock>
          </S.CommunityBlock>
        ))}

        <S.CommunityAddIcon
          onClick={() =>
            props.handleRequireModal("/community/write?type=fostering")
          }
        >
          <Image
            src="/images/community/community_add_icon.svg"
            alt="community_add_icon"
            width={28}
            height={28}
          />
        </S.CommunityAddIcon>
        {props.fosterings.length > 0 && (
          <S.MoreButton onClick={props.loadFosteringList}>더 보기</S.MoreButton>
        )}
      </S.WrapperContents>
    </>
  );
}
