import React from "react";
import * as S from "./ChattingDetail.styles";
import Image from "next/image";

export default function ChattingDetailUI(props) {
  console.log("chatMsgList: " + JSON.stringify(props.chatMsgList, null, 2));
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
              onClick={
                props.isSearchOpen ? props.toggleSearch : props.navigateBack
              }
            />
            <S.Title>단톡방 이름</S.Title>
          </S.LeftArrowTitleContainer>
          <S.MenuContainer>
            <S.MenuIcon
              onClick={props.toggleSearch}
              isSearchOpen={props.isSearchOpen}
            >
              <Image
                src="/images/header/search_icon.svg"
                alt="search_icon"
                width={44}
                height={44}
              />
            </S.MenuIcon>
            <S.SearchInput
              isSearchOpen={props.isSearchOpen}
              placeholder="검색어를 입력해주세요"
            />
            <S.MenuIcon onClick={props.toggleSideMenu}>
              <Image
                src="/images/header/bar_menu_icon.svg"
                alt="bar_menu_icon"
                width={44}
                height={44}
              />
            </S.MenuIcon>
          </S.MenuContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.NoticeTextBlock>공지사항을 입력해주세요</S.NoticeTextBlock>
      {props.initialRender ? (
        <S.ChattingOverlay></S.ChattingOverlay>
      ) : (
        <S.WrapperContents
          initialRender={props.initialRender}
          ref={props.scrollRef}
        >
          {Object.entries(props.chatMsgList).map(([date, messages]) => (
            <React.Fragment key={date}>
              <S.DateTextBlock>
                {`${date.slice(0, 4)}년 
              ${parseInt(date.slice(5, 7))}월 
              ${date.slice(8, 10)}일`}
              </S.DateTextBlock>
              {messages.map((message) => (
                <S.MsgBlock key={message.messageId} isMyMsg={message.isMine}>
                  <S.UserImgBlock isMyMsg={message.isMine}>
                    <Image
                      src="/images/commons/user_icon.svg"
                      alt="user_icon"
                      width={40}
                      height={40}
                      priority
                    />
                  </S.UserImgBlock>
                  <S.UserInfoBlock isMyMsg={message.isMine}>
                    <S.UserNameText>{message.userName}</S.UserNameText>
                    {message.imageURL === null ? (
                      <S.MsgText isMyMsg={message.isMine}>
                        {message.content}
                      </S.MsgText>
                    ) : (
                      <S.MsgPhotoBlock
                        isMyMsg={message.isMine}
                        imageCount={message.imageURL.length}
                      >
                        {message.imageURL.map((url, index) => (
                          <S.MsgPhoto
                            src={url}
                            alt={`image-${index}`}
                            key={index}
                            imageCount={message.imageURL.length}
                            index={index}
                            area={`img${index + 1}`}
                            onClick={() =>
                              props.openPhotoModal(message.imageURL, index)
                            }
                          />
                        ))}
                      </S.MsgPhotoBlock>
                    )}
                  </S.UserInfoBlock>
                  <S.TimeTextBlock isMyMsg={message.isMine}>
                    {message.date.slice(11, 13) - 0 >= 12
                      ? `오후 ${
                          message.date.slice(11, 13) - 0 === 12
                            ? 12
                            : message.date.slice(11, 13) - 12
                        }${message.date.slice(13, 16)}`
                      : `오전 ${
                          message.date.slice(11, 13) - 0
                        }${message.date.slice(13, 16)}`}
                  </S.TimeTextBlock>
                </S.MsgBlock>
              ))}
            </React.Fragment>
          ))}
        </S.WrapperContents>
      )}

      {props.isPhotoModalOpen && props.photosModal.length > 0 && (
        <S.ModalOverlay onClick={props.closePhotoModal}>
          <S.ModalContent
            {...props.photoModalHandlers}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={props.photosModal[props.currentIndex]}
              alt={`current photo ${props.currentIndex}`}
            />
            <S.PrevBtn onClick={props.handlePrev}>〈</S.PrevBtn>
            <S.NextBtn onClick={props.handleNext}>〉</S.NextBtn>
            <S.PhotoIndexBlock>
              {props.currentIndex + 1 + " / " + props.photosModal.length}
            </S.PhotoIndexBlock>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
}
