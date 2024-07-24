import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 231px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const VolunteerBlock = styled.div`
  width: 344px;
  height: 354px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const VolunteerImg = styled.div`
  width: 324px;
  height: 183px;
  border-radius: 10px;
  margin-top: 8px;
  position: relative;
`;

export const VolunteerLikeBlock = styled.div`
  width: 66px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  gap: 4px;
  top: 145px;
  left: 8px;
`;

export const VolunteerTitleBlock = styled.div`
  width: 344px;
  font-size: 24px;
  font-weight: 600;
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const VolunteerTitle = styled.p`
  width: auto;
  margin-left: 10px;
`;

export const VolunteerText = styled.div`
  width: 310px;
  height: 34px;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  margin-right: 10px;
  overflow: hidden;
  letter-spacing: -0.7px;
`;

export const VolunteerInfoBlock = styled.div`
  width: 324px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
  gap: 5px;
`;

export const VolunteerNumberOfMember = styled.div`
  width: 88px;
  height: 30px;
  line-height: 30px;
  background-color: #ff6636;
  border-radius: 15px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;

export const VolunteerCategoryBlock = styled.div`
  width: auto;
  height: 30px;
  line-height: 30px;
  background-color: #e4e4e4;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
`;

export const VolunteerCategory = styled.p`
  padding: 0 15px;
`;

export const VolunteerRegionBlock = styled.div`
  width: auto;
  height: 30px;
  line-height: 30px;
  background-color: #e4e4e4;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
`;

export const VolunteerRegion = styled.p`
  padding: 0 15px;
`;

export const MoreBtn = styled.button`
  margin-top: 15px;
  cursor: pointer;
`;

export const VolunteerAddIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6636;
  border-radius: 50%;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 12%;
  right: calc(50% - 172px);
`;
