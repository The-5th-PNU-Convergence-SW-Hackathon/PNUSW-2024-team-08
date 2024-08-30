import styled from "@emotion/styled";

export const IconModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  width: 390px;
  height: calc(100vh - 231px);
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) calc(12% + 100px),
    rgba(255, 255, 255, 0) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 147px;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.isSubIconsVisible ? 1 : 0)};
  visibility: ${(props) => (props.isSubIconsVisible ? "visible" : "hidden")};

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 231px - 60px);
  }
`;

export const FloatingIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6636;
  font-size: 30px;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 12%;
  right: calc(50% - 172px);
  cursor: pointer;
  z-index: 30;
`;

export const FloatingIconText = styled.div`
  font-size: 30px;
  color: #fff;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.isSubIconsVisible ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const SubFloatingIcon = styled.div`
  width: 60px;
  height: 60px;
  font-size: 25px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 12%;
  right: calc(50% - 172px);
  cursor: pointer;
  transition: transform 0.5s ease-in-out, visibility 0.5s ease-in-out,
    background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  visibility: ${(props) => (props.isSubIconsVisible ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isShow ? "translateY(0)" : "translateY(75px)"};

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const SubFloatingIconText = styled.div`
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  right: calc(50% - 95px);
  z-index: 15;
  font-family: "Sunflower", sans-serif;

  visibility: ${(props) => (props.isSubIconsVisible ? "visible" : "hidden")};
  transition: ${(props) =>
    props.isSubIconsVisible ? "visibility 0s 0.5s" : "visibility 0s 0s"};
`;

export const SubFloatingIcon1 = styled(SubFloatingIcon)`
  bottom: calc(12% + 75px);
  transform: ${(props) =>
    props.isSubIconsVisible ? "translateY(0)" : "translateY(75px)"};
  z-index: 25;
`;

export const SubFloatingIconText1 = styled(SubFloatingIconText)`
  bottom: calc(12% + 90px);
`;

export const SubFloatingIcon2 = styled(SubFloatingIcon)`
  bottom: calc(12% + 145px);
  transform: ${(props) =>
    props.isSubIconsVisible ? "translateY(0)" : "translateY(145px)"};
  z-index: 20;
`;

export const SubFloatingIconText2 = styled(SubFloatingIconText)`
  bottom: calc(12% + 160px);
`;

export const SubFloatingIcon3 = styled(SubFloatingIcon)`
  bottom: calc(12% + 215px);
  transform: ${(props) =>
    props.isSubIconsVisible ? "translateY(0)" : "translateY(215px)"};
  z-index: 15;
`;

export const SubFloatingIconText3 = styled(SubFloatingIconText)`
  bottom: calc(12% + 230px);
`;
