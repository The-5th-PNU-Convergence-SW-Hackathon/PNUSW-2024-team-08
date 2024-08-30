import * as S from "./AdoptShelters.styles";
import Image from "next/image";

export default function AdpotSheltersUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.AddressInput
          type="text"
          placeholder="보호소의 이름이나 주소를 입력하세요."
          value={props.query}
          onKeyDown={props.handleSearch}
          disabled={!props.isMapLoaded}
        />
        <S.MapDisplay ref={props.mapRef}>
          {/* <Image
            src="/images/shelter/loading.gif"
            alt="map_1"
            width={200}
            height={200}
            priority
          /> */}
          <S.LoadingImg></S.LoadingImg>
        </S.MapDisplay>
        <S.MapCurrentLocationIcon
          id="map-current-icon"
          onClick={() => props.setCurrentLocation(props.initialLocation)}
        >
          <Image
            src="/images/shelter/position_icon.svg"
            alt="position_icon"
            width={60}
            height={60}
          />
        </S.MapCurrentLocationIcon>
        <S.MapInfoContainer id="map-info-container">
          <S.MapInfoDragBlock id="map-info-drag-block">
            <S.MapInfoDragIcon id="map-info-drag-icon"></S.MapInfoDragIcon>
          </S.MapInfoDragBlock>
          <S.MapInfoBlock>
            {props.isMapLoaded &&
              props.sheltersToDisplay.map((shelter) => (
                <S.MapInfoItem
                  key={shelter.id}
                  data-id={shelter.id}
                  onClick={() => props.shelterLocationDetail(shelter)}
                  isSelected={shelter.id === props.selectedShelterId}
                >
                  <S.MapInfoImg>
                    <Image
                      src="/images/shelter/shelter_1.svg"
                      alt="shelter_1"
                      width={74}
                      height={74}
                    />
                  </S.MapInfoImg>
                  <S.MapInfoDetailBlock>
                    <S.ShelterName>
                      {props.truncateString(shelter.name, 13)}
                    </S.ShelterName>
                    <S.ShelterPlace>
                      {props.truncateString(shelter.careAddr, 48)}
                    </S.ShelterPlace>
                    <S.ShelterStatus>{shelter.careTel}</S.ShelterStatus>
                  </S.MapInfoDetailBlock>
                </S.MapInfoItem>
              ))}
          </S.MapInfoBlock>
        </S.MapInfoContainer>
      </S.WrapperContents>
    </>
  );
}
