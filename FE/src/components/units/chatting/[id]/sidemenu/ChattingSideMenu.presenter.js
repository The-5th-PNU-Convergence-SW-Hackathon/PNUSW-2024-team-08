import React from "react";
import * as S from "./ChattingSideMenu.styles";
import Image from "next/image";

export default function ChattingSideMenuUI(props) {
  return (
    <>
      <S.CoverSideMenu></S.CoverSideMenu>

      <S.SideMenuOverlay
        isSideMenuOpen={props.isSideMenuOpen}
        onClick={props.toggleSideMenu}
      />

      <S.SideMenuContainer className={props.isSideMenuOpen ? "open" : ""}>
        <S.SideMenuTitleBlock>
          사진
          <S.SideMenuImageBlock
            src="/images/chatting/chatting_right_arrow.svg"
            alt="chatting_right_arrow"
            width={22}
            height={22}
            onClick={props.navigateTo(`/chatting/${props.chatRoomId}/albums`)}
          />
        </S.SideMenuTitleBlock>
        <S.SideMenuImgContainer
          imageCount={props.chatRoomDrawerData.images.length}
        >
          {props.chatRoomDrawerData.images?.map((imageMessage) => (
            <S.ImgBlock key={imageMessage.messageId}>
              <Image
                src={imageMessage.objects[0].objectURL}
                alt="chatting_img_1"
                width={74}
                height={74}
                objectFit="cover"
              />
              <S.ImgsIcon count={imageMessage.objects?.length}>
                <i class="fa-regular fa-images"></i>
              </S.ImgsIcon>
            </S.ImgBlock>
          ))}
        </S.SideMenuImgContainer>
        <S.SideMenuTitleBlock>
          파일
          <S.SideMenuImageBlock
            src="/images/chatting/chatting_right_arrow.svg"
            alt="chatting_right_arrow"
            width={22}
            height={22}
            onClick={props.navigateTo(`/chatting/${props.chatRoomId}/files`)}
          />
        </S.SideMenuTitleBlock>
        <S.SideMenuTitleBlock>
          링크
          <S.SideMenuImageBlock
            src="/images/chatting/chatting_right_arrow.svg"
            alt="chatting_right_arrow"
            width={22}
            height={22}
            onClick={props.navigateTo(`/chatting/${props.chatRoomId}/links`)}
          />
        </S.SideMenuTitleBlock>
        {/* <S.SideMenuTitleBlock>
          파일
          <Image
            src="/images/chatting/chatting_right_arrow.svg"
            alt="chatting_right_arrow"
            width={22}
            height={22}
          />
        </S.SideMenuTitleBlock>
        <S.SideMenuDataContainer>
          <S.DataBlock>
            <S.DataImg></S.DataImg>
            <S.DataInfoBlock>
              <S.DataName>파일명을 입력해주세요.pdf</S.DataName>
              <S.DataSize>16.2 MB | ~2.1</S.DataSize>
            </S.DataInfoBlock>
          </S.DataBlock>
          <S.DataBlock>
            <S.DataImg></S.DataImg>
            <S.DataInfoBlock>
              <S.DataName>파일명을 입력해주세요.pdf</S.DataName>
              <S.DataSize>16.2 MB | ~2.1</S.DataSize>
            </S.DataInfoBlock>
          </S.DataBlock>
          <S.DataBlock>
            <S.DataImg></S.DataImg>
            <S.DataInfoBlock>
              <S.DataName>파일명을 입력해주세요.pdf</S.DataName>
              <S.DataSize>16.2 MB | ~2.1</S.DataSize>
            </S.DataInfoBlock>
          </S.DataBlock>
        </S.SideMenuDataContainer> */}
        <S.UserContainer>
          <S.UserMenuTitle>참여인원</S.UserMenuTitle>
          {props.chatRoomDrawerData?.users?.map((user) => (
            <S.UserBlock key={user.userId}>
              <S.UserImg>
                <Image
                  // src="/images/commons/user_icon.svg"
                  src={user.profileURL || "/images/commons/user_icon.svg"}
                  alt="user_icon"
                  width={40}
                  height={40}
                />
              </S.UserImg>
              <S.UserName>{user.nickName}</S.UserName>
            </S.UserBlock>
          ))}
        </S.UserContainer>
      </S.SideMenuContainer>
    </>
  );
}
