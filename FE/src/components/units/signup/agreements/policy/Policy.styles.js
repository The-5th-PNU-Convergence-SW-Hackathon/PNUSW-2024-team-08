import styled from "@emotion/styled";

export const PolicyOverlay = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: calc(100vh - env(safe-area-inset-bottom));
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  /* opacity: 0; */
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

export const WrapperPolicy = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 20px;
  background-color: white;
  overflow-y: scroll;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const PolicyMenuContainer = styled.div`
  width: 344px;
  height: 30px;
  background-color: #d3d3d3;
  border-radius: 7px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  flex-shrink: 0;
`;

export const TermsOfServiceMenu = styled.div`
  width: 169px;
  height: 26px;
  line-height: 26px;
  background-color: ${(props) => (props.isSelected ? "#fff" : "#d3d3d3")};
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
`;

export const PrivacyPolicyMenu = styled.div`
  width: 169px;
  height: 26px;
  line-height: 26px;
  background-color: ${(props) => (props.isSelected ? "#fff" : "#d3d3d3")};
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
`;

export const PolicyContainer = styled.div`
  width: 344px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const PolicyBlock = styled.div`
  margin-bottom: 15px;
`;

export const PolicyOrderedList = styled.ol`
  padding-left: 10px;
`;

export const PolicyUnorderedList = styled.ul`
  padding-left: 13px;
`;

export const PolicyText = styled.div`
  font-size: 10px;
  font-weight: 300;
  margin-top: 15px;
  margin-bottom: 25px;
`;

export const PolicyTitle = styled.div`
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const PolicyListContent = styled.li`
  font-size: 10px;
  font-weight: 300;
`;

export const PolicyContent = styled.div`
  font-size: 10px;
  font-weight: 300;
`;

export const PrivacyTableTitleBlock = styled.div`
  width: 344px;
  height: 33px;
  line-height: 33px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 22px;
  margin-top: -5px;
`;

export const PrivacyTableTitle = styled.div`
  font-size: 11px;
  font-weight: 300;
`;

export const PrivacyTableContentBlock = styled.div`
  width: 344px;
  height: 64px;
  border-top: 0.7px solid #cbc9c9;
  border-bottom: 0.7px solid #cbc9c9;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

export const PrivacyTableContent = styled.div`
  font-size: 11px;
  font-weight: 300;
  text-align: center;
`;
