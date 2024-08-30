import React from "react";
import * as S from "./QuestionAnswer.styles";
import Image from "next/image";

export default function QuestionAnswerUI(props) {
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
            <S.Title>답변하기</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <form onSubmit={props.handleSubmit}>
        <S.WrapperWrite>
          <S.TextInput
            type="text"
            name="content"
            placeholder="내용을 작성해주세요."
            onChange={props.handleChange}
          />
          <S.PhotoWrapper>
            <S.PhotoUploadTitle>사진 첨부</S.PhotoUploadTitle>
            <S.PhotoContainer>
              {props.photos.map((photo, index) => (
                <S.AddedPhotoBlock key={photo.id}>
                  <S.PhotoBox
                    onClick={() =>
                      props.openPhotoModal(
                        props.photos.map((photo) => photo.preview),
                        index
                      )
                    }
                  >
                    <S.PhotoImg
                      src={photo.preview}
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
          <S.SubmitButton type="submit">게시글 등록</S.SubmitButton>
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
