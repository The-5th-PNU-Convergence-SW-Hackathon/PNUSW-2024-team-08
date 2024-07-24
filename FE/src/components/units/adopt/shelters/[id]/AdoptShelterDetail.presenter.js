import * as S from "./AdoptShelterDetail.styles";
import Image from "next/image";

export default function AdpotShelterDetailUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.MapDisplay ref={props.mapRef}>
          {/* <Image
            src="/images/shelter/map_detail_1.svg"
            alt="map_detail_1"
            width={390}
            height={337}
          /> */}
        </S.MapDisplay>
        <S.ShelterInfoContainer>
          <S.ShelterInfoBlock>
            <S.ShelterInfoTitle>주소</S.ShelterInfoTitle>
            <S.ShelterInfoText>{props.shelter?.careAddr}</S.ShelterInfoText>
          </S.ShelterInfoBlock>
          <S.ShelterInfoBlock>
            <S.ShelterInfoTitle>전화번호</S.ShelterInfoTitle>
            <S.ShelterInfoText>{props.shelter?.careTel}</S.ShelterInfoText>
          </S.ShelterInfoBlock>
          <S.ShelterInfoBlock>
            <S.ShelterInfoTitle>보호동물 수</S.ShelterInfoTitle>
            <S.ShelterInfoText>
              {props.shelter?.animalCnt + " 마리"}
            </S.ShelterInfoText>
          </S.ShelterInfoBlock>
        </S.ShelterInfoContainer>
      </S.WrapperContents>
    </>
  );
}
