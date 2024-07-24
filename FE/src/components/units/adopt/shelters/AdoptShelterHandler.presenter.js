import * as S from "./AdoptShelterHandler.styles";
import Image from "next/image";

export default function AdoptShelterHandlerUI(props) {
  return (
    <>
      <S.WrapperAdoptHandler>
        <S.AdoptMenuContainer>
          <S.LeftArrowBlock>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="left_arrow_icon"
              width={15}
              height={25}
              onClick={props.navigateTo("/adopt/shelters")}
            />
          </S.LeftArrowBlock>
          <S.AdoptMenu
            onClick={
              !props.isActive(props.paths.detail)
                ? props.navigateTo(props.paths.detail)
                : undefined
            }
            active={props.isActive(props.paths.detail)}
          >
            보호소 정보
          </S.AdoptMenu>
          <S.AdoptMenu
            onClick={
              !props.isActive(props.paths.rescues)
                ? props.navigateTo(props.paths.rescues)
                : undefined
            }
            active={props.isActive(props.paths.rescues)}
          >
            보호동물
          </S.AdoptMenu>
        </S.AdoptMenuContainer>
      </S.WrapperAdoptHandler>
    </>
  );
}
