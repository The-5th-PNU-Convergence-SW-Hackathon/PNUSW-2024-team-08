import * as S from "./Notice.styles";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import Comment from "../../../../commons/comment/Comment.container";
import Input from "../../../../../../src/components/commons/comment/input/Input.container";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function NoticeUI(props) {
  return (
    <>
      <S.WrapperContents active={!!props.replyingToId}>
        <S.AnnouncementContainer>
          <S.AnnouncementTitle>{props.noticeData.title}</S.AnnouncementTitle>
          {props.noticeData?.images && props.noticeData.images.length > 0 && (
            <S.AnnouncementImg imageCount={props.noticeData?.images.length}>
              <Slider {...props.getSliderSettings(props.noticeData?.images.length)}>
                {props.noticeData?.images.map((image, index) => (
                  <S.CommunityImgItem key={image.id}>
                    <S.CommunityImg
                      src={image.imageURL}
                      alt={`community_detail_${index + 1}`}
                      width={224}
                      height={197}
                      objectFit="cover"
                    />
                    <S.ZoomIconBlock
                      onClick={() =>
                        props.openPhotoModal(
                          props.noticeData.images.map((img) => img.imageURL),
                          index
                        )
                      }
                    >
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </S.ZoomIconBlock>
                  </S.CommunityImgItem>
                ))}
              </Slider>
            </S.AnnouncementImg>
          )}
          <S.AnnouncementText dangerouslySetInnerHTML={{ __html: props.noticeData.content }} />
        </S.AnnouncementContainer>
        <S.Boundary />
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
        id={props.noticeID}
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
