import * as S from "./Cats.styles";
import Image from "next/image";

export default function CatsUI(props) {
  return (
    <>
      <S.WrapperCats>
        <S.CatsMainContainer>
          <Image
            src="/images/cats/cats_main_image.svg"
            alt="cats_main_images"
            width={390}
            height={315}
            priority
          />
          <S.CatsMainImageBlurBox />
          <S.CatsMainTitleBlock>
            <S.CatsMainTitle>
              반려묘와
              <br />
              함께 생활하는 방법
            </S.CatsMainTitle>
            <S.CatsTitleContent>
              고양이와 함께 살아가는 법,
              <br />
              포포와 함께 알아봐요!
            </S.CatsTitleContent>
          </S.CatsMainTitleBlock>
        </S.CatsMainContainer>
        <S.CatsContentsContainer>
          <S.CatsContentsTitle>
            식사는 규칙적으로, 필요한 양만큼
          </S.CatsContentsTitle>
          <S.CatsContentsDetail>
            반려묘에게는 적절한 영양분이 필요해요!
            <br />
            규칙적인 식사 스케줄과 깨끗한 물이 가장 중요하답니다.
            <br />
            뚱냥이도 귀엽지만... 건강에 안좋으니까요!
          </S.CatsContentsDetail>
          <Image
            src="/images/dogs/about_eat_meal.svg"
            alt="about_eat_meal"
            width={344}
            height={200}
            priority
          />
        </S.CatsContentsContainer>
        <S.CatsContentsContainer style={{ marginTop: "60px" }}>
          <S.CatsContentsTitle>건강하게 지내고 싶어요</S.CatsContentsTitle>
          <S.CatsContentsDetail>
            정기적으로 동물병원에 방문하고 예방정종을 해주는게
            <br />
            좋아요. 또한 털 뭉침를 방지하기 위해 브러시를 사용하고,
            <br />
            혹여나 이빨에 이상이 없는지 주기적으로 체크해주세요.
          </S.CatsContentsDetail>
          <Image
            src="/images/cats/about_sick.svg"
            alt="about_sick"
            width={344}
            height={200}
            priority
          />
        </S.CatsContentsContainer>
        <S.CatsContentsContainer style={{ marginTop: "60px" }}>
          <S.CatsContentsTitle>가만히 있으면 심심해요!</S.CatsContentsTitle>
          <S.CatsContentsDetail>
            고양이는 사냥본능이 강한 편이라 장난감을 제공해 놀이와
            <br />
            활동을 유도해야해요. 고양이의 스트레스 해소에도 도움이
            <br />
            되고, 덤으로... 고양이의 귀여운 모습도 볼 수 있답니다!
          </S.CatsContentsDetail>
          <Image
            src="/images/cats/play_with_cat.svg"
            alt="play_with_cat"
            width={344}
            height={200}
            priority
          />
        </S.CatsContentsContainer>
        <S.CatsContentsContainer style={{ marginTop: "60px" }}>
          <S.CatsContentsTitle>한 달에 한번, 발톱 깎는 날!</S.CatsContentsTitle>
          <S.CatsContentsDetail>
            고양이의 발톱은 길고 날카로워서 사람이 정리해주지
            <br />
            않으면 발톱이 부러지거나, 다른 사람이나 고양이에게
            <br />
            상처를 입힐 수 있어요.
          </S.CatsContentsDetail>
          <Image
            src="/images/cats/cat_nail_clippers.svg"
            alt="cat_nail_clippers"
            width={344}
            height={200}
            priority
          />
        </S.CatsContentsContainer>
        <S.CatsContentsContainer style={{ marginTop: "60px" }}>
          <S.CatsContentsTitle>제일 중요한건? 애정과 관심!</S.CatsContentsTitle>
          <S.CatsContentsDetail>
            고양이는 주인의 관심과 애정을 중요하게 여겨요.
            <br />
            꾸준한 상호작용과 교감을 통해 고양이와의 유대감을
            <br />
            형성하고 반려묘와 행복한 생활을 즐겨보세요.
          </S.CatsContentsDetail>
          <Image
            src="/images/cats/most_important.svg"
            alt="most_important"
            width={344}
            height={200}
            priority
          />
        </S.CatsContentsContainer>
        <S.ConcludingWords>
          고양이 입양하기,
          <br />
          포포와 함께하세요
        </S.ConcludingWords>
      </S.WrapperCats>
    </>
  );
}
