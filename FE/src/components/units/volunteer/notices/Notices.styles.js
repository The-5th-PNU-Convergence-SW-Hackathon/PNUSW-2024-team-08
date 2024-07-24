import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const Container = styled.div`
  width: 344px;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;
`;

export const AnnouncementBlock = styled.div`
  width: 344px;
  height: 57px;
  border: 1px solid #f6f2ee;
  border-radius: 16px;
  cursor: pointer;
  background-color: #f6f6f6;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const AnnouncementItem = styled.div`
  width: 319px;
  height: 38px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 5px;

  /*display 영역*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckImg = styled.div`
  width: 27px;
  height: 19px;
`;

export const AnnouncementText = styled.p`
  width: 198px;
  height: 34px;
  font-size: 14px;
  letter-spacing: -0.7px;
  margin-left: 10px;
  margin-right: 12px;

  overflow: hidden;
`;

export const WritersBlock = styled.div`
  width: 59px;
  height: 34px;
  font-size: 12px;
  font-weight: 590;
  color: #7b7b7b;
  letter-spacing: -0.4px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4.5px;
`;

export const Writer = styled.p`
  width: 100%; /*59px*/
  height: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Time = styled.p`
  width: 100%;
  height: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const AddAnnouncement = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6636;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  visibility: hidden;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 105px;
  right: calc(50% - 172px);
`;
