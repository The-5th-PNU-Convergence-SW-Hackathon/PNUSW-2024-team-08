import * as S from "./Profile.styles";
import Image from "next/image";

export default function ProfileUI(props) {
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
              onClick={props.navigateTo("/home")}
            />
            <S.Title>내 프로필</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperProfile>
        <S.ProfileCard>
          <S.ProfilePhoto>
            <Image
              src={props.profile?.profileURL}
              alt="profile_photo_icon"
              width={103}
              height={103}
            />
          </S.ProfilePhoto>
          <S.ProfileInfoContainer>
            <S.ProfileNickname>{props.profile?.nickName}</S.ProfileNickname>
            <S.ProfileInfo>{props.profile?.email}</S.ProfileInfo>
            <S.ProfileInfo>{props.profile?.name}</S.ProfileInfo>
          </S.ProfileInfoContainer>
        </S.ProfileCard>
        <S.ProfileEditButton onClick={props.navigateTo(props.paths.edit)}>
          프로필 수정
        </S.ProfileEditButton>
        <S.WrapperInfo>
          <S.InfoContainer>
            <S.InfoTitle>고객 지원</S.InfoTitle>
            <S.InfoItemList>
              <S.InfoItem isSocialJoined={props.profile?.isSocialJoined}>
                <S.InfoText
                  isSocialJoined={props.profile?.isSocialJoined}
                  onClick={
                    props.profile?.isSocialJoined
                      ? undefined
                      : props.navigateTo(props.paths.pw)
                  }
                >
                  비밀번호 변경
                </S.InfoText>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoText onClick={props.navigateTo("/info/profile/support")}>
                  문의하기
                </S.InfoText>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoText>입양 문의 내역</S.InfoText>
              </S.InfoItem>
            </S.InfoItemList>
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoTitle>서비스 안내</S.InfoTitle>
            <S.InfoItemList>
              <S.InfoItemBlock>
                <S.InfoItem>
                  <S.InfoText>앱버전</S.InfoText>
                </S.InfoItem>
                <S.InfoItemAdded>2.0.9(2024021977)</S.InfoItemAdded>
              </S.InfoItemBlock>
              <S.InfoItem>
                <S.InfoText onClick={props.navigateTo("/info/profile/policy")}>
                  약관 및 정책
                </S.InfoText>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoText onClick={props.navigateTo("/info/profile/license")}>
                  오픈소스 라이선스
                </S.InfoText>
              </S.InfoItem>
            </S.InfoItemList>
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoTitle>계정 관리</S.InfoTitle>
            <S.InfoItemList>
              <S.InfoItem>
                <S.InfoText onClick={props.toggleLogoutState}>
                  로그아웃
                </S.InfoText>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoText onClick={props.navigateTo(props.paths.delete)}>
                  회원탈퇴
                </S.InfoText>
              </S.InfoItem>
            </S.InfoItemList>
          </S.InfoContainer>
        </S.WrapperInfo>
      </S.WrapperProfile>
    </>
  );
}
