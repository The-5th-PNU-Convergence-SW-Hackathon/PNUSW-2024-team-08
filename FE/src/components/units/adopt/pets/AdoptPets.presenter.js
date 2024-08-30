import * as S from "./AdoptPets.styles";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic import for FontAwesomeIcon
const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function AdpotPetsUI(props) {
  return (
    <>
      <S.WrapperContents ref={props.scrollRef}>
        <S.AdoptPetMenuBlock>
          <S.AdoptPetMenuDate sort={props.sort} onClick={props.handleDateClick}>
            최근 날짜
          </S.AdoptPetMenuDate>
          <S.AdoptPetMenuDogs sort={props.sort} onClick={props.handleDogClick}>
            개
          </S.AdoptPetMenuDogs>
          <S.AdoptPetMenuCats sort={props.sort} onClick={props.handleCatClick}>
            고양이
          </S.AdoptPetMenuCats>
          <S.AdoptPetMenuOthers
            sort={props.sort}
            onClick={props.handleOtherClick}
          >
            기타
          </S.AdoptPetMenuOthers>
        </S.AdoptPetMenuBlock>
        {props.loadingSkeleton ? (
          <>
            {[...Array(5)].map((_, index) => (
              <S.PetLoadingSkeleton key={index}></S.PetLoadingSkeleton>
            ))}
          </>
        ) : (
          <>
            {props.pets?.map((pet, index) => (
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
                  onClick={props.navigateTo(`/adopt/${pet.id}`)}
                  style={{
                    display: props.loadedImages[index] ? "block" : "none",
                  }}
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
                <S.AdoptInfoBlock
                  onClick={props.navigateTo(`/adopt/${pet.id}`)}
                >
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
                    <S.PetWeightIcon>
                      {pet?.weight.split("(")[0]}kg
                    </S.PetWeightIcon>
                    <S.PetProcessIcon processState={pet?.processState}>
                      {pet?.processState?.startsWith("종료")
                        ? "종료"
                        : pet?.processState}
                    </S.PetProcessIcon>
                    <S.PetNeuterIcon neuter={pet?.neuter}>
                      중성화
                    </S.PetNeuterIcon>
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
            {props.scrollLoading && ( // 스크롤 로딩 중일 때 로딩 아이콘 표시
              <S.LoadingImgBox isLoading={props.scrollLoading}>
                <S.LoadingImg />
              </S.LoadingImgBox>
            )}
          </>
        )}
        <S.ToTopIcon
          isVisible={props.showScrollTop}
          onClick={props.scrollToTop}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-angles-up" /> */}
          <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        </S.ToTopIcon>
      </S.WrapperContents>
    </>
  );
}
