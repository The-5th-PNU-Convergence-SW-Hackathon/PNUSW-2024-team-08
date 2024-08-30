import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
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

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
  font-size: 12px;
  color: #808080;
  margin-top: 3px;

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
  white-space: pre-wrap;
  word-wrap: break-word;
  letter-spacing: -0.5px;

  margin-left: 48px;
  padding-top: 6px;
`;

export const CommentMenuImg = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
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
  width: 20px;
  height: 30px;
  margin-left: 48px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1);
  }
  
  &.liked {
    animation: ${pulseAnimation} 0.5s ease-in-out;
  }

  img {
    transition: all 0.3s ease;
  }

  &.liked img {
    transform: scale(1);
  }
`;

export const LikeText = styled.p`
  height: 14px;
  font-size: 16px;
  letter-spacing: -0.4px;
  margin-left: 5px;
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddReplyText = styled.p`
  width: 44px;
  height: 14px;
  font-size: 12px;
  letter-spacing: -0.4px;
  margin-left: 7px;
  cursor: pointer;

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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const Reply = styled.p`
  width: 215px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  white-space: pre-wrap;
  word-wrap: break-word;
  letter-spacing: -0.5px;

  margin-left: 48px;
  padding-top: 6px;
`;

export const ReplyMenuImg = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 100;

  cursor: pointer;
`;

export const MenuBlock = styled.div`
  width: 110px;
  height: 70px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  font-size: 15px;
  right: 5px;
  z-index: 100;

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
  border-bottom: 1px solid #dbdbdb;

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

export const Report = styled.div`
  width: 100%;
  height: 56px;
  font-weight: 500;
  color: #ff6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
