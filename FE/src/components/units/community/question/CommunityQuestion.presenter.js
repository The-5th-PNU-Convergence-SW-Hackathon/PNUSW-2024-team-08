import * as S from "./CommunityQuestion.styles";
import Image from "next/image";

export default function CommunityQuestionUI(props) {
  return (
    <>
      <S.WrapperContents>
        {props.questions.map((question) => (
          <S.CommunityQuestionBlock
            isAnswered={question.answerNum > 0}
            key={question.id}
            onClick={() =>
              props.handleRequireModal(`/community/question/${question.id}`)
            }
          >
            <S.QuestionInfoBlock>
              <S.QuestionProfile>
                <Image
                  src="/images/community/community_questions_profile.svg"
                  alt="community_questions_profile"
                  width={40}
                  height={40}
                />
                {question.name}
              </S.QuestionProfile>
              <S.QuestionDate>
                {question.date.slice(2, 4)}.{question.date.slice(5, 7)}.
                {question.date.slice(8, 10)}
              </S.QuestionDate>
            </S.QuestionInfoBlock>
            <S.QuestionTtile>
              {props.truncateString(question.title, 21)}
            </S.QuestionTtile>
            <S.QuestionText>
              {props.truncateString(question.content, 70)}
            </S.QuestionText>
            <S.NumberOfAnswers>답변 {question.answerNum}</S.NumberOfAnswers>
          </S.CommunityQuestionBlock>
        ))}

        <S.CommunityAddIcon
          onClick={() =>
            props.handleRequireModal("/community/write?type=question")
          }
        >
          <Image
            src="/images/community/community_add_icon.svg"
            alt="community_add_icon"
            width={28}
            height={28}
          />
        </S.CommunityAddIcon>
        {props.questions.length > 0 && (
          <S.MoreButton onClick={props.handleLoadQuestions}>
            더 보기
          </S.MoreButton>
        )}
      </S.WrapperContents>
    </>
  );
}
