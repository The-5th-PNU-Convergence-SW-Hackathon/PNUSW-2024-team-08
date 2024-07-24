import * as S from "./QuestionDetail.styles";
import Image from "next/image";

export default function QuestionDetailUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.UserContainer>
          <S.UserPhoto>
            <Image
              src="/images/header/profile_icon.svg"
              alt="profile_icon"
              width={44}
              height={44}
            />
          </S.UserPhoto>
          <S.UserInfoBlock>
            <S.UserNickname>{props.questionDetail?.name}</S.UserNickname>
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={44}
              height={44}
            />
          </S.UserInfoBlock>
        </S.UserContainer>
        <S.QuestionDetailBlock>
          <S.QuestionTtile>
            {"Q. " + props.questionDetail?.title}
          </S.QuestionTtile>
          <S.QuestionText>{props.questionDetail?.content}</S.QuestionText>
        </S.QuestionDetailBlock>
        <S.AnswerBtn
          onClick={props.navigateTo(`/community/question/${props.id}/answer`)}
        >
          답변하기
        </S.AnswerBtn>
        {props.questionDetail?.answers &&
          props.questionDetail?.answers.map((answer) => (
            <S.AnswerDetailBlock key={answer.id}>
              <S.AnswerUserBlock>
                <S.AnswerProfile>
                  <Image
                    src="/images/community/community_questions_profile.svg"
                    alt="community_questions_profile"
                    width={40}
                    height={40}
                  />
                  <S.AnswerInfoBlock>
                    <S.UserNickname>{answer.name}</S.UserNickname>
                    <S.UpdatedTime>
                      {answer.date.slice(0, 10)} {answer.date.slice(11, 19)}
                    </S.UpdatedTime>
                  </S.AnswerInfoBlock>
                </S.AnswerProfile>
              </S.AnswerUserBlock>
              <S.AnswerText>{answer.content}</S.AnswerText>
            </S.AnswerDetailBlock>
          ))}
      </S.WrapperContents>
    </>
  );
}
