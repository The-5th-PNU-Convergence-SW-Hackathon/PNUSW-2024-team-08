import * as S from "./LandingQuestion.styles";
import Image from "next/image";
import React from "react";

export default function LandingQuestionUI(props) {
  return (
    <>
      <S.CommunityQuestionBlock>
        <S.QuestionInfoBlock>
          <S.QuestionProfile>
            <S.CircularImage>
              <Image
                src={"/images/landing/landing_user_icon.svg"}
                alt="landing_user_icon"
                width={40}
                height={40}
              />
            </S.CircularImage>
            <S.QuestionUserInfo>
              <S.QuestionNickName>금정산자락</S.QuestionNickName>
              <S.QuestionDate>4일 전</S.QuestionDate>
            </S.QuestionUserInfo>
          </S.QuestionProfile>
        </S.QuestionInfoBlock>
        <S.QuestionTtile>
          부산 지역의 보호소 중에 안락사를 허용하지 않는 곳이 어디인가요?
        </S.QuestionTtile>
        <S.QuestionText>
          안녕하세요. 부산에 사는 40대입니다. 유기동물 봉사활동을 나가고 싶은데
          안락사 자체를 시키지 않는 보호소에 가고 싶네요. 봉사 경험이 있으시거나
          정보를 아신다면 꼭 남겨주세요.
        </S.QuestionText>
        <S.NumberOfAnswers>답변 2</S.NumberOfAnswers>
      </S.CommunityQuestionBlock>
      <S.CommunityQuestionBlock>
        <S.QuestionInfoBlock>
          <S.QuestionProfile>
            <S.CircularImage>
              <Image
                src={"/images/community/community_questions_profile.svg"}
                alt="community_questions_profile"
                width={40}
                height={40}
              />
            </S.CircularImage>
            <S.QuestionUserInfo>
              <S.QuestionNickName>희찬만</S.QuestionNickName>
              <S.QuestionDate>10일 전</S.QuestionDate>
            </S.QuestionUserInfo>
          </S.QuestionProfile>
        </S.QuestionInfoBlock>
        <S.QuestionTtile>
          아이가 자꾸 강아지를 키우자고 조르네요ㅜ
        </S.QuestionTtile>
        <S.QuestionText>
          12살 아이가 자꾸 친구들은 강아지 다 키운다고 우리 집에서도 키울 수
          있다고 이제는 밥까지 안 먹겠다네요 ㅜ 이걸 어떡하면 좋을까요..
          <br />
          물론 아파트에서 키울 수는 있지만 분양 받기에는 너무 비싸고 그..
        </S.QuestionText>
        <S.NumberOfAnswers>답변</S.NumberOfAnswers>
      </S.CommunityQuestionBlock>
      <S.Overlay></S.Overlay>
    </>
  );
}
