import Image from "next/image";
import * as S from "./CommunityDetail.styles";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import Input from "../../../../../src/components/commons/comment/input/Input.container";
import Comment from "../../../../../src/components/commons/comment/Comment.container";

// Dynamic import for FontAwesomeIcon
const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function CommunityDetailUI(props) {
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
              onClick={
                props.type === "adoption"
                  ? props.navigateTo("/community/adoption")
                  : props.navigateTo("/community/fostering")
              }
              priority
            />
            <S.Title>커뮤니티</S.Title>
          </S.LeftArrowTitleContainer>
          <S.HeaderMenuContainer
            ref={(el) => (props.menuRefs.current[0] = el)}
            onClick={() => props.handleMenuClick(0)}
          >
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={44}
              height={44}
              priority
            />
            {props.communityDetailData?.isMine ? (
              <S.HeaderMenuBlock active={props.isMenuClicked[0]}>
                <S.EditSubMenu
                  onClick={props.navigateTo(
                    `/community/${props.communityId}/edit?type=${props.type}`
                  )}
                >
                  수정하기
                </S.EditSubMenu>
                <S.DeleteSubMenu
                  onClick={() => props.handleCommunityDelete(props.communityId)}
                >
                  삭제하기
                </S.DeleteSubMenu>
              </S.HeaderMenuBlock>
            ) : (
              <S.HeaderMenuBlock active={props.isMenuClicked[0]}>
                <S.ReportSubMenu
                  onClick={() => {
                    props.handleOpen(props.communityId, "POST");
                  }}
                >
                  신고하기
                </S.ReportSubMenu>
              </S.HeaderMenuBlock>
            )}
          </S.HeaderMenuContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperContents active={!!props.replyingToId}>
        <S.UserContainer>
          <S.UserPhoto>
            <S.CircularImage>
              <Image
                src={
                  props.communityDetailData?.profileURL
                    ? props.communityDetailData?.profileURL
                    : "/images/header/profile_icon.svg"
                }
                alt="profile_icon"
                width={44}
                height={44}
              />
            </S.CircularImage>
          </S.UserPhoto>
          <S.UserInfoBlock>
            <S.UserNickname>
              {props.communityDetailData.nickName}
            </S.UserNickname>
            <S.UpdatedTime>
              {props.useFormatDateTime(props.communityDetailData.date)}
            </S.UpdatedTime>
          </S.UserInfoBlock>
        </S.UserContainer>
        <S.CommunityContainer>
          <S.CommunityTitle>{props.communityDetailData.title}</S.CommunityTitle>
          <S.CommunityText>{props.communityDetailData.content}</S.CommunityText>
          {props.communityDetailData?.images?.length > 0 && (
            <S.CommunityImgBlock
              imageCount={props.communityDetailData?.images.length}
            >
              <Slider
                {...props.getSliderSettings(
                  props.communityDetailData?.images.length
                )}
              >
                {props.communityDetailData?.images.map((image, index) => (
                  <S.CommunityImgItem key={image.id}>
                    <S.CommunityImg
                      src={image.imageURL}
                      alt="community_detail_1"
                      width={224}
                      height={197}
                      objectFit="cover"
                      priority
                    />
                    <S.ZoomIconBlock
                      onClick={() =>
                        props.openPhotoModal(
                          props.communityDetailData.images.map(
                            (img) => img.imageURL
                          ),
                          index
                        )
                      }
                    >
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </S.ZoomIconBlock>
                  </S.CommunityImgItem>
                ))}
              </Slider>
            </S.CommunityImgBlock>
          )}
          <S.CommunityInfoBlock>
            <S.CommunityLikes
              isMine={props.communityDetailData.isMine}
              isLiked={props.isLiked}
              onClick={() => {
                if (!props.communityDetailData.isMine) {
                  props.toggleLikeButton();
                }
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-heart" />
              {props.likeNum}
            </S.CommunityLikes>
            <S.CommunityComments>
              <Image
                src="/images/community/comments.svg"
                alt="comments"
                width={20}
                height={20}
              />
              {props.communityDetailData.commentNum}
            </S.CommunityComments>
            <S.CommunityShare>
              <Image
                src="/images/community/share.svg"
                alt="share"
                width={20}
                height={20}
              />
              0
            </S.CommunityShare>
          </S.CommunityInfoBlock>
          <S.CommunityAdBanner>
            <Slider {...props.AdBannerSliderSettings}>
              <S.StyledAdBannerImage
                src="/images/community/ad_banner_1.svg"
                alt="ad_banner_1"
                width={390}
                height={73}
              />
              <S.StyledAdBannerImage
                src="/images/community/ad_banner_2.svg"
                alt="ad_banner_2"
                width={390}
                height={73}
              />
            </Slider>
          </S.CommunityAdBanner>
        </S.CommunityContainer>
        <Comment
          comments={props.comments}
          handleReplyClick={props.handleReplyClick}
          handleEditClick={props.handleEditClick}
          deleteComment={props.deleteComment}
          deleteReply={props.deleteReply}
          profileData={props.profileData}
          handleCommentToggleLike={props.handleCommentToggleLike}
          handleReplyToggleLike={props.handleReplyToggleLike}
        />
      </S.WrapperContents>
      <Input
        id={props.communityId}
        addComment={props.addComment}
        addReply={props.addReply}
        editComment={props.editComment}
        replyingToId={props.replyingToId}
        name={props.replyingToName}
        editingContent={props.editingContent}
        handleCancelReply={props.handleCancelReply}
        isEditing={props.isEditing}
        profileData={props.profileData}
      />
      {props.isPhotoModalOpen && props.photosModal.length > 0 && (
        <S.ModalOverlay onClick={props.closePhotoModal}>
          <S.ModalContent
            {...props.photoModalHandlers}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={props.photosModal[props.currentIndex]}
              alt={`current photo ${props.currentIndex}`}
            />
            <S.PrevBtn onClick={props.handlePrev}>〈</S.PrevBtn>
            <S.NextBtn onClick={props.handleNext}>〉</S.NextBtn>
            <S.PhotoIndexBlock>
              {props.currentIndex + 1 + " / " + props.photosModal.length}
            </S.PhotoIndexBlock>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
}
