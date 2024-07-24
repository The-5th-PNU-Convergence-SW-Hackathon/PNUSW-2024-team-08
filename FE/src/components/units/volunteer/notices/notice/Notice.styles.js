import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: ${(props) =>
    props.active ? "calc(100vh - 219px)" : "calc(100vh - 179px)"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  flex-shrink: 0;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const AnnouncementContainer = styled.div`
  width: 390px;
  height: 430px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

export const AnnouncementTitle = styled.div`
  width: 340px;
  height: 72px;
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.8px;

  margin-bottom: 16px;
`;

export const AnnouncementImg = styled.div`
  width: 390px;
  height: 201px;
`;

export const AnnouncementText = styled.div`
  width: 343px;
  height: 96px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;

  margin-top: 24px;
`;

export const Boundary = styled.div`
  width: 390px;
  height: 20px;
  background-color: #fdfaf7;
  flex-shrink: 0;
`;

export const CommentContainer = styled.div`
  width: 390px;
  height: auto;
  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

export const Comments = styled.div`
  margin-top: 25px;
  width: 344px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-shrink: 0;
`;

export const CommentBlock = styled.div`
  width: 100%; /*344px*/
  height: auto;
`;

export const UserInfoItems = styled.div`
  width: 100%; /*344px*/
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const UserImgbox = styled.div`
  width: 40px;
  height: 40px;
`;

export const CommentUser = styled.div`
  width: 296px;
  height: 40px;
  margin-left: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const UserName = styled.div`
  width: 304px;
  height: 20px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const CommentTime = styled.div`
  width: 304px;
  height: 20px;
  font-size: 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const CommentText = styled.div`
  width: 100%; /*344px*/
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const Name = styled.span`
  width: auto;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  color: #1f507d;
`;

export const Comment = styled.p`
  width: 265px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  word-wrap: break-word;
  letter-spacing: -0.5px;

  margin-left: 48px;
  padding-top: 6px;
`;

export const CommentMenuImg = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const LikeBlock = styled.div`
  margin-top: 3px;
  width: 230px; /*344px*/
  height: 30px;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

export const LikeImg = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 48px;
  cursor: pointer;
`;

export const LikeText = styled.p`
  width: 14px;
  height: 14px;
  font-size: 15px;
  letter-spacing: -0.4px;
  margin-left: 5px;

  padding-top: 1px;
`;

export const AddReplyText = styled.p`
  width: 44px;
  height: 14px;
  font-size: 12px;
  letter-spacing: -0.4px;
  margin-left: 5px;
  cursor: pointer;

  padding-top: 3px;
`;

export const ReplyBlock = styled.div`
  margin-top: 20px;
  width: 296px;
  height: auto;
`;

export const ReplyUser = styled.div`
  width: 256px;
  height: 40px;
  padding-left: 8px;
`;

export const Reply = styled.p`
  width: 215px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  word-wrap: break-word;
  letter-spacing: -0.5px;

  margin-left: 48px;
  padding-top: 6px;
`;

export const ReplyMenuImg = styled.div`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

/*답글 달기 판단여부가 사실 일 때 div*/
export const ToReplyBlock = styled.div`
  width: 390px;
  height: 40px;
  flex-shrink: 0;
  font-size: 16px;
  background-color: white;
  color: #888888;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ToReply = styled.p`
  width: 95%;
  height: 100%;
  background-color: #f6f6f6;
  flex-shrink: 0;
  padding-left: 15px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ToReplyClose = styled.p`
  width: 5%;
  height: 100%;
  background-color: #f6f6f6;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/*답글 클릭여부가 거짓일 때 div*/
export const Blank = styled.div`
  width: 390px;
  height: 40px;
  background-color: white;
  margin: 0 auto;
  flex-shrink: 0;
`;

/*답글을 쓰는 컨테이너*/
export const AddCommentContainer = styled.div`
  width: 390px;
  height: 84px;
  margin: 0 auto;
  background-color: white;
  border-top: 1px solid #dbdbdb;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AddCommentBlock = styled.div`
  width: 344px;
  height: 44px;
  margin-top: 8px;

  display: flex;
  flex-direction: row;
  gap: 12px;

  position: relative;
`;

export const OpenMenu = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ff6636;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentInput = styled.input`
  width: 232px;
  height: 44px;
  border: none;
  border-radius: 22px;
  background-color: #f6f6f6;
  padding-left: 15px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #888888;
    font-size: 14px;
  }
`;

export const AddComment = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #240d05;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ArrowBlock = styled.div`
  width: 13px;
  height: 13px;
  border-top: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArrowLine = styled.div`
  width: 15px;
  height: 2px;
  border: 1px solid white;
  background-color: white;

  position: absolute;
  right: 15px;
`;

//댓글 혹은 답글의 메뉴를 클릭했을 떄 수정하기 삭제하기가 나오게끔 하는 ui

export const MenuBlock = styled.div`
  width: 110px;
  height: 70px;
  border-radius: 10px;
  background-color: white;
  position: relative;
  font-size: 15px;
  right: 80px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Edit = styled.p`
  width: 100%;
  height: 56px;
  font-weight: 500;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Delete = styled.p`
  width: 100%;
  height: 56px;
  font-weight: 500;
  color: #ff6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
