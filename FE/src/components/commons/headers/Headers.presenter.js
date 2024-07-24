import * as S from "./Headers.styles";
import Image from "next/image";

export default function HeadersUI(props) {
  return (
    <S.WrapperHeader>
      <S.Header>
        <S.LeftArrowTitleContainer>
          <Image
            src="/images/header/arrow_left_icon.svg"
            alt="left_arrow_icon"
            width={15}
            height={25}
            onClick={props.handleArrowClick}
          />
          <S.Title>{props.title}</S.Title>
        </S.LeftArrowTitleContainer>
        <S.InfoContainer>
          {props.currentPath !== "/chatting" && (
            <S.InfoIconContainer
              onClick={() => props.handleIconClick(props.paths.search)}
            >
              <Image
                src="/images/header/search_icon.svg"
                alt="search_icon"
                width={44}
                height={44}
              />
            </S.InfoIconContainer>
          )}
          <S.InfoIconContainer
            onClick={() => props.handleIconClick(props.paths.alarm)}
          >
            <Image
              src="/images/header/alarm_icon.svg"
              alt="alarm_icon"
              width={44}
              height={44}
            />
          </S.InfoIconContainer>
          <S.ProfileIconContainer
            onClick={() => props.handleIconClick(props.paths.profile)}
          >
            <Image
              src="/images/header/profile_icon.svg"
              alt="profile_icon"
              width={44}
              height={44}
            />
          </S.ProfileIconContainer>
        </S.InfoContainer>
      </S.Header>
    </S.WrapperHeader>
  );
}
