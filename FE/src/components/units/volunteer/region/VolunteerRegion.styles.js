import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";


export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 231px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow-y: auto;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const Notice = styled.div`
  margin-top: 15px;
  width: 100%;
  display: 40px;
  font-size: 18px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const VolunteerRegionMenuBlock = styled.div`
  width: 344px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 15px;
  gap: 15px;
`;

export const VolunteerRegionMenu = styled.div`
  width: 157px;
  height: 44px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #f5f5f5;
   box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.1),
    0 2px 2px 1px rgba(0, 0, 0, 0.4);
  font-size: 16px;
  padding-left: 15px;
  margin-left: 5px;
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const VolunteerRegionMenuSub = styled.div`
  width: 157px;
  height: 44px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.1),
    0 2px 2px 1px rgba(0, 0, 0, 0.4);
  font-size: 16px;
  padding-left: 15px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const MenuArrowBlock = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 125px;
  transition: transform 0.3s ease;

  cursor: pointer;

  &.open {
    transform: rotate(180deg);
  }
`;

export const ProvinceDropdown = styled.div`
   position: absolute;
  top: 52px;
  left: 6px;
  width: 157px;
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  overflow: auto;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.1),
    0 2px 2px 1px rgba(0, 0, 0, 0.5);

  max-height: 0;
  opacity: 0;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out;

  &.open {
    max-height: 300px;
    opacity: 1;
    padding-bottom: 15px;
    transition: max-height 0.3s ease-in, opacity 0.3s ease-in, padding 0.3s ease-in;
  }

  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: black rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const ProvinceOption = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-left: 12px;
  font-size: 16px;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  flex-shrink: 0;

  :hover {
    opacity: 0.5;
  }
`;

export const MenuSubArrowBlock = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 295px;
  transition: transform 0.3s ease;

  cursor: pointer;

  &.open {
    transform: rotate(180deg);
  }
`;

export const DistrictDropdown = styled.div`
  position: absolute;
  top: 52px;
  left: 178px;
  width: 157px;
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  overflow: auto;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.1),
    0 2px 2px 1px rgba(0, 0, 0, 0.5);

  max-height: 0;
  opacity: 0;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out;

  &.open {
    max-height: 300px;
    opacity: 1;
    padding-bottom: 15px;
    transition: max-height 0.3s ease-in, opacity 0.3s ease-in, padding 0.3s ease-in;
  }

  scrollbar-width: thin; /* "auto" 또는 "thin" */
  scrollbar-color: black rgba(0, 0, 0, 0); /* 스크롤바 색상과 트랙 색상 */
`;

export const DistrictOption = styled.div`
  width: 100%;
  padding-top: 15px;
  padding-left: 12px;
  font-size: 16px;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  flex-shrink: 0;

  :hover {
    opacity: 0.5;
  }
`;

export const VolunteerNewTitle = styled.div`
  width: 90%;
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 10px;
`;

export const VolunteerNewBlock = styled.div`
  width: 390px;
  height: 233px;
  /* max-width: 390px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  padding: 0 20px;
  overflow-x: auto;
  flex-shrink: 0;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const VolunteerNew = styled.div`
  width: 224px;
  height: 226px;
  border-radius: 20px;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
`;

export const VolunteerNewImg = styled.div`
  width: 208px;
  height: 120px;
  border-radius: 20px;
  margin-top: 8px;
`;

export const VolunteerNewNameBlock = styled.div`
  width: 208px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
`;

export const VolunteerNewName = styled.p`
  width: auto;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VolunteerNewInfoBlock = styled.div`
  width: 194px;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  gap: 5px;
`;

export const VolunteerNewCategoryBlock = styled.div`
  width: auto;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #240d05;
  border-radius: 15px;
`;

export const VolunteerNewCategory = styled.p`
  padding: 0 15px;
`;

export const VolunteerNewRegion = styled.div`
  width: auto;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  background-color: #240d05;
  border-radius: 15px;
`;

export const VolunteerNewAlarmBlock = styled.div`
  width: 162px;
  height: 44px;
  line-height: 44px;
  border: 2px solid #ff6636;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-shrink: 0;
`;

export const VolunteerNewAlarmIcon = styled.div`
  width: 22px;
  height: 16px;
  margin-bottom: 26px;
`;

export const VolunteerRegionTitle = styled.div`
  width: 90%;
  font-size: 24px;
  font-weight: 700;
  margin-top: 40px;
  margin-left: 10px;
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
  width: 332px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

export const VolunteerRegionBLock = styled.div`
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

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingImgBox = styled.div`
  height: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoadingImg = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid #ff6636;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
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
  bottom: ${(props) => (props.showModal ? '15%' : '12%')};
  transition: bottom 0.3s ease-in-out;
  right: calc(50% - 172px);
  cursor: pointer;
`;
