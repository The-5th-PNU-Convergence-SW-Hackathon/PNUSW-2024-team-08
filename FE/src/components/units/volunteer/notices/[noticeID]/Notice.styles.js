import styled from "@emotion/styled";
import Image from "next/image";

export const WrapperContents = styled.div`
  width: 390px;
  height: ${(props) =>
    props.active ? "calc(100vh - 219px)" : "calc(100vh - 179px)"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  flex-shrink: 0;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const AnnouncementContainer = styled.div`
  width: 390px;
  height: auto;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

export const AnnouncementTitle = styled.div`
  width: 340px;
  height: auto;
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.8px;

  margin-bottom: 5px;
`;

export const AnnouncementImg = styled.div`
  width: 390px;
  height: 201px;

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


export const AnnouncementText = styled.div`
  width: 343px;
  height: auto;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  white-space: pre-wrap;

  margin-top: 25px;
  padding-bottom: 12px;
`;

export const Boundary = styled.div`
  width: 390px;
  height: 20px;
  background-color: #fdfaf7;
  flex-shrink: 0;
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