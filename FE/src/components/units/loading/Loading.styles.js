import styled from "@emotion/styled";

export const WrapperLoading = styled.div`
  width: 390px;
  height: 100vh;
  background-color: #ff6636;
  margin: 0px auto;
  position: relative;
`;

export const BlurryElement = styled.div`
  width: 390px;
  height: 100vh;
  background-color: #ff6636;
  filter: blur(${(props) => (props.blurred ? "5px" : "0")});
  transition: filter 1s ease;
`;

export const WrapperImage = styled.div`
  width: 124px;
  height: 138px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
