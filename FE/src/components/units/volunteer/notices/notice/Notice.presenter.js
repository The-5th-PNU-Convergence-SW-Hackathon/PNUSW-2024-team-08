import * as S from "./Notice.styles";
import Image from "next/image";

export default function NoticeUI(props) {
  return (
    <>
      <S.WrapperContents
        active={
          props.isClickedReply ||
          props.isClickedEdit ||
          props.isClickedReplyEdit
        }
      >
        <S.AnnouncementContainer>
          <S.AnnouncementTitle>{props.noticeInfos.title}</S.AnnouncementTitle>
          <S.AnnouncementImg>
            <Image
              src="/images/volunteer/announcement/announcement_img.svg"
              alt="announcement_img"
              width={390}
              height={201}
              priority={true}
            />
          </S.AnnouncementImg>
          <S.AnnouncementText>{props.noticeInfos.content}</S.AnnouncementText>
        </S.AnnouncementContainer>
        <S.Boundary />
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
