import * as S from "./MyCommunityHandler.styles";
import Image from "next/image";

export default function MyCommunityHandlerUI(props) {
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
              onClick={props.navigateTo(`/community/adoption`)}
            />
            <S.Title>내가 쓴 글</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperProfile>
        <S.ProfileImage>
          <Image
            src={props.profileURL}
            alt="profile_image"
            width={90}
            height={90}
          />
        </S.ProfileImage>
        <S.InfoContainer>
          <S.UserNickName>{props.myCommunityData?.nickName}</S.UserNickName>
          <S.UserEmail>{props.myCommunityData?.email}</S.UserEmail>
          <S.PostInfoBlock>
            <S.SortOfPost>작성글</S.SortOfPost>
            <S.NumOfPost>{props.myCommunityData?.postNum}</S.NumOfPost>
            <S.SortOfPost>작성댓글</S.SortOfPost>
            <S.NumOfPost>{props.myCommunityData?.commentNum}</S.NumOfPost>
            <S.SortOfPost>질문글</S.SortOfPost>
            <S.NumOfPost>{props.myCommunityData?.questionNum}</S.NumOfPost>
            <S.SortOfPost>답변글</S.SortOfPost>
            <S.NumOfPost>{props.myCommunityData?.answerNum}</S.NumOfPost>
          </S.PostInfoBlock>
        </S.InfoContainer>
      </S.WrapperProfile>
      <S.WrapperCommunityHandler>
        <S.CommunityMenuContainer>
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.mypost)
                ? props.navigateTo(props.paths.mypost)
                : undefined
            }
            active={props.isActive(props.paths.mypost)}
          >
            작성글
          </S.CommunityMenu>
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.mycomment)
                ? props.navigateTo(props.paths.mycomment)
                : undefined
            }
            active={props.isActive(props.paths.mycomment)}
          >
            작성댓글
          </S.CommunityMenu>
          <S.CommunityCenterLine></S.CommunityCenterLine>
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.myquestion)
                ? props.navigateTo(props.paths.myquestion)
                : undefined
            }
            active={props.isActive(props.paths.myquestion)}
          >
            질문글
          </S.CommunityMenu>
          <S.CommunityMenu
            onClick={
              !props.isActive(props.paths.myanswer)
                ? props.navigateTo(props.paths.myanswer)
                : undefined
            }
            active={props.isActive(props.paths.myanswer)}
          >
            답변글
          </S.CommunityMenu>
        </S.CommunityMenuContainer>
      </S.WrapperCommunityHandler>
    </>
  );
}
