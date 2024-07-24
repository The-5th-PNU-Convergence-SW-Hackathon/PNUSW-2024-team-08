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

export const CommunityMenuBlock = styled.div`
  width: 190px;
  height: 43px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-top: 20px;
  margin-right: 155px;
  margin-bottom: 5px;
`;

export const CommunityMenuPopularity = styled.div`
  width: 91px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "likeNum" ? "#ff6636" : "#eeeeee"};
  border-radius: 22px;
  color: ${(props) => (props.sort === "likeNum" ? "#ffffff" : "#000000")};
  cursor: pointer;
`;

export const CommunityMenuNewest = styled.div`
  width: 91px;
  height: 43px;
  line-height: 43px;
  background-color: ${(props) =>
    props.sort === "createdDate" ? "#ff6636" : "#eeeeee"};
  color: #646464;
  border-radius: 22px;
  color: ${(props) => (props.sort === "createdDate" ? "#ffffff" : "#000000")};
  cursor: pointer;
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
  border-radius: 7px;
  margin-left: 15px;
  margin-right: 20px;
`;

export const CommunityInfoBlock = styled.div`
  width: 210px;
  height: 117px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const CommunityTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`;

export const CommunityText = styled.div`
  font-size: 16px;
  font-weight: 300;
  width: 162px;
  margin-top: 10px;
`;

export const CommunityName = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #434240;
  position: absolute;
  top: 91px;
`;

export const CommunityLikeBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1px;
  top: 89px;
  left: 103px;
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
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 89px;
  left: 147px;
`;

export const CommunityView = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CommunityAddIcon = styled.div`
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
  cursor: pointer;
`;

export const MoreButton = styled.button`
  margin-top: 12px;
  cursor: pointer;
`;
