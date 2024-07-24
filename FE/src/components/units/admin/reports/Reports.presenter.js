import * as S from "./Reports.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";

export default function ReportsUI(props) {
  return (
    <>
      {props.isUserInfoClicked && props.selectedUser ? (
        <S.UserInfoDetailContainer>
          <S.CloseBtnBlock>
            <S.CloseBtn onClick={props.closeUserInfo}>
              <Image src="/images/admin/x.svg" alt="x" width={24} height={24} />
            </S.CloseBtn>
          </S.CloseBtnBlock>
          <S.BigTitle>
            요청번호 - <S.UserInfo>{props.selectedUser.id}</S.UserInfo>
          </S.BigTitle>
          <S.UserInfoDetailBlock>
            <S.UserItem>
              <S.UserInfosTitle>신고자 닉네임</S.UserInfosTitle>
              <S.UserInfosContent>{props.selectedUser.reporterNickName}</S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>피신고자 닉네임</S.UserInfosTitle>
              <S.UserInfosContent>{props.selectedUser.reportedNickName}</S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>사유</S.UserInfosTitle>
              <S.UserInfosContent>{props.selectedUser.reason}</S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>처리</S.UserInfosTitle>
              <S.UserInfosContent
                style={{
                  border: "1px solid gray",
                  width: "150px",
                  height: "50px",
                  borderRadius: "6px",
                  alignItems: "center"
                }}
              >
                정지 6개월
              </S.UserInfosContent>
            </S.UserItem>
          </S.UserInfoDetailBlock>
          <S.UserInfoDetailBtnContainer>
            <S.Btn>확인</S.Btn>
          </S.UserInfoDetailBtnContainer>
        </S.UserInfoDetailContainer>
      ) : null}
      <S.WrapperContainer active={props.isUserInfoClicked}>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>신고 내역</S.Title>
            <S.UserInfoContainer>
              <S.UserInfoTitleBlock>
                <S.RequestNum>요청 번호</S.RequestNum>
                <S.RequestDate>요청 날짜</S.RequestDate>
                <S.ContentKind>컨턴츠 종류</S.ContentKind>
                <S.Kind>종류</S.Kind>
                <S.Reason>사유</S.Reason>
                <S.State>상태</S.State>
              </S.UserInfoTitleBlock>
              <S.UserInfoBlock>
                {props.reportInfos.map((infos, index) => (
                  <S.UserInfoItems key={infos.id}>
                    <S.UserInfoItem>
                      <S.RequestNum>{infos.id}</S.RequestNum>
                      <S.RequestDate>{infos.reportDate}</S.RequestDate>
                      <S.ContentKindNameBlock>
                        <S.ContentKindName>게시글</S.ContentKindName>
                      </S.ContentKindNameBlock>
                      <S.Kind>{infos.reportType}</S.Kind>
                      <S.Reason>{infos.reason}</S.Reason>
                      <S.State>
                        {infos.status === "PROCESSING" ? "진행중" : "완료"}
                      </S.State>
                    </S.UserInfoItem>
                    <S.ChangeBtnBlock>
                      <S.ChangeBtn onClick={(id) => props.openUserInfo(infos.id)}>
                        처리
                      </S.ChangeBtn>
                    </S.ChangeBtnBlock>
                  </S.UserInfoItems>
                ))}
              </S.UserInfoBlock>
              <S.PageBlock>
                <S.PageItem>
                  <S.Page>1</S.Page>
                  <S.Page>2</S.Page>
                  <S.Page>3</S.Page>
                  <S.Page>4</S.Page>
                </S.PageItem>
              </S.PageBlock>
            </S.UserInfoContainer>
          </S.ContentsBlock>
        </S.ContentsContainer>
      </S.WrapperContainer>
    </>
  );
}
