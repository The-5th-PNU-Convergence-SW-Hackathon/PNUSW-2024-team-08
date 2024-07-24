import * as S from "./VolunteerHandler.styles";

export default function VolunteerHandlerUI(props) {
  return (
    <>
      <S.WrapperVolunteerHandler>
        <S.VolunteerMenuContainer>
          <S.VolunteerMenu
            onClick={
              !props.isActive(props.paths.recommend)
                ? props.navigateTo(props.paths.recommend)
                : undefined
            }
            active={props.isActive(props.paths.recommend)}
          >
            추천모임
          </S.VolunteerMenu>
          <S.VolunteerMenu
            onClick={props.navigateTo(props.paths.region)}
            active={props.isActive(props.paths.region)}
          >
            지역별 모임
          </S.VolunteerMenu>
          <S.VolunteerMenu
            onClick={
              !props.isActive(props.paths.joined)
              ? () => props.handleRequireModal(props.paths.joined)
              :undefined
            }
            active={props.isActive(props.paths.joined)}
          >
            내 모임
          </S.VolunteerMenu>
        </S.VolunteerMenuContainer>
      </S.WrapperVolunteerHandler>
    </>
  );
}
