import * as S from "./AdoptFavorites.styles";
import Image from "next/image";

export default function AdpotFavoritesUI(props) {
  console.log("isLastPage = ", props.isLastPage);
  return (
    <>
      <S.WrapperContents>
        {props.favPets.length === 0 && (
          <S.AddPetBox>
            <S.AddIcon onClick={props.navigateTo("/adopt/pets")}>
              <S.VerticaDottedlLine></S.VerticaDottedlLine>
              <S.HorizontalDottedLine></S.HorizontalDottedLine>
            </S.AddIcon>
            <S.AddPetText>
              좋아하는 동물을 <br />
              추가해보세요
            </S.AddPetText>
          </S.AddPetBox>
        )}
        {props.favPets?.map((pet, index) => (
          <S.AdoptPet key={pet.id}>
            {!props.loadedImages[index] && (
              <S.PetLoadingSkeleton></S.PetLoadingSkeleton>
            )}
            <S.PetImg
              src={pet.profileURL}
              alt={pet.name}
              width={344}
              height={344}
              priority
              onLoad={() => props.handleImageLoad(index)}
              onClick={props.navigateTo(`/adopt/${pet.id}`)} // 함수로 감싸기
              style={{ display: props.loadedImages[index] ? "block" : "none" }}
            />
            <S.AdoptLikeToggle onClick={() => props.handleToggleLike(pet)}>
              <Image
                src={
                  pet.isLike === true
                    ? "/images/pets/like_icon_big_active.svg"
                    : "/images/pets/like_icon_big.svg"
                }
                alt="like_icon_big"
                width={32}
                height={32}
              />
            </S.AdoptLikeToggle>
            <S.AdoptInfoBlock onClick={props.navigateTo(`/adopt/${pet.id}`)}>
              {" "}
              {/* 함수로 감싸기 */}
              <S.AdoptNameGender>
                {pet.name}
                <Image
                  src={
                    pet.gender === "M"
                      ? "/images/pets/male_icon.svg"
                      : "/images/pets/female_icon.svg"
                  }
                  alt="gender_icon"
                  width={24}
                  height={24}
                />
                <S.PetBreed>{pet.kind.trim()}</S.PetBreed>
              </S.AdoptNameGender>
              <S.PetInfoIconBlock>
                <S.PetWeightIcon>{pet?.weight.split("(")[0]}kg</S.PetWeightIcon>
                <S.PetProcessIcon processState={pet?.processState}>
                  {pet?.processState?.startsWith("종료")
                    ? "종료"
                    : pet?.processState}
                </S.PetProcessIcon>
                <S.PetNeuterIcon neuter={pet?.neuter}>중성화</S.PetNeuterIcon>
              </S.PetInfoIconBlock>
              <S.AdoptBirthAddress>
                {pet.age.slice(0, 4)}년생{" "}
                {props.findProvinceKo(pet.region.split(" ")[0])}{" "}
                {props.findDistrictKo(pet.region.split(" ")[1])}
              </S.AdoptBirthAddress>
              <S.AdoptLikeBlock>
                <S.AdoptLike>
                  <Image
                    src="/images/pets/like_icon.svg"
                    alt="like_icon"
                    width={20}
                    height={20}
                  />
                </S.AdoptLike>
                {pet.likeNum}
              </S.AdoptLikeBlock>
              <S.AdoptViewBlock>
                <S.AdoptView>
                  <Image
                    src="/images/pets/comment_icon.svg"
                    alt="comment_icon"
                    width={16}
                    height={16}
                  />
                </S.AdoptView>
                {pet.inquiryNum}
              </S.AdoptViewBlock>
            </S.AdoptInfoBlock>
          </S.AdoptPet>
        ))}
        {props.favPets?.length > 0 && !props.isLastPage && (
          <S.MoreButton onClick={props.handleLoadPetsData}>
            더 보기
          </S.MoreButton>
        )}
      </S.WrapperContents>
    </>
  );
}
