import React, { useState } from "react";
import Linkify from "react-linkify";
import * as S from "./ChattingDetail.styles";
import Image from "next/image";

export default function ChattingDetailUI(props) {
  let lastDate = null;
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
                props.isSearchOpen
                  ? props.toggleSearch
                  : props.navigateTo("/chatting")
              }
            />
            <S.Title>{props.chatRoomName}</S.Title>
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
          {props.chatMsgList &&
            Object.entries(props.chatMsgList).map(([date, messages]) => (
              <React.Fragment key={date}>
                {date !== "uploading" && (
                  <S.DateTextBlock>
                    {`${date.slice(0, 4)}년 
                    ${parseInt(date.slice(5, 7))}월 
                    ${parseInt(date.slice(8, 10))}일`}
                  </S.DateTextBlock>
                )}
                {messages.map((message) => (
                  <S.MsgBlock key={message.messageId} isMyMsg={message.isMine}>
                    <S.UserImgBlock isMyMsg={message.isMine}>
                      <Image
                        src={
                          message.profileURL || "/images/commons/user_icon.svg"
                        }
                        alt="user_icon"
                        width={40}
                        height={40}
                        priority
                      />
                    </S.UserImgBlock>
                    <S.UserInfoBlock isMyMsg={message.isMine}>
                      <S.UserNameText isMyMsg={message.isMine}>
                        {message.nickName}
                      </S.UserNameText>

                      {message.messageType === "TEXT" && (
                        <S.MsgText
                          isMyMsg={message.isMine}
                          isDetail={props.isDetail[message.messageId]}
                        >
                          {props.isDetail[message.messageId]
                            ? message.content
                            : props.truncateString(message.content, 250)}
                          {message.content.length > 250 && (
                            <S.MsgDetailBlock
                              isMyMsg={message.isMine}
                              isLong={message.content.length > 250}
                              onClick={() =>
                                props.toggleDetail(message.messageId)
                              }
                            >
                              <S.MsgDetailText>
                                {props.isDetail[message.messageId]
                                  ? "닫기"
                                  : "자세히 보기"}
                              </S.MsgDetailText>
                              <S.MsgDetailArrow>{`>`}</S.MsgDetailArrow>
                            </S.MsgDetailBlock>
                          )}
                        </S.MsgText>
                      )}

                      {message.messageType === "IMAGE" && (
                        <S.MsgPhotoBlock
                          isMyMsg={message.isMine}
                          imageCount={message.objects?.length}
                          isUploading={message.isUploading}
                        >
                          <S.LoadingImg
                            isUploading={message.isUploading || false}
                          ></S.LoadingImg>
                          {message.objects?.map((object, index) => (
                            <S.MsgPhoto
                              src={object.objectURL}
                              alt={`image-${index}`}
                              key={index}
                              imageCount={message.objects?.length}
                              index={index}
                              area={`img${index + 1}`}
                              onClick={() =>
                                props.openPhotoModal(
                                  message.objects?.map(
                                    (object) => object.objectURL
                                  ),
                                  index
                                )
                              }
                              priority
                            />
                          ))}
                        </S.MsgPhotoBlock>
                      )}

                      {message.messageType === "FILE" && (
                        <S.MsgFileBlock
                          isMyMsg={message.isMine}
                          isUploading={message.isUploading}
                        >
                          <S.LoadingImg
                            isUploading={message.isUploading || false}
                          ></S.LoadingImg>
                          <S.MsgFileInfoBlock>
                            <S.MsgFileImg
                              src={props.getFileIconPath(
                                message.content.split(".")[1].split(",")[0]
                              )}
                              alt="file_icon"
                              width={50}
                              height={50}
                            />
                            <S.MsgFileNameSizeBlock>
                              <S.MsgFileName>
                                {message.content.split(",")[0].trim()}
                              </S.MsgFileName>
                              <S.MsgFileSize>
                                {message.content.includes(",")
                                  ? message.content.split(",")[1].trim()
                                  : ""}
                              </S.MsgFileSize>
                            </S.MsgFileNameSizeBlock>
                          </S.MsgFileInfoBlock>
                          <S.MsgFileDownloadIcon
                            onClick={() =>
                              props.downloadFile(
                                message.objects[0].objectURL,
                                message.content.includes(",")
                                  ? message.content.split(",")[0].trim()
                                  : message.content.trim()
                              )
                            }
                          >
                            <Image
                              src="/images/chatting/download_icon.svg"
                              alt="download_icon"
                              width={25}
                              height={25}
                            />
                          </S.MsgFileDownloadIcon>
                        </S.MsgFileBlock>
                      )}

                      {message.messageType === "LINK" && (
                        <>
                          <S.MsgText isMyMsg={message.isMine}>
                            <props.LinkifyText content={message.content} />
                          </S.MsgText>
                          <S.MsgLinkBlock
                            onClick={() =>
                              window.open(message.linkMetadata.ogUrl, "_blank")
                            }
                          >
                            <S.MsgLinkImg>
                              {/* {message.linkMetadata.image ? (
                                <img
                                  src={message.linkMetadata.image}
                                  alt="link_icon"
                                  width={198}
                                  height={89}
                                  objectFit="cover"
                                />
                              ) : (
                                <S.MsgLinkDefaultImg></S.MsgLinkDefaultImg>
                              )} */}
                              {message.linkMetadata.image && (
                                <img
                                  src={message.linkMetadata.image}
                                  alt="link_icon"
                                  width={218}
                                  height={99}
                                  objectFit="cover"
                                />
                              )}
                            </S.MsgLinkImg>
                            <S.MsgLinkInfoBlock>
                              <S.MsgLinkTitle>
                                {message.linkMetadata.title}
                              </S.MsgLinkTitle>
                              <S.MsgLinkDescription>
                                {message.linkMetadata.description}
                              </S.MsgLinkDescription>
                              <S.MsgLinkSite>
                                {props.getMainDomain(
                                  message.linkMetadata.ogUrl
                                )}
                              </S.MsgLinkSite>
                            </S.MsgLinkInfoBlock>
                          </S.MsgLinkBlock>
                        </>
                      )}
                    </S.UserInfoBlock>
                    <S.TimeTextBlock isMyMsg={message.isMine}>
                      {message.date
                        ? message.date.slice(11, 13) - 0 >= 12
                          ? `오후 ${
                              message.date.slice(11, 13) - 0 === 12
                                ? 12
                                : message.date.slice(11, 13) - 12
                            }${message.date.slice(13, 16)}`
                          : `오전 ${
                              message.date.slice(11, 13) - 0
                            }${message.date.slice(13, 16)}`
                        : ""}
                    </S.TimeTextBlock>
                  </S.MsgBlock>
                ))}
              </React.Fragment>
            ))}
        </S.WrapperContents>
      )}

      {props.isPhotoModalOpen && props.photosModal.length > 0 && (
        <S.PhotoModalOverlay onClick={props.closePhotoModal}>
          <S.PhotoModalContent
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
          </S.PhotoModalContent>
        </S.PhotoModalOverlay>
      )}
    </>
  );
}
