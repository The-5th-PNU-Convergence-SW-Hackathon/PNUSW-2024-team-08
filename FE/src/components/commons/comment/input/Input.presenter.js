import * as S from "./Input.styles";
import Image from "next/image";

export default function InputUI(props) {
  return (
    <>
      {props.name && (
        <S.ToReplyBlock>
          <S.ToReply>{props.replyText}</S.ToReply>
          <S.ToReplyClose onClick={props.handleCancelReply}>X</S.ToReplyClose>
        </S.ToReplyBlock>
      )}
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
          <S.ChatTextareaBlock
            autoFocus
            type="text"
            ref={props.inputRef}
            value={props.input}
            maxLength={100}
            placeholder={props.placeholderText}
            onChange={props.handleInput}
            onKeyDown={props.handleKeyDown}
            onCompositionStart={props.handleCompositionStart}
            onCompositionEnd={props.handleCompositionEnd}
            minRows={1}
            maxRows={3}
          />
          <S.AddComment onClick={props.handleAddComment}>
            <S.ArrowLine />
            <S.ArrowBlock />
          </S.AddComment>
        </S.AddCommentBlock>
      </S.AddCommentContainer>
    </>
  );
}
