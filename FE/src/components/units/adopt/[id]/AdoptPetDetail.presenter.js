import * as S from "./AdoptPetDetail.styles";
import Image from "next/image";

export default function AdoptPetDetailUI(props) {
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
            <S.Title>보호동물</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperPetDetail>
        <S.PetImgBlock>
          <S.PetImg
            src={props.petDetail?.profileURL}
            alt="dog_1_detail"
            width={390}
            height={381}
          />
          <S.AdoptLikeToggle
            onClick={() => props.handleToggleLikeWrapper(props.petDetail?.id)}
          >
            <Image
              src={
                props.petDetail?.isLike
                  ? "/images/pets/like_icon_big_active.svg"
                  : "/images/pets/like_icon_big.svg"
              }
              alt="like_icon_big"
              width={32}
              height={32}
            />
          </S.AdoptLikeToggle>
        </S.PetImgBlock>
        <S.PetInfoBlock>
          <S.PetNameGender>
            {props.petDetail?.name}
            <S.PetGenderIcon>
              <Image
                src={
                  props.petDetail?.gender === "M"
                    ? "/images/pets/male_icon.svg"
                    : "/images/pets/female_icon.svg"
                }
                alt={
                  props.petDetail?.gender === "M" ? "male_icon" : "female_icon"
                }
                width={30}
                height={30}
              />
            </S.PetGenderIcon>
          </S.PetNameGender>
          <S.PetRegionAge>
            {props.findProvinceKo(props.petDetail?.region.split(" ")[0])}
            {", "}
            {props.findDistrictKo(props.petDetail?.region.split(" ")[1])}
            {" • "}
            {props.petDetail?.age.slice(0, 4)}년생
          </S.PetRegionAge>
        </S.PetInfoBlock>
        <S.PetInfoIconBlock>
          <S.PetBreedIcon>{props.petDetail?.kind.trim()}</S.PetBreedIcon>
          <S.PetWeightIcon>
            {props.petDetail?.weight.split("(")[0]}kg
          </S.PetWeightIcon>
          <S.PetProcessIcon processState={props.petDetail?.processState}>
            {props.petDetail?.processState?.startsWith("종료")
              ? "종료"
              : props.petDetail?.processState}
          </S.PetProcessIcon>
          <S.PetNeuterIcon neuter={props.petDetail?.neuter}>
            중성화
          </S.PetNeuterIcon>
        </S.PetInfoIconBlock>
        <S.PetContentTitle>
          {props.petDetail?.introductionTitle}
        </S.PetContentTitle>
        <S.PetContentText>
          {props.petDetail?.introductionContent}
        </S.PetContentText>
        <S.PetAdoptionPeriod>
          {props.petDetail?.noticeSdt.replace(/-/g, ".")}-
          {props.petDetail?.noticeEdt.replace(/-/g, ".")}
        </S.PetAdoptionPeriod>
        <S.PetAdoptionButton
          onClick={() =>
            props.handleRequireModal(`/adopt/${props.petDetail?.id}/inquire`)
          }
        >
          입양 문의하기
        </S.PetAdoptionButton>
      </S.WrapperPetDetail>
    </>
  );
}
