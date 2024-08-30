import styled from "@emotion/styled";
import Image from "next/image";

export const CoverSideMenu = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: calc(50% + 195px);
  z-index: 102;

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 60px);
  }
`;

export const SideMenuOverlay = styled.div`
  display: ${({ isSideMenuOpen }) => (isSideMenuOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: calc(100vh - env(safe-area-inset-bottom));
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: opacity 0.6s ease-in-out;
`;

export const SideMenuContainer = styled.div`
  z-index: 101;
  border-radius: 20px 0 0 20px;
  background-color: #fff;
  height: 100vh;
  width: 293px;
  top: 0;
  right: calc(50% - 195px);
  transform: translateX(293px);
  position: fixed;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 35px;

  &.open {
    transform: translateX(0);
  }

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 60px);
  }
`;

export const SideMenuTitleBlock = styled.div`
  width: 255px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 5px;
`;

export const SideMenuImageBlock = styled(Image)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const SideMenuImgContainer = styled.div`
  width: 255px;
  max-height: 173px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 74px;
  gap: 14px;
  margin-top: ${(props) => (props.imageCount > 0 ? "10px" : "0px")};
  overflow-y: auto;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const ImgBlock = styled.div`
  width: 74px;
  height: 74px;
  position: relative;
  cursor: pointer;
`;

export const ImgsIcon = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 5px;
  font-size: 10px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1px;
  right: 3px;
  visibility: ${(props) => (props.count > 1 ? "visible" : "hidden")};
`;

export const SideMenuDataContainer = styled.div`
  width: 254px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DataBlock = styled.div`
  width: 254px;
  height: 53px;
  border-radius: 15px;
  background-color: #f6f6f6;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const DataImg = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 12px;
  background-color: #747474;
  margin-left: 10px;
  margin-right: 15px;
`;

export const DataInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DataName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const DataSize = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #7b7b7b;
`;

export const UserContainer = styled.div`
  width: 255px;
  height: calc(100% - 350px);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* 하단 그라데이션 추가 */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to top, white, rgba(255, 255, 255, 0));
    pointer-events: none; /* 가상 요소가 클릭 등의 이벤트를 방해하지 않도록 설정 */
    border-bottom-left-radius: 20px;
  }
`;

export const UserMenuTitle = styled.div`
  width: 255px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const UserBlock = styled.div`
  width: 255px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 8px;
`;

export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 7px 0 7px;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
