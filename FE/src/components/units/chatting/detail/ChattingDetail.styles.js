import styled from "@emotion/styled";

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

export const MenuContainer = styled.div`
  width: 93px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 3px;
`;

export const MenuIcon = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  height: 50px;
  background-color: #fff;
  border: 2px solid transparent;
  outline: none;
  font-size: 20px;
  font-weight: 300;
  position: absolute;
  top: -5px;
  right: 50px;

  ::placeholder {
    color: #888;
  }

  :focus {
    color: #888;
  }

  width: ${({ isSearchOpen }) => (isSearchOpen ? "270px" : "0px")};
  transition: width 0.4s ease;
`;

export const NoticeTextBlock = styled.div`
  width: 390px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  background-color: #f3f3f3;
  font-size: 20px;
  font-weight: 400;
  padding-left: 20px;
`;

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 229px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  padding-bottom: 20px;
  padding-left: 10px;

  /* Chrome, Safari 등 */
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0); /* 스크롤바 뒷 배경을 투명 처리한다 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f6f6f6; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 처리 */
    border: 3px solid #f6f6f6; /* 스크롤바 외곽선(선택사항) */
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* Firefox */
  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: #f6f6f6 rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const ChattingOverlay = styled.div`
  width: 390px;
  height: calc(100vh - 229px);
  background-color: white;
  margin: 0 auto;
`;

export const DateTextBlock = styled.div`
  font-size: 12px;
  font-weight: 400;
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  padding: 10px 15px;
  border-radius: 20px;
  margin-top: 25px;
`;

export const MsgBlock = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isMyMsg ? "flex-end" : "flex-start")};
  align-items: flex-start;
  margin-top: 15px;
  margin-left: ${(props) => (props.isMyMsg ? "0" : "3px")};
  gap: 10px;
`;

export const UserImgBlock = styled.div`
  width: 40px;
  height: 40px;
  order: ${(props) => (props.isMyMsg ? 3 : 1)};
`;

export const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${(props) => (props.isMyMsg ? "flex-end" : "flex-start")};
  gap: 5px;
  order: 2;
`;

export const UserNameText = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

export const MsgText = styled.div`
  max-width: 250px;
  border-radius: ${(props) =>
    props.isMyMsg ? "20px 0 20px 20px" : "0 20px 20px 20px"};
  background-color: ${(props) => (props.isMyMsg ? "#ffdfd5" : "#f6f6f6")};
  font-size: 14px;
  font-weight: 500;
  padding: 10px 15px;
`;

export const MsgPhotoBlock = styled.div`
  max-width: 250px;
  display: grid;
  gap: 1px;
  grid-template-columns: ${({ imageCount }) => {
    if (imageCount === 1) return "repeat(1, 1fr)";
    if (imageCount === 2 || imageCount === 4) return "repeat(4, 45px)";
    return "repeat(6, 35px)";
  }};
  grid-template-areas: ${({ imageCount }) => {
    if (imageCount === 2) return "'img1 img1 img2 img2'";
    if (imageCount === 3) return "'img1 img1 img2 img2 img3 img3'";
    if (imageCount === 4) return "'img1 img1 img2 img2' 'img3 img3 img4 img4'";
    if (imageCount === 5)
      return "'img1 img1 img2 img2 img3 img3' 'img4 img4 img4 img5 img5 img5'";
    if (imageCount === 6)
      return "'img1 img1 img2 img2 img3 img3' 'img4 img4 img5 img5 img6 img6'";
    if (imageCount === 7)
      return "'img1 img1 img2 img2 img3 img3' 'img4 img4 img4 img5 img5 img5' 'img6 img6 img6 img7 img7 img7'";
    if (imageCount === 8)
      return "'img1 img1 img2 img2 img3 img3' 'img4 img4 img5 img5 img6 img6' 'img7 img7 img7 img8 img8 img8'";
    if (imageCount === 9)
      return "'img1 img1 img2 img2 img3 img3' 'img4 img4 img5 img5 img6 img6' 'img7 img7 img8 img8 img9 img9'";
    return "auto";
  }};
`;

export const MsgPhoto = styled.img`
  width: ${({ imageCount }) => {
    if (imageCount === 1) return "150px";
    return "100%";
  }};
  height: ${({ imageCount }) => {
    if (imageCount === 1) return "auto";
    if (imageCount === 2 || imageCount === 4) return "90px";
    return "70px";
  }};
  border-radius: 3px;
  object-fit: ${({ imageCount }) => {
    if (imageCount === 1) return "contain";
    return "cover";
  }};
  display: block;
  grid-area: ${({ area }) => area};
`;

export const TimeTextBlock = styled.div`
  font-size: 10px;
  font-weight: 400;
  order: ${(props) => (props.isMyMsg ? 1 : 3)};
  align-self: flex-end;
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
  z-index: 1000;
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
