import * as S from "./Dashboard.styles";
import AdminHandler from "../adminHandler/AdminHandler.container";
import Image from "next/image";

export default function DashboardUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>대시 보드</S.Title>
            <S.ContentItems>
              <S.Content>
                <S.ContentTitle>활성 사용자수</S.ContentTitle>
                <S.ContentCount>5210</S.ContentCount>
                <S.ContentTitle>비활성 사용자수</S.ContentTitle>
                <S.ContentCount>45</S.ContentCount>
              </S.Content>
            </S.ContentItems>
            <S.ContentItems>
              <S.Content>
                <S.ContentTitle>입양 대기중</S.ContentTitle>
                <S.ContentCount>4410</S.ContentCount>
                <S.ContentTitle style={{ paddingLeft: "15px" }}>입양 진행중</S.ContentTitle>
                <S.ContentCount>65</S.ContentCount>
              </S.Content>
              <S.Content>
                <S.ContentTitle style={{ width: "140px" }}>최근에 완료된 입양</S.ContentTitle>
                <S.ContentCount>32</S.ContentCount>
                <S.ContentTitle>완료된 입양</S.ContentTitle>
                <S.ContentCount>320</S.ContentCount>
              </S.Content>
            </S.ContentItems>
            <S.GraphContainer>
              <S.GraphBlock style={{ borderRight: "1px solid #E9ECEF" }}>
                <S.GraphItem>
                  <S.GraphTitle>시간별 방문자 현황</S.GraphTitle>
                  <S.Graph>

                  </S.Graph>
                  <S.DateBlock>
                    <S.Date>09:00</S.Date>
                    <S.Date>12:00</S.Date>
                    <S.Date>15:00</S.Date>
                    <S.Date>18:00</S.Date>
                    <S.Date>21:00</S.Date>
                  </S.DateBlock>
                </S.GraphItem>
              </S.GraphBlock>
              <S.GraphBlock>
                <S.GraphItem>
                  <S.GraphTitle>요일별 방문자 현황</S.GraphTitle>
                  <S.Graph>

                  </S.Graph>
                  <S.DateBlock>
                    <S.Date>05.08</S.Date>
                    <S.Date>05.09</S.Date>
                    <S.Date>05.10</S.Date>
                    <S.Date>05.11</S.Date>
                    <S.Date>05.12</S.Date>
                  </S.DateBlock>
                </S.GraphItem>
              </S.GraphBlock>
            </S.GraphContainer>
            <S.TodayInfoContainer>
              <S.CurrentDate>
                2024-05-08
              </S.CurrentDate>
              <S.CurrentInfoBlock>
                <S.CurrentInfoItem>새로운 가입</S.CurrentInfoItem>
                <S.CurrentInfoNum>37</S.CurrentInfoNum>
                <S.CurrentInfoItem>새로운 게시글</S.CurrentInfoItem>
                <S.CurrentInfoNum>76</S.CurrentInfoNum>
                <S.CurrentInfoItem>새로운 댓글</S.CurrentInfoItem>
                <S.CurrentInfoNum>65</S.CurrentInfoNum>
                <S.CurrentInfoItem>입양 신청</S.CurrentInfoItem>
                <S.CurrentInfoNum>11</S.CurrentInfoNum>
              </S.CurrentInfoBlock>
            </S.TodayInfoContainer>
          </S.ContentsBlock>
        </S.ContentsContainer>
      </S.WrapperContainer>
    </>
  )
}