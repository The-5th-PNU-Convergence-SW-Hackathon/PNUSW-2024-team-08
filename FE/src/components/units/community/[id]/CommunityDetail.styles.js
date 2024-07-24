import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
  /* opacity: 0; */
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 23px;
  padding-bottom: 1px;
`;

export const LeftArrowTitleContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

export const HeaderMenuContainer = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  position: relative;
  cursor: pointer;
`;

export const HeaderMenuBlock = styled.ul`
  width: 127px;
  height: 87px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 42px;
  right: 0;

  visibility: ${(props) => (props.active ? "visible" : "hidden")};

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstSubMenu = styled.li`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #dbdbdb;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondSubMenu = styled.li`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  color: #ff6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const UserContainer = styled.div`
  width: 87%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
`;

export const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 7px;
`;

export const UserNickname = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

export const UpdatedTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #808080;
  margin-top: 3px;
`;

export const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BoardTitle = styled.div`
  width: 90%;
  font-size: 20px;
  font-weight: 600;
  margin-top: 22px;
  margin-left: 25px;
`;

export const BoardText = styled.div`
  width: 80%;
  margin-top: 12px;
  margin-left: 25px;
  font-size: 16px;
  font-weight: 400;
`;

export const BoardImgBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  margin-top: 20px;
  margin-left: 25px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const BoardImg = styled.div`
  width: 224px;
  height: 197px;
  border-radius: 20px;
  margin-right: 20px;
  flex-shrink: 0;
`;

export const BoardInfoBlock = styled.div`
  width: 200px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-left: 25px;
  gap: 12px;
`;

export const BoardLikes = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const BoardComments = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const BoardShare = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const BoardAdBanner = styled.div`
  width: 390px;
  height: 60px;
  margin-top: 40px;
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
