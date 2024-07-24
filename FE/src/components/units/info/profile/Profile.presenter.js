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
              onClick={props.navigateBack}
            />
            <S.Title>내 프로필</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperProfile>
        <S.ProfileCard>
          <S.ProfilePhoto>
            <Image
              src="/images/info/profile_photo_icon.svg"
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
            <S.InfoTitle>계정 정보</S.InfoTitle>
            <S.InfoItemList>
              <S.InfoItemBlock>
                <S.InfoItem>아이디</S.InfoItem>
                <S.InfoItemAdded>dudqls256</S.InfoItemAdded>
              </S.InfoItemBlock>
              <S.InfoItem onClick={props.navigateTo(props.paths.pw)}>
                비밀번호 변경
              </S.InfoItem>
              <S.InfoItem>입양 문의 내역</S.InfoItem>
            </S.InfoItemList>
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoTitle>이용안내</S.InfoTitle>
            <S.InfoItemList>
              <S.InfoItemBlock>
                <S.InfoItem>앱버전</S.InfoItem>
                <S.InfoItemAdded>2.0.9(2024021977)</S.InfoItemAdded>
              </S.InfoItemBlock>
              <S.InfoItem>문의하기</S.InfoItem>
              <S.InfoItem>이용약관</S.InfoItem>
              <S.InfoItem>개인정보 처리방침</S.InfoItem>
              <S.InfoItem>오픈소스 라이선스</S.InfoItem>
            </S.InfoItemList>
          </S.InfoContainer>
          <S.InfoContainer>
            <S.InfoTitle>이용안내</S.InfoTitle>
            <S.InfoItemList>
              <S.InfoItem>정보 동의 설정</S.InfoItem>
              <S.InfoItem onClick={props.logout}>로그아웃</S.InfoItem>
              <S.InfoItem>회원탈퇴</S.InfoItem>
            </S.InfoItemList>
          </S.InfoContainer>
        </S.WrapperInfo>
      </S.WrapperProfile>
    </>
  );
}
