import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";

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

export const AddCommentContainer = styled.div`
  width: 390px;
  height: 84px;
  margin: 0 auto;
  background-color: white;
  border-top: 1px solid #dbdbdb;
  position: relative;
  z-index: 10;

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

export const ChatTextareaBlock = styled(TextareaAutosize)`
  width: 232px;
  height: 44px;
  background-color: #f6f6f6;
  border: 2px solid transparent;
  outline: none;
  border-radius: 22px;
  font-size: 14px;
  font-weight: 300;
  padding: 10px 18px;
  resize: none;
  overflow-y: auto;

  ::placeholder {
    color: #888;
  }

  :focus {
    border: 2px solid black;
    color: #888;
    max-height: 71px;
    transition: height 0.2s ease-in-out;
  }

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Firefox */
  scrollbar-width: none; /* "auto" 또는 "thin" 대신 "none" */
  /* Internet Explorer 10+ */
  -ms-overflow-style: none;
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
