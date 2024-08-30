import * as S from "./Dogs.styles";
import Image from "next/image";

export default function DogsUI(props) {
  return (
    <>
      <S.WrapperDogs>
        <S.DogsMainContainer>
          <Image
            src="/images/dogs/dogs_main_image.svg"
            alt="dogs_main_image"
            width={390}
            height={315}
            priority
          />
          <S.DogsMainImageBlurBox />
          <S.DogsMainTitleBlock>
            <S.DogsMainTitle>
              반려견과
              <br />
              함께 생활하는 방법
            </S.DogsMainTitle>
            <S.DogsTitleContent>
              강아지와 함께 살아가는 법,
              <br />
              포포와 함께 알아봐요!
            </S.DogsTitleContent>
          </S.DogsMainTitleBlock>
        </S.DogsMainContainer>
        <S.DogsContentsContainer>
          <S.DogsContentsTitle>
            식사는 규칙적으로, 필요한 양만큼
          </S.DogsContentsTitle>
          <S.DogsContentsDetail>
            반려견에게는 적절한 영양분이 필요해요!<br></br>
            최대한 규칙적인 식사 스케쥴을 유지하고 반려견의<br></br>
            나이,크기,활동 수준에 맞는 사료를 선택해야해요.
          </S.DogsContentsDetail>
          <Image
            src="/images/dogs/about_eat_meal.svg"
            alt="eat_meal"
            width={344}
            height={200}
            priority
          />
        </S.DogsContentsContainer>
        <S.DogsContentsContainer style={{ marginTop: "60px" }}>
          <S.DogsContentsTitle>반려견도 아파요</S.DogsContentsTitle>
          <S.DogsContentsDetail>
            반려견의 건강을 유지하기 위해 정기적인 예방접종이
            <br />
            필요해요. 내/외부 기생충 퇴치를 위해 적절한 예방책을
            <br />
            채택하고, 필요한 경우 수의사에게 상담을 받는게 좋아요.
          </S.DogsContentsDetail>
          <Image
            src="/images/dogs/about_sick.svg"
            alt="about_sick"
            width={344}
            height={200}
            priority
          />
        </S.DogsContentsContainer>
        <S.DogsContentsContainer style={{ marginTop: "60px" }}>
          <S.DogsContentsTitle>산책이 너무 좋아요!</S.DogsContentsTitle>
          <S.DogsContentsDetail>
            산책을 통해 건강을 유지하고 새로운 자극으로 정신적으로
            <br />
            활동적으로 만들어 줄 수 있어요. 다른 강아지와 만나
            <br />
            소통하기도 한답니다. 사실... 무엇보다 즐거운걸요!
          </S.DogsContentsDetail>
          <Image
            src="/images/dogs/for_a_walk.svg"
            alt="for_a_walk"
            width={344}
            height={200}
            priority
          />
        </S.DogsContentsContainer>
        <S.DogsContentsContainer style={{ marginTop: "60px" }}>
          <S.DogsContentsTitle>위험한 환경은 싫어요!</S.DogsContentsTitle>
          <S.DogsContentsDetail>
            반려견이 사는 환경을 안전하게 유지해야 해요. 유독성 물<br />
            질이나 작은 물건들은 높은 곳에 보관하고,
            <br />
            위험한 물건들을 감시하여 사고를 예방해주세요.
          </S.DogsContentsDetail>
          <Image
            src="/images/dogs/dangerous_environment.svg"
            alt="dangerous_environment"
            width={344}
            height={200}
            priority
          />
        </S.DogsContentsContainer>
        <S.DogsContentsContainer style={{ marginTop: "60px" }}>
          <S.DogsContentsTitle>가장 중요한건? 애정과 관심!</S.DogsContentsTitle>
          <S.DogsContentsDetail>
            다른 것도 중요하지만 그 중에서도 가장 중요한건<br></br>
            주인의 애정과 관심이에요. 꾸준한 교감과 애정표현으로
            <br />
            강아지가 행복하고 안정적인 생활을 할 수 있게 해주세요!
          </S.DogsContentsDetail>
          <Image
            src="/images/dogs/most_important.svg"
            alt="most_important"
            width={344}
            height={200}
            priority
          />
        </S.DogsContentsContainer>
        <S.ConcludingWords>
          강아지 입양하기,
          <br />
          포포와 함께하세요
        </S.ConcludingWords>
      </S.WrapperDogs>
    </>
  );
}
