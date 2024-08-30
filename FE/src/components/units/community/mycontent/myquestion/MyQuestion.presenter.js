import * as S from "./MyQuestion.styles";
import Image from "next/image";

export default function MyQuestionUI(props) {
  return (
    <>
      <S.WrapperContents ref={props.scrollRef}>
        {props.myQuestion.map((question) => (
          <S.CommunityQuestionBlock
            isAnswered={question.answerNum > 0}
            key={question.id}
            onClick={() =>
              props.handleRequireModal(`/community/question/${question.id}`)
            }
          >
            <S.QuestionInfoBlock>
              <S.QuestionProfile>
                <S.CircularImage>
                  <Image
                    src={
                      question?.profileURL
                        ? question?.profileURL
                        : "/images/community/community_questions_profile.svg"
                    }
                    alt="community_questions_profile"
                    width={40}
                    height={40}
                  />
                </S.CircularImage>
                <S.QuestionUserInfo>
                  <S.QuestionNickName>{question.nickName}</S.QuestionNickName>
                  <S.QuestionDate>
                    {props.useFormatDateTime(question.date)}
                  </S.QuestionDate>
                </S.QuestionUserInfo>
              </S.QuestionProfile>
            </S.QuestionInfoBlock>
            <S.QuestionTtile>
              {props.truncateString(question.title, 50)}
            </S.QuestionTtile>
            <S.QuestionText>
              {/* {question.content} */}
              {props.truncateString(question.content, 140)}
            </S.QuestionText>
            <S.NumberOfAnswers>답변 {question.answerNum}</S.NumberOfAnswers>
          </S.CommunityQuestionBlock>
        ))}
        {props.scrollLoading && ( // 스크롤 로딩 중일 때 로딩 아이콘 표시
          <S.LoadingImgBox isLoading={props.scrollLoading}>
            <S.LoadingImg />
          </S.LoadingImgBox>
        )}
      </S.WrapperContents>
    </>
  );
}
