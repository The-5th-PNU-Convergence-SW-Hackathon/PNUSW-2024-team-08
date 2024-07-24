import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContentsContainer = styled.div`
  width: 85vw;
  height: 100vh;
  background-color: white;
`;

export const ContentsBlock = styled.div`
  width: 77.986vw;
  height: 69.727vh;
  margin-top: 40px;
`;

export const Title = styled.div`
  width: 900px;
  height: 68px;
  font-size: 36px;
  font-weight: bold;

  border-bottom: 1px solid #E9ECEF;
`;

export const ContentItems = styled.div`
  width: 900px;
  height: 52px;

  display: flex;
  flex-direction: row;

  border-bottom: 1px solid #E9ECEF;
`;

export const Content = styled.div`
  width: 390px;
  height: 50px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  margin-left: 20px;
`;

export const ContentTitle = styled.div`
  width: 115px;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentCount = styled.div`
  width: 35px;
  height: 100%;
  font-size: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const  GraphContainer = styled.div`
  width: 1103px;
  height: 383px;
  border-bottom: 1px solid #E9ECEF;

  display: flex;
  flex-direction: row;
`;

export const GraphBlock = styled.div`
  width: 538px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GraphItem = styled.div`
  width: 515px;
  height: 325px;
`;

export const GraphTitle = styled.p`
  width: 150px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
`;

export const Graph = styled.div`
  width: 100%;
  height: 249px;
  background-color: aqua;
`;

export const DateBlock = styled.div`
  width: 100%;
  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Date = styled.span`
  width: 40px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodayInfoContainer = styled.div`
  width: 900px;
  height: 118px;
  margin-top: 23px;
  
  display: flex;
  flex-direction: column;
`;

export const CurrentDate = styled.p`
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  padding-left: 10px;
  
`;

export const CurrentInfoBlock = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F4F4F5;
  border-radius: 10px;
`;

export const CurrentInfoItem = styled.div`
  width: 113px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CurrentInfoNum = styled.div`
  width: auto;
  height: 50px;
  font-size: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
