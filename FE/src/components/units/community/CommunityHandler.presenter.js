import * as S from "./CommunityHandler.styles";

export default function CommunityHandlerUI(props) {
  return (
    <>
      <S.WrapperCommunityHandler>
        <S.CommunityMenuContainer>
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.adoption)
                ? props.navigateTo(props.paths.adoption)
                : undefined
            }
            active={props.isActive(props.paths.adoption)}
          >
            입양 스토리
          </S.CommunityMenu>
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.fostering)
                ? props.navigateTo(props.paths.fostering)
                : undefined
            }
            active={props.isActive(props.paths.fostering)}
            style={{ width: "136px" }}
          >
            임시보호 스토리
          </S.CommunityMenu>
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.question)
                ? props.navigateTo(props.paths.question)
                : undefined
            }
            active={props.isActive(props.paths.question)}
          >
            궁금해요
          </S.CommunityMenu>
        </S.CommunityMenuContainer>
      </S.WrapperCommunityHandler>
    </>
  );
}
