import * as S from "./Chatting.styles";
import Image from "next/image";

export default function ChattingUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.ChattingTextContainer>
          <S.ChattingText>함께하며 느끼는 즐거움-</S.ChattingText>
        </S.ChattingTextContainer>
        <S.ChattingSearchBlock>
          <S.ChattingSearch type="text" placeholder="검색어를 입력해주세요" />
          <S.ChattingSearchIcon>
            <Image
              src="/images/chatting/chatting_search_icon.svg"
              alt="chatting_search_icon"
              width={24}
              height={24}
            />
          </S.ChattingSearchIcon>
        </S.ChattingSearchBlock>
        {props.chatRoomList.map((chatRoom) => (
          <S.ChattingBlock
            key={chatRoom.chatRoomId}
            onClick={() => props.navigateTo("/chatting/detail")()}
          >
            <S.UserProfileImg>
              <Image
                src="/images/chatting/chatting_profile.svg"
                alt="chatting_profile"
                width={38}
                height={38}
              />
            </S.UserProfileImg>
            <S.ChattingInfoBlock>
              <S.UserName>{props.truncateString(chatRoom.name, 13)}</S.UserName>
              <S.ChattingDate>
                {chatRoom.lastMessageTime.replace(/[TZ]/g, " ")}
              </S.ChattingDate>
              <S.ChattingContent>
                {props.truncateString(chatRoom.lastMessageContent, 20)}
              </S.ChattingContent>
            </S.ChattingInfoBlock>
          </S.ChattingBlock>
        ))}
      </S.WrapperContents>
    </>
  );
}
