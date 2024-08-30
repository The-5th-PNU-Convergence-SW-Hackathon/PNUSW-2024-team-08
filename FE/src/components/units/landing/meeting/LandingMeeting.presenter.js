import * as S from "./LandingMeeting.styles";
import Image from "next/image";
import React from "react";

export default function LandingMeetingUI(props) {
  return (
    <>
      <S.MeetingDetailContainer>
        <S.MeetingDetailContentsBlock>
          <S.DetailContentsDateBox>
            <S.DetailDate>9/7 (토)</S.DetailDate>
            <S.LeftDdayBox>
              D-<S.Day>8</S.Day>
            </S.LeftDdayBox>
          </S.DetailContentsDateBox>
          <S.MeetingName>유기견 집수리</S.MeetingName>
          <S.MeetingDetailInfoBox>
            <Image
              src="/images/landing/landing_shelter_image_1.svg"
              alt="meeting_detail_main"
              width={148}
              height={92}
              priority={true}
            />
            <S.MeetingDetailInfo>
              <S.MeetingDetailItems>
                <S.DetailInfoName>일시</S.DetailInfoName>
                <S.DetailInfo>9/7 (월) 오전 11:00</S.DetailInfo>
              </S.MeetingDetailItems>
              <S.MeetingDetailItems>
                <S.DetailInfoName>위치</S.DetailInfoName>
                <S.DetailInfo>부산 반려동물복지센터</S.DetailInfo>
              </S.MeetingDetailItems>
              <S.MeetingDetailItems>
                <S.DetailInfoName>비용</S.DetailInfoName>
                <S.DetailInfo>무료</S.DetailInfo>
              </S.MeetingDetailItems>
              <S.MeetingDetailItems>
                <S.DetailInfoName>인원</S.DetailInfoName>
                <S.DetailInfo>
                  <S.ParticipatedPeople>12</S.ParticipatedPeople>/
                  <S.MaximunPeople>12</S.MaximunPeople>
                </S.DetailInfo>
              </S.MeetingDetailItems>
            </S.MeetingDetailInfo>
          </S.MeetingDetailInfoBox>
          <S.UsersAndParticipateBox>
            <S.UsersItems>
              <S.UserImgBox>
                <Image
                  src="/images/volunteer/volunteerDetail/user_1.svg"
                  alt="user"
                  width={30}
                  height={30}
                  priority={true}
                />
              </S.UserImgBox>
              <S.UserImgBox style={{ right: "8px" }}>
                <Image
                  src="/images/volunteer/volunteerDetail/user_2.svg"
                  alt="user"
                  width={30}
                  height={30}
                  priority={true}
                />
              </S.UserImgBox>
              <S.UserImgBox style={{ right: "13px" }}>
                <Image
                  src="/images/volunteer/volunteerDetail/user_3.svg"
                  alt="user"
                  width={30}
                  height={30}
                  priority={true}
                />
              </S.UserImgBox>
            </S.UsersItems>
            <S.ParticipateBtn>참가하기</S.ParticipateBtn>
          </S.UsersAndParticipateBox>
        </S.MeetingDetailContentsBlock>
      </S.MeetingDetailContainer>
      <S.MeetingDetailContainer>
        <S.MeetingDetailContentsBlock>
          <S.DetailContentsDateBox>
            <S.DetailDate>9/22 (일)</S.DetailDate>
            <S.LeftDdayBox>
              D-<S.Day>23</S.Day>
            </S.LeftDdayBox>
          </S.DetailContentsDateBox>
          <S.MeetingName>보호센터 청소활동</S.MeetingName>
          <S.MeetingDetailInfoBox>
            <Image
              src="/images/landing/landing_shelter_image_2.svg"
              alt="meeting_detail_main"
              width={148}
              height={92}
              priority={true}
            />
            <S.MeetingDetailInfo>
              <S.MeetingDetailItems>
                <S.DetailInfoName>일시</S.DetailInfoName>
                <S.DetailInfo>9/22 (일) 오전 10:00</S.DetailInfo>
              </S.MeetingDetailItems>
              <S.MeetingDetailItems>
                <S.DetailInfoName>위치</S.DetailInfoName>
                <S.DetailInfo>부산 누리보호센터</S.DetailInfo>
              </S.MeetingDetailItems>
              <S.MeetingDetailItems>
                <S.DetailInfoName>비용</S.DetailInfoName>
                <S.DetailInfo>2천원(신규 인원 제외)</S.DetailInfo>
              </S.MeetingDetailItems>
              <S.MeetingDetailItems>
                <S.DetailInfoName>인원</S.DetailInfoName>
                <S.DetailInfo>
                  <S.ParticipatedPeople>5</S.ParticipatedPeople>/
                  <S.MaximunPeople>6</S.MaximunPeople>
                </S.DetailInfo>
              </S.MeetingDetailItems>
            </S.MeetingDetailInfo>
          </S.MeetingDetailInfoBox>
          <S.UsersAndParticipateBox>
            <S.UsersItems>
              <S.UserImgBox>
                <Image
                  src="/images/volunteer/volunteerDetail/user_1.svg"
                  alt="user"
                  width={30}
                  height={30}
                  priority={true}
                />
              </S.UserImgBox>
              <S.UserImgBox style={{ right: "8px" }}>
                <Image
                  src="/images/volunteer/volunteerDetail/user_2.svg"
                  alt="user"
                  width={30}
                  height={30}
                  priority={true}
                />
              </S.UserImgBox>
              <S.UserImgBox style={{ right: "13px" }}>
                <Image
                  src="/images/volunteer/volunteerDetail/user_3.svg"
                  alt="user"
                  width={30}
                  height={30}
                  priority={true}
                />
              </S.UserImgBox>
            </S.UsersItems>
            <S.ParticipateBtn>참가하기</S.ParticipateBtn>
          </S.UsersAndParticipateBox>
        </S.MeetingDetailContentsBlock>
      </S.MeetingDetailContainer>
      <S.Overlay></S.Overlay>
    </>
  );
}
