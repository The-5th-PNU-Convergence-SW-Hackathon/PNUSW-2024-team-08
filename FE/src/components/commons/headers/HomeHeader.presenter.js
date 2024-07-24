import * as S from "./HomeHeader.styles";
import Image from "next/image";

export default function HomeHeaderUI(props) {
  return (
    <S.WrapperHeader>
      <S.Header>
        <S.ForPawImageContainer>
          <Image
            src="/images/header/forpaw_icon.svg"
            alt="forpaw_icon"
            width={52}
            height={42}
          />
        </S.ForPawImageContainer>
        <S.InfoContainer>
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
      <S.HeaderLogo>
        <Image
          src="/images/header/forpaw_logo.svg"
          alt="forpaw_logo"
          width={77}
          height={20}
        />
      </S.HeaderLogo>
    </S.WrapperHeader>
  );
}
