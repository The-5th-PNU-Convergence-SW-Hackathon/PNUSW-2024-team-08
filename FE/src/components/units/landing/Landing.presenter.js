import * as S from "./Landing.styles";
import Image from "next/image";
import Slider from "react-slick";
import React from "react";
import LandingMeetingUI from "./meeting/LandingMeeting.presenter";
import LandingQuestionUI from "./question/LandingQuestion.presenter";

export default function LandingUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.LandingForPawIcon>
          <Image
            src="/images/landing/landing_forpaw_icon.svg"
            alt="landing_forpaw_icon"
            width={46}
            height={52}
          />
        </S.LandingForPawIcon>
        <S.SlideImgBlock>
          <Slider
            ref={props.sliderRef}
            {...props.getSliderSettings}
            afterChange={props.handleAfterChange}
          >
            <S.LandingContent>
              <S.LandingText>
                포포는 사람과 유기동물을
                <br />
                이어주는 플랫폼이에요.
              </S.LandingText>
              <S.LandingSubText>
                모든 생명체는 존중 받을 권리가 있어요.
              </S.LandingSubText>
              <S.LandingImg1>
                <Image
                  src="/images/landing/landing_image_1.svg"
                  alt="landing_imgage_1"
                  width={305}
                  height={313}
                  priority
                />
              </S.LandingImg1>
            </S.LandingContent>
            <S.LandingContent>
              <S.LandingText>
                우리 지역 보호소에서
                <br />
                유기동물 봉사에 참여해 보세요.
              </S.LandingText>
              <S.LandingSubText>
                마음에 맞는 사람과 함께 모임을 만들 수 있어요.
              </S.LandingSubText>
              <LandingMeetingUI />
            </S.LandingContent>
            <S.LandingContent>
              <S.LandingText>
                보호 중인 동물들을
                <br />
                안전하게 입양해 보세요.
              </S.LandingText>
              <S.LandingSubText>
                근처의 보호소에서 동물을 데려올 수 있어요.
              </S.LandingSubText>
              <S.LandingImg3>
                <Image
                  src="/images/landing/landing_image_3.svg"
                  alt="landing_imgage_1"
                  width={344}
                  height={344}
                  priority
                />
              </S.LandingImg3>
            </S.LandingContent>
            <S.LandingContent>
              <S.LandingText>
                서로 궁금한 점을 나누고
                <br />
                이야기를 공유해 보세요.
              </S.LandingText>
              <S.LandingSubText>
                커뮤니티를 통해 질문하고 채팅을 나눌 수 있어요.
              </S.LandingSubText>
              <LandingQuestionUI />
            </S.LandingContent>
          </Slider>
        </S.SlideImgBlock>
        <S.StartBtn
          isLastSlide={props.currentSlide === 3}
          onClick={props.handleStartButtonClick}
        >
          {props.currentSlide === 3 ? "포포 시작하기" : "다음"}
        </S.StartBtn>
        <S.StartText isFirstSlide={props.currentSlide === 0}>
          이미 계정이 있나요?{" "}
          <span onClick={props.navigateTo("/login")}>로그인</span>
        </S.StartText>
      </S.WrapperContainer>
    </>
  );
}
