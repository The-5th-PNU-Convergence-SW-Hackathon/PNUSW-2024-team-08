import * as S from "./Inquire.styles";
import Image from "next/image";

export default function InquireUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.navigateBack}
            />
            <S.Title>입양 문의하기</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperInquire>
        <S.InfoContainer>
          <S.InfoTitle>동물 정보</S.InfoTitle>
          <S.InfoLargeBlock>
            <S.InfoLabel>동물 이름</S.InfoLabel>
            <S.InfoLargeInput type="text" placeholder="포리" disabled />
          </S.InfoLargeBlock>
          <S.InfoLargeBlock>
            <S.InfoLabel>동물 품종</S.InfoLabel>
            <S.InfoLargeInput type="text" placeholder="리트리버" disabled />
          </S.InfoLargeBlock>
          <S.GenderAgeBlock>
            <S.InfoSmallBlock>
              <S.InfoLabel>성별</S.InfoLabel>
              <S.InfoSmallInput type="text" placeholder="수컷" disabled />
            </S.InfoSmallBlock>
            <S.InfoSmallBlock>
              <S.InfoLabel>나이</S.InfoLabel>
              <S.InfoSmallInput type="text" placeholder="4살" disabled />
            </S.InfoSmallBlock>
          </S.GenderAgeBlock>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.InfoTitle>신청인 정보</S.InfoTitle>
          <S.InfoLargeBlock>
            <S.InfoLabel>이름</S.InfoLabel>
            <S.InfoLargeInput type="text" placeholder="이름을 입력해주세요." />
          </S.InfoLargeBlock>
          <S.InfoLargeBlock>
            <S.InfoLabel>연락처</S.InfoLabel>
            <S.InfoLargeInput
              type="text"
              placeholder="연락처를 입력해주세요."
            />
          </S.InfoLargeBlock>
          <S.InfoLargeBlock>
            <S.InfoLabel>거주지</S.InfoLabel>
            <S.InfoAddressSearchBlock>
              <S.InfoMiddleInput
                type="text"
                placeholder="도로명, 건물명, 번지 검색"
              />
              <S.InfoSearchButton>
                <Image
                  src="/images/pets/address_search_icon.svg"
                  alt="address_search_icon"
                  width={26}
                  height={26}
                />
              </S.InfoSearchButton>
            </S.InfoAddressSearchBlock>
            <S.InfoLargeInput
              type="text"
              placeholder="연락처를 입력해주세요."
            />
          </S.InfoLargeBlock>
        </S.InfoContainer>
        <S.InquireButton>입양 문의하기</S.InquireButton>
      </S.WrapperInquire>
    </>
  );
}
