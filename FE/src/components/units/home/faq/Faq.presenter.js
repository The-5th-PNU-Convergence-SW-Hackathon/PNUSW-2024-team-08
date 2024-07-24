import * as S from "./Faq.styles";
import Image from "next/image";

export default function FaqUI(props) {
  return (
    <>
      <S.WrapperFaq>
        <S.FaqContentsContainer>
          <S.ImageBlock>
            <Image
              src="/images/faq/faq_1.svg"
              alt="faq"
              width={344}
              height={200}
            />
            <S.ImageBlurBox />
            <S.FaqTitle>
              Q.<br />
              어떤 과정을 거쳐서 동물을<br />
              입양 할 수 있나요? 입양에 필요한<br />
              서류와 비용에 대해 알고 싶어요.
            </S.FaqTitle>
          </S.ImageBlock>
          <S.FaqDetail>
            신분증, 거주증명서 등 필요 서류를 제출하고, 수수료를<br />
            지불해요. 수수료는 동물 종류나 상태에 따라 달라요.<br />
            그리고, 의료 비용도 수수료에 포함됩니다.
          </S.FaqDetail>
        </S.FaqContentsContainer>
        <S.FaqContentsContainer style={{ marginTop: "40px" }}>
          <S.ImageBlock>
            <Image
              src="/images/faq/faq_2.svg"
              alt="faq"
              width={344}
              height={200}
            />
            <S.ImageBlurBox />
            <S.FaqTitle style={{ top: "90px" }}>
              Q.<br />
              입양한 동물은 견강한가요?<br />
              예방접종은 이미 이루어졌나요?<br />
            </S.FaqTitle>
          </S.ImageBlock>
          <S.FaqDetail>
            포포는 입양 동물에게 기본적인 예방접종을<br />
            시행하고 있어요. 그래도 입양 전에 건강 상태를 확인하고,<br />
            추가적인 조치가 필요하다면 말해주세요!
          </S.FaqDetail>
        </S.FaqContentsContainer>
        <S.FaqContentsContainer style={{ marginTop: "40px" }}>
          <S.ImageBlock>
            <Image
              src="/images/faq/faq_3.svg"
              alt="faq"
              width={344}
              height={200}
            />
            <S.ImageBlurBox />
            <S.FaqTitle style={{ top: "90px" }}>
              Q.<br />
              입양 후에도 사용자들 끼리<br />
              소통할 수 있나요?
            </S.FaqTitle>
          </S.ImageBlock>
          <S.FaqDetail>
            네, 물론이죠! 포포 어플의 커뮤니티를 통해 입양 경험을<br />
            공유하고, 질문을 통해 궁금증을 해결하거나 사진을 통해<br />
            일상을 공유하는 등 다양한 방법으로 소통할 수 있어요.
          </S.FaqDetail>
        </S.FaqContentsContainer>
        <S.FaqContentsContainer style={{ marginTop: "40px" }}>
          <S.ImageBlock>
            <Image
              src="/images/faq/faq_4.svg"
              alt="faq"
              width={344}
              height={200}
            />
            <S.ImageBlurBox />
            <S.FaqTitle style={{ top: "90px" }}>
              Q.<br />
              입양을 취소하고 싶을 때는<br />
              어떻게 하나요?
            </S.FaqTitle>
          </S.ImageBlock>
          <S.FaqDetail>
            입양을 취소하고 싶다면 보호소나 입양기관에 연락해서<br />
            상황을 설명해야 해요. 하지만 입양 결정과 마찬가지도<br />
            입양 취소도 몹시 신중해야 하는 점, 물론 알고 계시겠죠?
          </S.FaqDetail>
        </S.FaqContentsContainer>
        <S.ConcludingWords>
          궁금한 내용이 없었나요?<br />
          직접 질문을 등록해보세요!
        </S.ConcludingWords>
        <S.NextButtonBlock>
          <S.NextButtonItem>질문하러 가기</S.NextButtonItem>
        </S.NextButtonBlock>
      </S.WrapperFaq>
    </>
  );
}
