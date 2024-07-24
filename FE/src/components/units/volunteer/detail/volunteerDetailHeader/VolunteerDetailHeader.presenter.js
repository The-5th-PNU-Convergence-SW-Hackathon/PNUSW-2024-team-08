import * as S from "./VolunteerDetailHeader.styles";
import Image from "next/image";

export default function VolunteerDetailHeaderUI(props) {
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
              onClick={props.PrevPage}
            />
            <S.Title>{props.title}</S.Title>
          </S.LeftArrowTitleContainer>
          <S.MenuContainer
            ref={props.wrapperRef}
            onClick={props.handleMenuClick}
          >
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={44}
              height={44}
            />
            <S.MenuBlock active={props.isMenuClicked}>
              <S.Menu>수정하기</S.Menu>
              <S.Report>삭제하기</S.Report>
            </S.MenuBlock>
          </S.MenuContainer>
        </S.Header>
      </S.WrapperHeader>
    </>
  );
}
