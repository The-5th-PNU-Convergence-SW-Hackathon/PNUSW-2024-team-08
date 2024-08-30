import styled from "@emotion/styled";
import Image from "next/image";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 50px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
  z-index: 1;

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 60px);
  }
`;

export const LandingForPawIcon = styled.div`
  width: 46px;
  height: 52px;
  align-self: flex-start;
  margin-left: 25px;
  margin-top: 20px;
`;

export const SlideImgBlock = styled.div`
  width: 100%;
  margin-top: 50px;

  .slick-slide {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .slick-center {
    opacity: 1;
  }

  .slick-dots {
    bottom: 650px;
  }

  .slick-dots li {
    margin: 0px;
  }

  .slick-dots li button:before {
    font-size: 7px;
    color: #aaa;
    border-radius: 50%;
    transition: color 0.3s ease-in-out;
  }

  /* .slick-dots li button:hover:before {
    color: #d9d9d9;
  } */

  .slick-dots li.slick-active button:before {
    font-size: 9px;
    color: #ff6636;
    border-radius: 50%;
    transition: color 0.3s ease-in-out;
  }

  .slick-dots li.slick-active button:hover:before {
    color: #ff6636;
  }

  /* .slick-track {
    margin-left: 10px;
  } */
`;

export const LandingContent = styled.div`
  width: 350px;
  height: 650px;
  margin: 0 auto;
  border-radius: 50px;
  position: relative;
  z-index: 10;
`;

export const LandingText = styled.div`
  font-size: 22px;
  font-weight: 600;
  width: 355px;
  text-align: center;
  margin-top: 40px;
`;

export const LandingSubText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #858080;
  width: 355px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 50px;
`;

export const LandingImg1 = styled.div`
  width: 305px;
  height: 313px;
  margin-left: 26px;
`;

export const LandingImg3 = styled.div`
  width: 344px;
  height: 344px;
  margin-left: 7px;
`;

export const StartBtn = styled.button`
  /* background-color: ${(props) =>
    props.isLastSlide ? "#ff6636" : "#c4c4c4"}; */
  color: #fff;
  background-color: #ff6636;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: -55px;
  z-index: 15;
`;

export const StartText = styled.div`
  font-size: 11px;
  font-weight: 400;
  display: ${(props) => (props.isFirstSlide ? "block" : "none")};

  span {
    color: #ff6636;
    cursor: pointer;
  }
`;
