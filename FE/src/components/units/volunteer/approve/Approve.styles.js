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
  align-items: flex-start;
`;

export const ApproveInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ApproveListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ApproveBlock = styled.div`
  width: 100%;
  border: 1px solid #f6f2ee;
  border-radius: 16px;
  background-color: #FEF8F2;
  padding: 16px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  max-height: ${props => props.active ? '1000px' : '72px'};
`;


export const ApproveBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const ApproveIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
`;

export const ApproveImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ApproveName = styled.div`
  width: 120px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StatusBlock = styled.div`
  width: auto;
`;

export const Status = styled.div`
  font-size: 14px;
  color: #666;
`;

export const ExpandedContent = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.2s ease-in-out;
  transition-delay: ${props => props.active ? '0.2s' : '0s'};
`;

export const Province = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;

export const GreetingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Greeting = styled.div`
  width: 100px;
  color: #666;
  font-size: 16px;
`;

export const GreetingContent = styled.div`
  width: 100%;
  height: auto;
  font-size: 14px;
  border: 1px solid #FF6636;
  border-radius: 10px;
  background-color: white;
  padding: 5px 10px;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const RejectBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #FF6636;
  background-color: white;
  border: 1px solid #FF6636;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ApproveBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #FF6636;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;