import * as S from "./Comment.styles";
import Image from "next/image";
import { findProvinceKo } from "../district/districtName";
import { useFormatDateTime } from "../../units/volunteer/hooks/useFormat";

export default function CommentUI(props) {
  return (
    <>
      <S.CommentContainer>
        {props.comments.map((comment) => (
          <S.Comments key={comment.id}>
            <S.CommentBlock>
              <S.UserInfoItems>
                <S.UserImgbox>
                  <S.UserImg src={comment.profileURL} alt={comment.nickName} />
                </S.UserImgbox>
                <S.CommentUser>
                  <S.UserName>{comment.nickName}</S.UserName>
                  <S.CommentTime>
                    {findProvinceKo(comment.location)}&nbsp;&nbsp;
                    {useFormatDateTime(comment.date)}
                  </S.CommentTime>
                </S.CommentUser>
              </S.UserInfoItems>
              <S.CommentText>
                <S.Comment>{comment.content}</S.Comment>
                <S.CommentMenuImg
                  className="menu-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    props.handleMenu(comment.id, comment.nickName);
                  }}
                >
                  <Image
                    src="/images/header/menu_icon.svg"
                    alt="menu_icon"
                    width={30}
                    height={30}
                    priority={true}
                  />
                  {props.openMenuId === `${comment.id}` ? (
                    props.isMatch ? (
                      <S.MenuBlock>
                        <S.Edit
                          onClick={() =>
                            props.handleEditClick(
                              comment.id,
                              comment.nickName,
                              comment.content
                            )
                          }
                        >
                          수정하기
                        </S.Edit>
                        <S.Delete
                          onClick={() => props.deleteComment(comment.id)}
                        >
                          삭제하기
                        </S.Delete>
                      </S.MenuBlock>
                    ) : (
                      <S.MenuBlock style={{ height: "46px" }}>
                        <S.Report
                          onClick={() => {
                            props.handleClickReport(comment.id);
                          }}
                        >
                          신고하기
                        </S.Report>
                      </S.MenuBlock>
                    )
                  ) : null}
                </S.CommentMenuImg>
              </S.CommentText>
              <S.LikeBlock>
                <S.LikeImg
                  className={comment.isLike ? "liked" : ""}
                  onClick={(event) => {
                    event.stopPropagation();
                    props.handleCommentToggleLike(comment.id);
                  }}
                >
                  <Image
                    src={
                      comment.isLike
                        ? "/images/volunteer/volunteer_like_icon.svg"
                        : "/images/volunteer/volunteer_unlike_icon.svg"
                    }
                    alt="comment_likeImg"
                    width={20}
                    height={20}
                  />
                </S.LikeImg>
                <S.LikeText>{comment.likeNum}</S.LikeText>
                <S.AddReplyText
                  onClick={() =>
                    props.handleReplyClick(comment.id, comment.nickName)
                  }
                >
                  답글 달기
                </S.AddReplyText>
              </S.LikeBlock>
            </S.CommentBlock>
            {comment.replies?.map((reply) => (
              <S.ReplyBlock key={reply.id}>
                <S.UserInfoItems>
                  <S.UserImgbox>
                    <S.UserImg src={reply.profileURL} alt={reply.nickName} />
                  </S.UserImgbox>
                  <S.ReplyUser>
                    <S.UserName>{reply.nickName}</S.UserName>
                    <S.CommentTime>
                      {findProvinceKo(reply.location)}&nbsp;&nbsp;
                      {useFormatDateTime(reply.date)}
                    </S.CommentTime>
                  </S.ReplyUser>
                </S.UserInfoItems>
                <S.CommentText>
                  <S.Reply>{reply.content}</S.Reply>
                  <S.ReplyMenuImg
                    className="menu-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      props.handleMenu(comment.id, reply.nickName, reply.id);
                    }}
                  >
                    <Image
                      src="/images/header/menu_icon.svg"
                      alt="menu_icon"
                      width={30}
                      height={30}
                      priority={true}
                    />
                    {props.openMenuId === `${comment.id}-${reply.id}` ? (
                      props.isMatch ? (
                        <S.MenuBlock>
                          <S.Edit
                            onClick={() =>
                              props.handleEditClick(
                                reply.id,
                                reply.nickName,
                                reply.content
                              )
                            }
                          >
                            수정하기
                          </S.Edit>
                          <S.Delete
                            onClick={() =>
                              props.deleteReply(comment.id, reply.id)
                            }
                          >
                            삭제하기
                          </S.Delete>
                        </S.MenuBlock>
                      ) : (
                        <S.MenuBlock>
                          <S.Report
                            onClick={() => {
                              props.handleClickReport(reply.id);
                            }}
                          >
                            신고하기
                          </S.Report>
                        </S.MenuBlock>
                      )
                    ) : null}
                  </S.ReplyMenuImg>
                </S.CommentText>
                <S.LikeBlock>
                  <S.LikeImg
                    className={reply.isLike ? "liked" : ""}
                    onClick={(event) => {
                      event.stopPropagation();
                      props.handleReplyToggleLike(comment.id, reply.id);
                    }}
                  >
                    <Image
                      src={
                        reply.isLike
                          ? "/images/volunteer/volunteer_like_icon.svg"
                          : "/images/volunteer/volunteer_unlike_icon.svg"
                      }
                      alt="comment_likeImg"
                      width={25}
                      height={25}
                    />
                  </S.LikeImg>
                  <S.LikeText>{reply.likeNum}</S.LikeText>
                </S.LikeBlock>
              </S.ReplyBlock>
            ))}
          </S.Comments>
        ))}
      </S.CommentContainer>
    </>
  );
}
