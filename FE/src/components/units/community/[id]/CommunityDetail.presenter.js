import Image from "next/image";
import * as S from "./CommunityDetail.styles";

export default function CommunityDetailUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.navigateBack}
            />
            <S.Title>커뮤니티</S.Title>
          </S.LeftArrowTitleContainer>
          <S.HeaderMenuContainer
            ref={props.headerMenuRef}
            onClick={props.handleHeaderMenuClick}
          >
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={44}
              height={44}
            />
            <S.HeaderMenuBlock active={props.isMenuClicked}>
              <S.FirstSubMenu>수정하기</S.FirstSubMenu>
              <S.SecondSubMenu>삭제하기</S.SecondSubMenu>
            </S.HeaderMenuBlock>
          </S.HeaderMenuContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperContents>
        <S.UserContainer>
          <S.UserPhoto>
            <Image
              src="/images/header/profile_icon.svg"
              alt="profile_icon"
              width={44}
              height={44}
            />
          </S.UserPhoto>
          <S.UserInfoBlock>
            <S.UserNickname>닉네임입력</S.UserNickname>
            <S.UpdatedTime>3시간 전</S.UpdatedTime>
          </S.UserInfoBlock>
        </S.UserContainer>
        <S.BoardContainer>
          <S.BoardTitle>게시글 제목 입력해주세요</S.BoardTitle>
          <S.BoardText>
            소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸이라는 걸 알 수
            있었다. 그런데, 어제까지는 개울 기슭에서 하더니, 오늘은 징검다리 한
            가운데 앉아서
          </S.BoardText>
          <S.BoardImgBlock>
            <S.BoardImg>
              <Image
                src="/images/community/community_detail_1.svg"
                alt="community_detail_1"
                width={224}
                height={197}
                priority
              />
            </S.BoardImg>
            <S.BoardImg>
              <Image
                src="/images/community/community_detail_1.svg"
                alt="community_detail_1"
                width={224}
                height={197}
                priority
              />
            </S.BoardImg>
            <S.BoardImg>
              <Image
                src="/images/community/community_detail_1.svg"
                alt="community_detail_1"
                width={224}
                height={197}
              />
            </S.BoardImg>
            <S.BoardImg>
              <Image
                src="/images/community/community_detail_1.svg"
                alt="community_detail_1"
                width={224}
                height={197}
              />
            </S.BoardImg>
          </S.BoardImgBlock>
          <S.BoardInfoBlock>
            <S.BoardLikes>
              <Image
                src="/images/community/board_like_active.svg"
                alt="like_icon_active"
                width={24}
                height={20}
              />
              24
            </S.BoardLikes>
            <S.BoardComments>
              <Image
                src="/images/community/comments.svg"
                alt="comments"
                width={20}
                height={20}
              />
              12
            </S.BoardComments>
            <S.BoardShare>
              <Image
                src="/images/community/share.svg"
                alt="share"
                width={20}
                height={20}
              />
              0
            </S.BoardShare>
          </S.BoardInfoBlock>
          <S.BoardAdBanner>
            <Image
              src="/images/community/ad_banner.svg"
              alt="ad_banner"
              width={390}
              height={60}
            />
          </S.BoardAdBanner>
        </S.BoardContainer>
        <S.CommentContainer>
          {props.comments.map((comment, index) => (
            <S.Comments key={comment.id}>
              <S.CommentBlock>
                <S.UserInfoItems>
                  <S.UserImgbox>
                    <Image
                      src="/images/volunteer/announcement/user_icon.svg"
                      alt="member_icon"
                      width={40}
                      height={40}
                      priority={true}
                    />
                  </S.UserImgbox>
                  <S.CommentUser>
                    <S.UserName>{comment.name}</S.UserName>
                    <S.CommentTime>
                      {comment.location} {comment.date}
                    </S.CommentTime>
                  </S.CommentUser>
                </S.UserInfoItems>
                <S.CommentText>
                  <S.Comment>{comment.content}</S.Comment>
                  <S.CommentMenuImg
                    onClick={() => props.handleMenuClick(comment.id, null)}
                  >
                    <Image
                      src="/images/header/menu_icon.svg"
                      alt="menu_icon"
                      width={30}
                      height={30}
                      priority={true}
                    />
                    {props.isCommentMenuClicked &&
                      props.clickedCommentID === comment.id && (
                        <S.MenuBlock ref={props.wrapperRef}>
                          <S.Edit
                            onClick={() =>
                              props.activeCommentEdit(comment.content)
                            }
                          >
                            수정하기
                          </S.Edit>
                          <S.Delete
                            onClick={() => props.handleDelete(comment.id, null)}
                          >
                            삭제하기
                          </S.Delete>
                        </S.MenuBlock>
                      )}
                  </S.CommentMenuImg>
                </S.CommentText>
                <S.LikeBlock>
                  <S.LikeImg
                    onClick={() => props.handleCommentLikeClick(comment.id)}
                  >
                    <Image
                      src={comment.likeSrc}
                      alt="comment_likeImg"
                      width={30}
                      height={30}
                    />
                  </S.LikeImg>
                  <S.LikeText>{comment.likeCount}</S.LikeText>
                  <S.AddReplyText
                    onClick={(e) => {
                      props.activeReply(e, comment.id, comment.name);
                    }}
                    data-action="reply"
                  >
                    답글 달기
                  </S.AddReplyText>
                </S.LikeBlock>
              </S.CommentBlock>
              {comment.replies.map((reply, replyIndex) => (
                <S.ReplyBlock key={reply.id}>
                  <S.UserInfoItems>
                    <S.UserImgbox>
                      <Image
                        src="/images/volunteer/announcement/user_icon.svg"
                        alt="member_icon"
                        width={40}
                        height={40}
                        priority={true}
                      />
                    </S.UserImgbox>
                    <S.ReplyUser>
                      <S.UserName>{reply.name}</S.UserName>
                      <S.CommentTime>
                        {reply.location} {reply.date}
                      </S.CommentTime>
                    </S.ReplyUser>
                  </S.UserInfoItems>
                  <S.CommentText>
                    <S.Reply>
                      <S.Name>{`@${reply.replyName} `}</S.Name>
                      {reply.content}
                    </S.Reply>
                    <S.ReplyMenuImg
                      onClick={() =>
                        props.handleMenuClick(comment.id, reply.id)
                      }
                    >
                      <Image
                        src="/images/header/menu_icon.svg"
                        alt="menu_icon"
                        width={30}
                        height={30}
                      />
                      {props.isReplyMenuClicked &&
                        props.clickedReplyID === reply.id &&
                        props.clickedCommentID === comment.id && (
                          <S.MenuBlock ref={props.wrapperRef}>
                            <S.Edit
                              onClick={() =>
                                props.activeReplyEdit(reply.content)
                              }
                            >
                              수정하기
                            </S.Edit>
                            <S.Delete
                              onClick={() =>
                                props.handleDelete(comment.id, reply.id)
                              }
                            >
                              삭제하기
                            </S.Delete>
                          </S.MenuBlock>
                        )}
                    </S.ReplyMenuImg>
                  </S.CommentText>
                  <S.LikeBlock>
                    <S.LikeImg>
                      <Image
                        onClick={() =>
                          props.handleReplyLikeClick(comment.id, reply.id)
                        }
                        src={reply.likeSrc}
                        alt="comment_likeImg"
                        width={30}
                        height={30}
                      />
                    </S.LikeImg>
                    <S.LikeText>{reply.likeCount}</S.LikeText>
                    <S.AddReplyText
                      onClick={(e) => {
                        props.activeReply(e, comment.id, reply.name);
                      }}
                      data-action="subreply"
                    >
                      답글 달기
                    </S.AddReplyText>
                  </S.LikeBlock>
                </S.ReplyBlock>
              ))}
            </S.Comments>
          ))}
        </S.CommentContainer>
      </S.WrapperContents>
      {props.isClickedReply ||
      props.isClickedEdit ||
      props.isClickedReplyEdit ? (
        <S.ToReplyBlock>
          {props.isClickedReply && (
            <S.ToReply>{props.name}님 에게 답글 다는중..</S.ToReply>
          )}
          {props.isClickedEdit && <S.ToReply>댓글을 수정하는 중..</S.ToReply>}
          {props.isClickedReplyEdit && (
            <S.ToReply>답글을 수정하는 중..</S.ToReply>
          )}
          <S.ToReplyClose onClick={props.handleJudegeXClick}>X</S.ToReplyClose>
        </S.ToReplyBlock>
      ) : null}
      <S.AddCommentContainer>
        <S.AddCommentBlock>
          <S.OpenMenu>
            <Image
              src="/images/volunteer/announcement/open_menu.svg"
              alt="open_menu"
              width={20}
              height={20}
              priority={true}
            />
          </S.OpenMenu>
          <S.CommentInput
            autoFocus
            ref={props.focus}
            placeholder={
              props.isActiveComment
                ? "댓글을 입력해주세요"
                : props.isClickedReply
                ? "답글을 입력해주세요"
                : props.isClickedEdit
                ? "댓글을 수정해주세요"
                : props.isClickedReplyEdit
                ? "답글을 수정해주세요"
                : ""
            }
            type="text"
            value={props.content}
            onKeyDown={(e) => {
              props.handleContentSubmit(e);
            }}
            onChange={(e) => {
              props.handleContentValue(e);
            }}
          />
          <S.AddComment onClick={props.handleContentSubmit}>
            <S.ArrowLine />
            <S.ArrowBlock />
          </S.AddComment>
        </S.AddCommentBlock>
      </S.AddCommentContainer>
    </>
  );
}
