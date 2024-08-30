import * as S from "./QuestionDetail.styles";
import dynamic from "next/dynamic";
import Image from "next/image";
import Slider from "react-slick";
import React from "react";

// Dynamic import for FontAwesomeIcon
const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function QuestionDetailUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.UserContainer>
          <S.UserPhoto>
            <S.CircularImage>
              <Image
                src={
                  props.questionDetail?.profileURL
                    ? props.questionDetail?.profileURL
                    : "/images/header/profile_icon.svg"
                }
                alt="profile_icon"
                width={44}
                height={44}
              />
            </S.CircularImage>
          </S.UserPhoto>
          <S.UserInfoBlock>
            <S.UserNickname>{props.questionDetail?.nickName}</S.UserNickname>
            <S.UpdatedTime>
              {props.useFormatDateTime(props.questionDetail?.date)}
            </S.UpdatedTime>
          </S.UserInfoBlock>
          <S.MenuContainer ref={(el) => (props.menuRefs.current[0] = el)}>
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={44}
              height={44}
              onClick={() => props.handleMenuClick(0)}
            />
            {props.questionDetail?.isMine ? (
              <S.MenuBlock active={props.isMenuClicked[0]}>
                <S.EditSubMenu
                  onClick={props.navigateTo(
                    `/community/question/${props.id}/edit`
                  )}
                >
                  수정하기
                </S.EditSubMenu>
                <S.DeleteSubMenu
                  onClick={() => props.handleQuestionDelete(props.id)}
                >
                  삭제하기
                </S.DeleteSubMenu>
              </S.MenuBlock>
            ) : (
              <S.MenuBlock active={props.isMenuClicked[0]}>
                <S.ReportSubMenu
                  onClick={() => {
                    props.handleOpen(props.id, "POST");
                  }}
                >
                  신고하기
                </S.ReportSubMenu>
              </S.MenuBlock>
            )}
          </S.MenuContainer>
        </S.UserContainer>
        <S.QuestionDetailBlock>
          <S.QuestionTtile>
            {"Q. " + props.questionDetail?.title}
          </S.QuestionTtile>
          <S.QuestionText>{props.questionDetail?.content}</S.QuestionText>
          {props.questionDetail?.images?.length > 0 && (
            <S.QuestionImgBlock
              imageCount={props.questionDetail?.images.length}
            >
              <Slider
                {...props.getSliderSettings(
                  props.questionDetail?.images.length
                )}
              >
                {props.questionDetail?.images.map((image, index) => (
                  <S.QuestionImgItem key={image.id}>
                    <S.QuestionImg
                      src={image.imageURL}
                      alt="community_detail_1"
                      width={224}
                      height={197}
                      objectFit="cover"
                    />
                    <S.ZoomIconBlock
                      onClick={() =>
                        props.openPhotoModal(
                          props.questionDetail.images.map(
                            (img) => img.imageURL
                          ),
                          index
                        )
                      }
                    >
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </S.ZoomIconBlock>
                  </S.QuestionImgItem>
                ))}
              </Slider>
            </S.QuestionImgBlock>
          )}
        </S.QuestionDetailBlock>
        <S.AnswerBtn
          onClick={props.navigateTo(`/community/question/${props.id}/answer`)}
        >
          답변하기
        </S.AnswerBtn>
        {props.questionDetail?.answers &&
          props.questionDetail?.answers.map((answer, index) => (
            <S.AnswerDetailBlock key={answer.id}>
              <S.AnswerUserBlock>
                <S.AnswerProfile>
                  <S.CircularImage>
                    <Image
                      src={
                        answer.profileURL
                          ? answer.profileURL
                          : "/images/header/profile_icon.svg"
                      }
                      alt="community_questions_profile"
                      width={40}
                      height={40}
                    />
                  </S.CircularImage>
                  <S.AnswerInfoBlock>
                    <S.UserNickname>{answer.nickName}</S.UserNickname>
                    <S.UpdatedTime>
                      {props.useFormatDateTime(answer.date)}
                    </S.UpdatedTime>
                  </S.AnswerInfoBlock>

                  <S.AnswerMenuContainer
                    ref={(el) => (props.menuRefs.current[index + 1] = el)}
                  >
                    <Image
                      src="/images/header/menu_icon.svg"
                      alt="menu_icon"
                      width={34}
                      height={34}
                      onClick={() => props.handleMenuClick(index + 1)}
                    />
                    {answer.isMine ? (
                      <S.AnswerMenuBlock
                        active={props.isMenuClicked[index + 1]}
                      >
                        <S.AnswerEditSubMenu
                          onClick={props.navigateTo(
                            `/community/question/${props.id}/answer/edit?answer_id=${answer.id}`
                          )}
                        >
                          수정하기
                        </S.AnswerEditSubMenu>
                        <S.AnswerDeleteSubMenu
                          onClick={() => props.handleAnswerDelete(answer.id)}
                        >
                          삭제하기
                        </S.AnswerDeleteSubMenu>
                      </S.AnswerMenuBlock>
                    ) : (
                      <S.AnswerMenuBlock
                        active={props.isMenuClicked[index + 1]}
                      >
                        <S.AnswerReportSubMenu
                          onClick={() => {
                            props.handleOpen(answer.id, "POST");
                          }}
                        >
                          신고하기
                        </S.AnswerReportSubMenu>
                      </S.AnswerMenuBlock>
                    )}
                  </S.AnswerMenuContainer>
                </S.AnswerProfile>
              </S.AnswerUserBlock>
              <S.AnswerText>{answer.content}</S.AnswerText>
              {answer.images && answer.images.length > 0 && (
                <S.AnswerImgBlock imageCount={answer.images.length}>
                  <Slider {...props.getSliderSettings(answer.images.length)}>
                    {answer.images.map((image, idx) => (
                      <S.AnswerImgItem key={image.id}>
                        <S.AnswerImg
                          src={image.imageURL}
                          alt="community_detail_1"
                          width={224}
                          height={197}
                          objectFit="cover"
                        />
                        <S.ZoomIconBlock
                          onClick={() =>
                            props.openPhotoModal(
                              answer.images.map((img) => img.imageURL),
                              idx
                            )
                          }
                        >
                          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        </S.ZoomIconBlock>
                      </S.AnswerImgItem>
                    ))}
                  </Slider>
                </S.AnswerImgBlock>
              )}
            </S.AnswerDetailBlock>
          ))}
      </S.WrapperContents>

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
