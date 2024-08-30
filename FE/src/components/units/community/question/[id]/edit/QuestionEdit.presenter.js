import React from "react";
import * as S from "./QuestionEdit.styles";
import Image from "next/image";

export default function QuestionEditUI(props) {
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
              onClick={props.navigateBack}
            />
            <S.Title>질문하기</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <form onSubmit={props.handleSubmit}>
        <S.WrapperWrite>
          <S.TitleInput
            type="text"
            name="title"
            placeholder="제목을 작성해주세요."
            value={props.postData.title}
            onChange={props.handleChange}
          />
          <S.TextInput
            type="text"
            name="content"
            placeholder="내용을 작성해주세요."
            value={props.postData.content}
            onChange={props.handleChange}
          />
          <S.TextMinLengthMessage isValid={props.isContentValid}>
            최소 50자 이상의 내용을 포함해야 합니다.
          </S.TextMinLengthMessage>
          <S.PhotoWrapper>
            <S.PhotoUploadTitle>사진 첨부</S.PhotoUploadTitle>
            <S.PhotoContainer>
              {props.photos.map((photo, index) => (
                <S.AddedPhotoBlock key={photo.id}>
                  <S.PhotoBox
                    onClick={() =>
                      props.openPhotoModal(
                        props.photos.map(
                          (photo) => photo.preview || photo.imageURL
                        ),
                        index
                      )
                    }
                  >
                    <S.PhotoImg
                      src={photo.preview || photo.imageURL}
                      alt={photo.name}
                      width={100}
                      height={100}
                    />
                  </S.PhotoBox>
                  <S.PhotoDeleteButton
                    onClick={() => props.deletePhoto(photo.id)}
                  >
                    삭제
                  </S.PhotoDeleteButton>
                </S.AddedPhotoBlock>
              ))}
              {!props.isPhotoLimitReached && (
                <>
                  <input
                    type="file"
                    ref={props.fileInputRef}
                    style={{ display: "none" }}
                    multiple
                    onChange={props.handlePhotoUpload}
                  />
                  <S.PhotoAddBox onClick={props.handlePhotoAddClick}>
                    <Image
                      src="/images/community/photo_add.svg"
                      alt="photo_add"
                      width={29.12}
                      height={29.12}
                    />
                  </S.PhotoAddBox>
                </>
              )}
            </S.PhotoContainer>
          </S.PhotoWrapper>
        </S.WrapperWrite>
        <S.SubmitButtonWrapper>
          <S.SubmitButton type="submit">게시글 수정</S.SubmitButton>
        </S.SubmitButtonWrapper>
      </form>

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
