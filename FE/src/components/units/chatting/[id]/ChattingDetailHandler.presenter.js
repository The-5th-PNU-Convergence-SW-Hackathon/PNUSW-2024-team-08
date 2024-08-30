import * as S from "./ChattingDetailHandler.styles";
import Image from "next/image";

export default function ChattingDetailHandlerUI(props) {
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
              onClick={props.navigateTo(`/chatting/${props.chatRoomId}`)}
            />
            <S.Title>채팅 정보</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperCommunityHandler>
        <S.CommunityMenuContainer>
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.albums)
                ? props.navigateTo(props.paths.albums)
                : undefined
            }
            active={props.isActive(props.paths.albums)}
          >
            사진
          </S.CommunityMenu>
          {/* <S.CommunityCenterLine></S.CommunityCenterLine> */}
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.files)
                ? props.navigateTo(props.paths.files)
                : undefined
            }
            active={props.isActive(props.paths.files)}
          >
            파일
          </S.CommunityMenu>
          {/* <S.CommunityCenterLine></S.CommunityCenterLine> */}
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.links)
                ? props.navigateTo(props.paths.links)
                : undefined
            }
            active={props.isActive(props.paths.links)}
          >
            링크
          </S.CommunityMenu>
        </S.CommunityMenuContainer>
      </S.WrapperCommunityHandler>
    </>
  );
}
