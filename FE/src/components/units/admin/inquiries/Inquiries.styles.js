import styled from "@emotion/styled";

export const UserInfoDetailContainer = styled.div`
  background-color: white;
  width: 761px;
  height: 744px;
  border-radius: 20px;
  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const CloseBtnBlock = styled.div`
  width: 656px;
  height: 28px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-end;
`;

export const CloseBtn = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const BigTitle = styled.div`
  width: 656px;
  height: 30px;
  font-size: 30px;
  font-weight: bold;

  margin-bottom: 30px;
`;

export const UserInfo = styled.span`
  width: auto;
  height: 100%;
`;

export const UserInfoDetailBlock = styled.div`
  width: 656px;
  height: 534px;
`;

export const UserItem = styled.div`
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserInfosTitle = styled.div`
  width: 108px;
  height: 100%;
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserInfosContent = styled.div`
  width: 500px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const InquiryContent = styled.div`
  width: 636px;
  height: 150px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 6px;
  padding: 12px 14px;
  margin-left: 20px;
  margin-top: 10px;

  :focus{
    border: 1px solid gray;
    outline: none;
  }
`;

export const UserInfoDetailBtnContainer = styled.div`
  width: 100%;
  height: 36px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Btn = styled.div`
  width: 60px;
  height: 40px;
  border-radius: 6px;
  background-color: #464646;
  color: white;
  font-weight: 500;
  cursor: pointer;
  padding: 16px 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  left: 0;

  filter: ${(props) => (props.active ? "brightness(0.5)" : "brightness(1.0)")};
`;

export const ContentsContainer = styled.div`
  width: 85vw;
  height: 100vh;
  background-color: white;
`;

export const ContentsBlock = styled.div`
  width: 984px;
  height: 686px;
  margin-top: 40px;
`;

export const Title = styled.div`
  width: 900px;
  height: 67px;
  font-size: 36px;
  font-weight: bold;

  border-bottom: 1px solid #E9ECEF;
`;

export const UserInfoContainer = styled.div`
  width: 976px;
  height: 498px;  
  font-size: 15px;
`;

export const UserInfoTitleBlock = styled.div`
  width: 900px;
  height: 57px;
  border-bottom: 1px solid #E9ECEF;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const RequestNum = styled.div`
  width: 60px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RequestDate = styled.div`
  width: 148px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Nickname = styled.div`
  width: 105px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Kind = styled.div`
  width: 90px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InquiriesTitle = styled.div`
  width: 190px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const State = styled.div`
  width: 42px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserInfoBlock = styled.div`
  width: 976px;
  height: 350px;
`;

export const UserInfoItems = styled.div`
  width: 100%;
  height: 70px;
  
  display: flex;
  flex-direction: row;
`;

export const UserInfoItem = styled.div`
  width: 900px;
  height: 100%;
  border-bottom: 1px solid #E9ECEF;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ChangeBtnBlock = styled.div`
  width: 76px;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const ChangeBtn = styled.div`
  width: 50px;
  height: 26px;
  background-color: #FF6636;
  color: white;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageBlock = styled.div`
  width: 976px;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageItem = styled.div`
  width: 141px;
  height: 18px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Page = styled.div`
  width: 7px;
  height: 100%;

  cursor: pointer;
`;