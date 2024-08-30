import * as S from "./MyComment.styles";
import Image from "next/image";

export default function MyCommentUI(props) {
  return (
    <>
      <S.WrapperContents ref={props.scrollRef}>
        {props.myComment.map((comment) => (
          <S.CommentContainer
            key={comment.commentId}
            onClick={() =>
              props.handleCommentClick(comment.postType, comment.postId)
            }
          >
            <S.CommentTitle>
              <Image
                src="/images/community/file_icon.svg"
                alt="file_icon"
                width={7}
                height={9}
              />
              {comment.postType +
                " - [ " +
                props.truncateString(comment.title, 28) +
                " ]"}
            </S.CommentTitle>
            <S.CommentText>{comment.content}</S.CommentText>
            <S.CommentDate>
              {props.useFormatDateTime(comment.date)}
            </S.CommentDate>
            <S.CommentCount>
              <Image
                src="/images/community/comment_icon.svg"
                alt="comment_icon"
                width={12}
                height={12}
              />
              {comment.commentNum}
            </S.CommentCount>
          </S.CommentContainer>
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
