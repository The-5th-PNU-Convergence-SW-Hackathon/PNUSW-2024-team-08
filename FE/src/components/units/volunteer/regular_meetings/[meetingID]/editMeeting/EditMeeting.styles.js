import styled from "@emotion/styled";


export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
  /* opacity: 0; */
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 23px;
  padding-bottom: 1px;
`;

export const LeftArrowTitleContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ContentTitle = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

export const WrapperContents = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentsContainer = styled.div`
  width: 350px;
  height: calc(100vh - 210px);

  overflow-y: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */

  ::-webkit-scrollbar {
   display: none;
  }
`;

export const TitleBlock = styled.div`
  width: 100%;
  height: 24px;
  margin-top: 24px;
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const Title = styled.p`
  width: auto;
  height: 24px;
`;

export const AddMainImgContainer = styled.div`
  margin-top: 12px;
  width: 344px;
  height: 160px;
  border-radius: 10px;
  cursor: pointer;

  background-color: #FEF8F2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddMainImgBlock = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

export const AddMainImgItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FEF8F2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 이미지가 컨테이너를 넘지 않도록 */
`;

export const VolunteerMainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 컨테이너를 꽉 채우도록 */
  border-radius: 10px;
  background-color: none;
`;

export const InputMeeting = styled.input`
  width: 100%;
  max-width: 344px;
  height: 44px;
  border-radius: 10px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-left: 15px;
  margin-top: 12px;
  color: #BEA597;
  font-size: 16px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`;

export const DescriptionContainer = styled.textarea`
  margin-top: 12px;
  width: 100%;
  max-width: 344px;
  max-height: 400px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 16px;
  resize: none;
  overflow: hidden;
  color: #BEA597;
  font-size: 16px;

  overflow-y: auto;

  :focus {
    outline: 0;
    border: 2px solid #BEA597
  }

  ::-webkit-input-placeholder {
    color: #BEA597;
  }

  ::-webkit-scrollbar {
   display: none;
  }
`;

export const MeetingDateContainer = styled.div`
  margin-top: 12px;
  width: 344px;
  height: 44px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MeetingDateBlock = styled.div`
  width: 224px;
  height: 100%;
  border-radius: 10px;
  background-color: #FEF8F2;
  color: #878787;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MeetingDateBtn = styled.div`
  width: 104px;
  height: 100%;
  border-radius: 30px;
  background-color: #240D05;
  color: white;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CalendarBlock = styled.div`
  width: 100%;
  height: 100%;
`;

export const CostAndMaxnumContainer = styled.div`
  margin-top: 24px;
  width: 344px;
  height: 77px;

  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const CostContainer = styled.div`
  width: 164px;
  height: 100%;
`;

export const CostTitle = styled.div`
  width: 100%;
  height: 21px;

  font-size: 20px;
  font-weight: bold;
`;

export const InputCost = styled.input`
  margin-top: 12px;
  width: 100%;
  height: 44px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-right: 15px;
  border-radius: 10px;
  color: #BEA597;
  font-size: 16px;
  text-align: right;

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`;

export const MaxnumContainer = styled.div`
  width: 164px;
  height: 100%;
`;

export const MaxnumTitle = styled.div`
  width: 100%;
  height: 21px;

  font-size: 20px;
  font-weight: bold;
`;

export const InputMaxNum = styled.input`
  margin-top: 12px;
  width: 100%;
  height: 44px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-right: 15px;
  border-radius: 10px;
  color: #BEA597;
  font-size: 16px;
  text-align: right;

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }


  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`
export const SubmitButtonWrapper = styled.div`
  width: 390px;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SubmitButton = styled.button`
  color: #ffffff;
  background-color: #ff6636;
  cursor: pointer;
`;