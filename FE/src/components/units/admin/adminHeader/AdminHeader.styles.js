import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 100%;
  height: 8.476vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: White;
  border-bottom: 0.062vw solid #717478;

  filter: ${(props) => (props.active ? "brightness(0.5)" : "brightness(1.0)")};
`;

export const HeaderContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 1.851vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageBlock = styled.div`
  width: 48px;
  height: 3.433vh;
`;

export const HeaderTitle = styled.p`
  width: 7.156vw;
  height: 2.146vh;
  font-size: 1.234vw;
  font-weight: bolder;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
