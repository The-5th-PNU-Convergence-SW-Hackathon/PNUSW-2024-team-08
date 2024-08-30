import styled from "@emotion/styled";
import Image from "next/image";

export const WrapperHomeContents = styled.div`
  width: 390px;
  height: calc(100vh - 219px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: scroll;
  background-color: white;
  padding-bottom: 15px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */

  /* iOS 전용 스타일 */
  @supports (-webkit-touch-callout: none) {
    height: calc(100vh - 219px - 60px);
  }
`;

export const HomeIntroContainer = styled.div`
  width: 344px;
  height: 152px;
  background-color: #ff6636;
  border-radius: 20px;
  margin-top: 5px;
  flex-shrink: 0;
  position: relative;
`;

export const HomeIntroTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
  position: absolute;
  top: 40px;
  left: 15px;
`;

export const PawImageSmallBlock = styled.div`
  width: 38px;
  height: 38px;
  position: absolute;
  top: 30px;
  left: 225px;
`;

export const PawImageBigBlock = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  left: 262px;
`;

export const HomeIntroTextUpper = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: white;
  position: absolute;
  top: 100px;
  left: 15px;
`;

export const HomeIntroTextLower = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: white;
  position: absolute;
  top: 115px;
  left: 15px;
`;

export const HomeIntroArrowBlock = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #240d05;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90px;
  left: 270px;
`;

export const HomeIconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export const HomeIconBlock = styled.div`
  width: 104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const HomeIcon = styled.div`
  width: 104px;
  height: 104px;
  background-color: #efefef;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HomeDogsCatsIcon = styled.div`
  width: 104px;
  height: 104px;
  background-color: #efefef;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const HomeIconText = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
`;

export const HomeContentsContainer = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
`;

export const HomeTitleBlock = styled.div`
  width: 344px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;

  img {
    cursor: pointer;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 24px;
`;

export const AdoptPetBlock = styled.div`
  width: 390px;
  margin-top: 10px;

  .slick-slide {
    width: 254px;
    height: 254px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-center {
    opacity: 1;
  }

  .slick-prev,
  .slick-next {
    display: none !important; // 화살표 버튼을 숨깁니다.
  }

  .slick-track {
    margin-left: -45px;
  }
`;

export const AdoptPet = styled.div`
  width: 254px;
  height: 254px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  outline: none; /* 포커스 시 테두리 제거 */

  &:focus {
    outline: none; /* 포커스 시 테두리 제거 */
  }
`;

export const PetImg = styled.img`
  width: 254px;
  height: 254px;
  object-fit: cover;
  border-radius: 20px;
`;

export const AdoptInfoBlock = styled.div`
  width: 238px;
  height: 79px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  position: absolute;
  top: 165px;
  left: 8px;
`;

export const AdoptNameGender = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  position: absolute;
  top: 18px;
  left: 10px;
`;

export const AdoptBirthAddress = styled.div`
  font-size: 12px;
  color: #4e4e48;
  position: absolute;
  top: 48px;
  left: 10px;
`;

export const AdoptLikeBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  top: 47px;
  left: 160px;
`;

export const AdoptLike = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ff7272;
`;

export const AdoptViewBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  top: 47px;
  left: 195px;
`;

export const AdoptView = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #a7a7a7;
`;

export const AdoptArrow = styled.div`
  width: 254px !important;
  height: 254px !important;
  background-color: #ff6636;
  border-radius: 20px;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
  flex-shrink: 0;
  cursor: pointer;
  outline: none; /* 포커스 시 테두리 제거 */

  &:focus {
    outline: none; /* 포커스 시 테두리 제거 */
  }
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

export const CommunityBlock = styled.div`
  width: 344px;
  height: 143px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const CommunityImg = styled.div`
  width: 115px;
  height: 117px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const StyledImage = styled(Image)`
  border-radius: 7px;
`;

export const CommunityInfoBlock = styled.div`
  width: 170px;
  height: 117px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const CommunityCategory = styled.div`
  font-size: 10px;
  font-weight: 300;
  margin-top: 5px;
`;

export const CommunityTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
`;

export const CommunityText = styled.div`
  font-size: 16px;
  font-weight: 300;
  width: 180px;
  height: 58px;
  margin-top: 5px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
`;

export const CommunityNickNameDate = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: #434240;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 98px;
  gap: 7px;
`;

export const CommunityNickName = styled.div``;

export const CommunityDate = styled.div``;

export const CommunityLikeBlock = styled.div`
  font-size: 11px;
  font-weight: 400;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 94px;
  left: 120px;
  font-family: "Roboto", sans-serif;
`;

export const CommunityLike = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CommunityViewBlock = styled.div`
  font-size: 11px;
  font-weight: 400;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 94px;
  left: 156px;
  font-family: "Roboto", sans-serif;
`;

export const CommunityView = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
