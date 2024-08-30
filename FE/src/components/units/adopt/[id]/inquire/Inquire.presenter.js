import * as S from "./Inquire.styles";
import Image from "next/image";
import DaumPostcode from "react-daum-postcode";

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
            <S.InfoLargeInput
              type="text"
              placeholder={props.petDetailData.name}
              disabled
            />
          </S.InfoLargeBlock>
          <S.InfoLargeBlock>
            <S.InfoLabel>동물 품종</S.InfoLabel>
            <S.InfoLargeInput
              type="text"
              placeholder={props.petDetailData.kind}
              disabled
            />
          </S.InfoLargeBlock>
          <S.GenderAgeBlock>
            <S.InfoSmallBlock>
              <S.InfoLabel>성별</S.InfoLabel>
              <S.InfoSmallInput
                type="text"
                placeholder={
                  props.petDetailData.gender === "M" ? "수컷" : "암컷"
                }
                disabled
              />
            </S.InfoSmallBlock>
            <S.InfoSmallBlock>
              <S.InfoLabel>나이</S.InfoLabel>
              <S.InfoSmallInput
                type="text"
                placeholder={props.petDetailData.age.slice(0, 4) + "년생"}
                disabled
              />
            </S.InfoSmallBlock>
          </S.GenderAgeBlock>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.InfoTitle>신청인 정보</S.InfoTitle>
          <S.InfoLargeBlock>
            <S.InfoLabel>이름</S.InfoLabel>
            <S.InfoLargeInput
              type="text"
              placeholder="이름을 입력해주세요."
              value={props.name}
              onChange={props.handleNameChange}
            />
          </S.InfoLargeBlock>
          <S.InfoLargeBlock>
            <S.InfoLabel>연락처</S.InfoLabel>
            <S.InfoLargeInput
              type="text"
              placeholder="연락처를 입력해주세요."
              value={props.phone}
              onChange={props.handlePhoneChange}
            />
          </S.InfoLargeBlock>
          <S.InfoLargeBlock>
            <S.InfoLabel>거주지</S.InfoLabel>
            <S.InfoAddressSearchBlock>
              <S.InfoPostalCodeInput
                type="text"
                placeholder="우편번호"
                value={props.postalCode}
                disabled
              />
              <S.InfoSearchButton onClick={props.openAddressModal}>
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
              placeholder="도로명, 건물명, 번지"
              value={props.selectedAddress}
              style={{ marginBottom: "10px" }}
              disabled
            />
            <S.InfoLargeInput
              type="text"
              placeholder="상세주소를 입력해주세요."
            />
          </S.InfoLargeBlock>
        </S.InfoContainer>
        <S.InquireButton>입양 문의하기</S.InquireButton>
      </S.WrapperInquire>

      {props.isAddressModalOpen && (
        <S.AddressModalOverlay onClick={props.closeAddressModal}>
          <S.AddressModalContent>
            <S.AddressTitle>주소 상세 검색</S.AddressTitle>
            <DaumPostcode onComplete={props.handleComplete}></DaumPostcode>
          </S.AddressModalContent>
        </S.AddressModalOverlay>
      )}
    </>
  );
}
