import * as S from "./AdoptHandler.styles";

export default function AdoptHandlerUI(props) {
  return (
    <S.WrapperAdoptHandler>
      <S.AdoptTextContainer>
        <S.AdoptText>당신의 따뜻한 관심을 기다리고 있어요-</S.AdoptText>
      </S.AdoptTextContainer>
      <S.AdoptMenuContainer>
        <S.AdoptMenu
          onClick={
            !props.isActive(props.paths.pets)
              ? props.navigateTo(props.paths.pets)
              : undefined
          }
          active={props.isActive(props.paths.pets)}
        >
          보호동물
        </S.AdoptMenu>
        <S.AdoptMenu
          onClick={
            !props.isActive(props.paths.shelters)
              ? props.navigateTo(props.paths.shelters)
              : undefined
          }
          active={props.isActive(props.paths.shelters)}
        >
          보호소
        </S.AdoptMenu>
        <S.AdoptMenu
          onClick={
            !props.isActive(props.paths.favorites)
              ? () => props.handleRequireModal(props.paths.favorites)
              : undefined
          }
          active={props.isActive(props.paths.favorites)}
        >
          관심동물
        </S.AdoptMenu>
      </S.AdoptMenuContainer>
    </S.WrapperAdoptHandler>
  );
}
