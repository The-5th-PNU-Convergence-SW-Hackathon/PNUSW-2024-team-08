import styled from "@emotion/styled";
import Image from "next/image";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 10px;
  overflow-y: auto;
  background-color: white;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 179px - 60px);
  }
`;

export const UserContainer = styled.div`
  width: 87%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: -10px;
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
  width: 290px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 7px;
`;

export const UserNickname = styled.div`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  margin-top: 5px;
`;

export const UpdatedTime = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 11px;
  color: #808080;
  margin-top: 5px;
`;

export const MenuContainer = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  position: relative;
  cursor: pointer;

  img {
    transform: rotate(90deg);
  }
`;

export const MenuBlock = styled.ul`
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

export const QuestionDetailBlock = styled.div`
  width: 344px;
  background-color: #f6f6f6;
  border-radius: 20px;
  margin-top: 10px;
  flex-shrink: 0;
`;

export const QuestionTtile = styled.div`
  width: 295px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 22px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const QuestionText = styled.div`
  width: 295px;
  font-size: 16px;
  font-weight: 300;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 12px;
  margin-left: 22px;
  margin-bottom: 23px;
`;

export const QuestionImgBlock = styled.div`
  width: 344px;
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
    margin-left: ${(props) => (props.imageCount > 1 ? "-45px" : "0px")};
  }
`;

export const QuestionImgItem = styled.div`
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

export const QuestionImg = styled(Image)`
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

export const AnswerBtn = styled.button`
  color: #ff6636;
  border: 1px solid #ff6636;
  background-color: #fff;
  margin-top: 25px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const AnswerDetailBlock = styled.div`
  width: 344px;
  background-color: #fff0eb;
  border-radius: 20px;
  margin-top: 10px;
  flex-shrink: 0;
`;

export const AnswerUserBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const AnswerProfile = styled.div`
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AnswerInfoBlock = styled.div`
  width: 225px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 7px;
`;

export const AnswerMenuContainer = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  position: relative;
  /* margin-left: 180px; */
  margin-bottom: 5px;
  cursor: pointer;
`;

export const AnswerMenuBlock = styled.ul`
  width: 100px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 30px;
  right: 0;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1);

  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 101;
`;

export const AnswerEditSubMenu = styled.li`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnswerDeleteSubMenu = styled.li`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #ff6636;
  border-top: 1px solid #dbdbdb;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnswerReportSubMenu = styled.li`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #ff6636;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AnswerText = styled.div`
  width: 295px;
  font-size: 16px;
  font-weight: 300;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 12px;
  margin-left: 22px;
  margin-bottom: 23px;
`;

export const AnswerImgBlock = styled.div`
  width: 100%;
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
    margin-left: ${(props) => (props.imageCount > 1 ? "-45px" : "0px")};
  }
`;

export const AnswerImgItem = styled.div`
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

export const AnswerImg = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
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
