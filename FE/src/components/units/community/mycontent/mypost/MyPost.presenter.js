import * as S from "./MyPost.styles";
import Image from "next/image";

export default function MyPostUI(props) {
  console.log("myPost: ", props.myPost);
  return (
    <>
      <S.WrapperContents ref={props.scrollRef}>
        {props.myPost.map((post) => (
          <S.CommunityBlock
            key={post.id}
            onClick={() =>
              props.handleRequireModal(`/community/${post.id}?type=adoption`)
            }
          >
            <S.CommunityImg>
              <S.StyledImage
                src={post.imageURL}
                alt="community_1"
                width={115}
                height={117}
                objectFit="cover"
              />
            </S.CommunityImg>
            <S.CommunityInfoBlock>
              <S.CommunityCategory>입양 스토리</S.CommunityCategory>
              <S.CommunityTitle>
                {props.truncateString(post.title, 30)}
              </S.CommunityTitle>
              <S.CommunityNickNameDate>
                <S.CommunityNickName>{post.nickName}</S.CommunityNickName>
                <S.CommunityDate>
                  {props.useFormatDateTime(post.date)}
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
                {post.likeNum}
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
                {post.commentNum}
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
