import styled from "@emotion/styled";
import Image from "next/image";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 23px;
  padding-bottom: 1px;
`;

export const LeftArrowTitleContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

export const HeaderMenuContainer = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  position: relative;
  cursor: pointer;
`;

export const HeaderMenuBlock = styled.ul`
  width: 127px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 42px;
  right: 0;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 101;
`;

export const EditSubMenu = styled.li`
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  color: #000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DeleteSubMenu = styled.li`
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  color: #ff6636;
  border-top: 1px solid #dbdbdb;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReportSubMenu = styled.li`
  width: 100%;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  color: #ff6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperContents = styled.div`
  width: 390px;
  height: ${(props) =>
    props.active ? "calc(100vh - 219px)" : "calc(100vh - 179px)"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: ${(props) =>
      props.active
        ? "calc(100vh - 219px - 60px)"
        : "calc(100vh - 179px - 60px)"};
  }
`;

export const UserContainer = styled.div`
  width: 87%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
`;

export const CircularImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 7px;
`;

export const UserNickname = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

export const UpdatedTime = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #808080;
  margin-top: 3px;
`;

export const CommunityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CommunityTitle = styled.div`
  width: 340px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 22px;
  margin-left: 25px;
`;

export const CommunityText = styled.div`
  width: 340px;
  margin-top: 12px;
  margin-left: 25px;
  font-size: 16px;
  font-weight: 400;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const CommunityImgBlock = styled.div`
  width: 390px;
  margin-top: 20px;
  margin-bottom: 35px;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-center {
    opacity: 1;
  }

  .slick-prev,
  .slick-next {
    display: none !important; // 화살표 버튼을 숨깁니다.
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: #aaa; /* 기본 점 색상 */
    border-radius: 50%;
    transition: color 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .slick-dots li.slick-active button:before {
    color: #555; /* 활성 점 색상 */
  }

  .slick-track {
    margin-left: ${(props) => (props.imageCount > 1 ? "-67px" : "0px")};
  }
`;

export const CommunityImgItem = styled.div`
  width: 224px;
  height: 197px;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;

  &:hover {
    div {
      visibility: visible;
    }
  }
`;

export const CommunityImg = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const ZoomIconBlock = styled.div`
  width: 35px;
  height: 35px;
  font-size: 17px;
  color: #eee;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  visibility: hidden;
  position: absolute;
  top: 147px;
  left: 177px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CommunityInfoBlock = styled.div`
  width: 200px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  margin-left: 25px;
  gap: 12px;
`;

export const CommunityLikes = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "Roboto", sans-serif;

  .fa-heart {
    font-size: 23px;
    color: ${(props) => (props.isLiked ? "#FF5353" : "#9C9C9C")};
    cursor: ${(props) => (props.isMine ? "not-allowed" : "pointer")};
  }
`;

export const CommunityComments = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "Roboto", sans-serif;
`;

export const CommunityShare = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "Roboto", sans-serif;
`;

export const CommunityAdBanner = styled.div`
  width: 390px;
  height: 73px;
  margin-top: 20px;

  .slick-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-center {
    opacity: 1;
  }

  .slick-prev,
  .slick-next {
    display: none !important; // 화살표 버튼을 숨깁니다.
  }

  .slick-track {
    margin-left: 0;
  }
`;

export const StyledAdBannerImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 360px;
    max-height: 80%;
    border-radius: 10px;
    object-fit: contain;
  }
`;

export const PrevBtn = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: calc(50% - 30px);
  left: 25px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const NextBtn = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: calc(50% - 30px);
  right: 25px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const PhotoIndexBlock = styled.div`
  width: 60px;
  padding: 5px 12px;
  background-color: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  text-align: center;
  position: absolute;
  bottom: 25px;
  left: calc(50% - 30px);
`;
