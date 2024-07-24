import * as S from "./Intro.styles";
import Image from "next/image";

export default function IntroUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <S.HeaderContainer>
            <S.HeaderTitleBlock>
              <S.HeadrtBlank />
              <S.HeaderTitle >포포는 무슨 일을 하나요?</S.HeaderTitle>
            </S.HeaderTitleBlock>
          </S.HeaderContainer>
          <S.IntroContainer>
            <S.IntroduceBrandMainBlock>
              <Image
                src="/images/intro/intro_main.svg"
                alt="intro_main"
                width={390}
                height={400}
              />
              <S.IntroMainImageBlurBox />
              <S.IntroMainTitleBlock>
                <S.IntroMainTitle>사람과 유기동물을<br />이어주는 플랫폼</S.IntroMainTitle>
                <S.IntroTItleContent>
                  포포는 모든 동물이 사랑을 받을 권리가 있다고 믿습니다.<br />
                  유기동물의 입양을 통해 무책임한 유기행위를 줄이고,<br />
                  입양 가정에 행복한 동반자를 제공하여 소중한 가족을<br />
                  만들어주는 서비스를 만들어가고자 합니다.
                </S.IntroTItleContent>
              </S.IntroMainTitleBlock>
            </S.IntroduceBrandMainBlock>
            <S.IntroduceBrandBlock>
              <S.IntroduceBrand>포포 브랜드 소개</S.IntroduceBrand>
              <S.IntroduceBrandDetail>
                `For paw`는 `앞 발을 가진 모든 동물들을 위해` 라는<br />
                슬로건을 가지고 시작했어요. 반려동물을 구매하는게<br />
                아닌, 입양하는 문화를 만들기 위해 노력하고 있어요.
              </S.IntroduceBrandDetail>
              <Image
                src="/images/intro/introduce_brand.svg"
                alt="introduce_brand"
                width={344}
                height={200}
              />
            </S.IntroduceBrandBlock>
            <S.IntroduceBrandBlock style={{ height: "328px", marginTop: "82px" }}>
              <S.IntroduceBrand>책임의 무게</S.IntroduceBrand>
              <S.IntroduceBrandDetail>
                모든 입양은 유기동물에 대한 책임을 가지고<br />
                이루어져야해요. 포포는 동물의 건강과 행복을 최우선으로<br />
                생각하며, 동물복지에 기여하고자 해요.
              </S.IntroduceBrandDetail>
              <Image
                src="/images/intro/the_weight_of_responsibility.svg"
                alt="the_weight_of_responsibility"
                width={344}
                height={200}
              />
            </S.IntroduceBrandBlock>
            <S.IntroduceBrandBlock style={{ height: "349px", marginTop: "82px" }}>
              <S.IntroduceBrand>포포와 함께</S.IntroduceBrand>
              <S.IntroduceBrandDetail style={{ height: "96px" }}>
                포포는 모두가 행복한 동반자를 만날 수 있도록<br />
                노력하고 있어요. 유기동물들에게 새로운 가족을<br />
                소개하고, 더 나은 세상을 만들어 가기 위한<br />
                여정에 참여 해주세요!
              </S.IntroduceBrandDetail>
              <Image
                src="/images/intro/together_paw.svg"
                alt="together_paw"
                width={344}
                height={200}
              />
            </S.IntroduceBrandBlock>
            <S.ConcludingWords>
              포포와 함께<br />
              유기동물의 손을 잡아주세요.
            </S.ConcludingWords>
          </S.IntroContainer>
          <S.NextButtonBlock onClick={props.navigateTo('/login')}>
            <S.NextButtonItem>시작하기</S.NextButtonItem>
          </S.NextButtonBlock>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}