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
          <Image
            src="/images/chatting/chatting_right_arrow.svg"
            alt="chatting_right_arrow"
            width={22}
            height={22}
          />
        </S.SideMenuTitleBlock>
        <S.SideMenuImgContainer>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_1.svg"
              alt="chatting_img_1"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_2.svg"
              alt="chatting_img_2"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_3.svg"
              alt="chatting_img_3"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_4.svg"
              alt="chatting_img_4"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_5.svg"
              alt="chatting_img_5"
              width={74}
              height={74}
            />
          </S.ImgBlock>
          <S.ImgBlock>
            <Image
              src="/images/chatting/chatting_img_6.svg"
              alt="chatting_img_6"
              width={74}
              height={74}
            />
          </S.ImgBlock>
        </S.SideMenuImgContainer>
        <S.SideMenuTitleBlock>
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
        </S.SideMenuDataContainer>
        <S.SideMenuTitleBlock>참여인원</S.SideMenuTitleBlock>
        <S.UserContainer>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserImg>
              <Image
                src="/images/commons/user_icon.svg"
                alt="user_icon"
                width={30}
                height={30}
              />
            </S.UserImg>
            <S.UserName>김포포</S.UserName>
          </S.UserBlock>
        </S.UserContainer>
      </S.SideMenuContainer>
    </>
  );
}
