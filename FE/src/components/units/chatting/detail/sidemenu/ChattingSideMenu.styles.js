import styled from "@emotion/styled";

export const CoverSideMenu = styled.div`
  width: 300px;
  height: 100%;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: calc(50% + 195px);
  z-index: 102;
`;

export const SideMenuOverlay = styled.div`
  display: ${({ isSideMenuOpen }) => (isSideMenuOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: opacity 0.6s ease-in-out;
`;

export const SideMenuContainer = styled.div`
  z-index: 101;
  border-radius: 20px 0 0 20px;
  background-color: #fff;
  height: 100%;
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
  padding-top: 15px;

  &.open {
    transform: translateX(0);
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
  margin-top: 40px;
  margin-left: 5px;
`;

export const SideMenuImgContainer = styled.div`
  width: 255px;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ImgBlock = styled.div`
  width: 74px;
  height: 74px;
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
  height: calc(100% - 580px);
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

export const UserBlock = styled.div`
  width: 255px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 8px;
`;

export const UserImg = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 7px 0 5px;
`;

export const UserName = styled.div`
  font-size: 12px;
  font-weight: 700;
`;
