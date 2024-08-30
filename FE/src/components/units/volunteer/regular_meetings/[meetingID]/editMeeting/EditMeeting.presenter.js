import * as S from "./EditMeeting.styles";
import Image from "next/image";
import { useFormatDate } from "../../../hooks/useFormat";
import Calendar from "../../../addMeeting/component/Calendar.container";

export default function EditMeetingUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer onClick={props.navigateBack}>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
            />
            <S.ContentTitle>정기모임 수정하기</S.ContentTitle>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperContents>
        <S.ContentsContainer>
          <S.TitleBlock>
            <S.Title>대표 사진</S.Title>
          </S.TitleBlock>
          <S.AddMainImgContainer onClick={props.handlePhotoAddClick}>
            <S.AddMainImgBlock>
              <S.AddMainImgItem>
                <input
                  type="file"
                  ref={props.fileInputRef}
                  style={{ display: "none" }}
                  onChange={props.handlePhotoUpload}
                />
                {props.photo ? (
                  <S.VolunteerMainImage
                    src={props.photo.preview}
                    alt="mainImg"
                  />
                ) : (
                  <S.VolunteerMainImage
                    src={props.meetingInfo.profileURL}
                    alt="mainImg"
                  />
                )}
              </S.AddMainImgItem>
            </S.AddMainImgBlock>
          </S.AddMainImgContainer>
          <S.TitleBlock>
            <S.Title>정기모임 이름을 적어주세요</S.Title>
          </S.TitleBlock>
          <S.InputMeeting
            placeholder="이름을 작성해주세요"
            type="text"
            value={props.name}
            onChange={props.handleMeetingName}
          />
          <S.TitleBlock>
            <S.Title>정기모임의 내용을 적어주세요</S.Title>
          </S.TitleBlock>
          <S.DescriptionContainer
            rows="5"
            cols="40"
            placeholder="모임을 소개하는 글을 간단하게 작성해주세요"
            value={props.description}
            onChange={props.handleMeetingDescription}
          />
          <S.TitleBlock>
            <S.Title>정기모임 장소를 입력해주세요</S.Title>
          </S.TitleBlock>
          <S.InputMeeting
            placeholder="장소를 작성해주세요"
            type="text"
            value={props.location}
            onChange={props.handleMeetingLocation}
          />
          <S.TitleBlock>
            <S.Title>모임 시간</S.Title>
          </S.TitleBlock>
          <S.MeetingDateContainer>
            <S.MeetingDateBlock>
              {useFormatDate(props.selectedDate)}
            </S.MeetingDateBlock>
            <S.MeetingDateBtn onClick={props.toggleCalendar}>
              날짜 수정
            </S.MeetingDateBtn>
          </S.MeetingDateContainer>
          {props.showCalendar && (
            <Calendar
              onSelectDate={props.handleDateSelect}
              onClose={props.closeCalendar}
              initialDate={props.initialDate}
            />
          )}
          <S.CostAndMaxnumContainer>
            <S.CostContainer>
              <S.CostTitle>비용</S.CostTitle>
              <S.InputCost
                placeholder="0"
                type="number"
                value={props.cost}
                onChange={props.handleMeetingCost}
              />
            </S.CostContainer>
            <S.MaxnumContainer>
              <S.MaxnumTitle>인원</S.MaxnumTitle>
              <S.InputMaxNum
                placeholder="0"
                type="number"
                value={props.maxNum}
                onChange={props.handleMeetingMaxNum}
              />
            </S.MaxnumContainer>
          </S.CostAndMaxnumContainer>
        </S.ContentsContainer>
        <S.SubmitButtonWrapper>
          <S.SubmitButton
            onClick={() => {
              props.handleEditCompletion(props.editInfo)
            }}
          >
            정기모임 수정
          </S.SubmitButton>
        </S.SubmitButtonWrapper>
      </S.WrapperContents>
    </>
  )
}