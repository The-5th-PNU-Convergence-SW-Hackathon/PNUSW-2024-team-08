import * as S from "./Inquiries.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";

export default function InquiriesUI(props) {
  return (
    <>
      {props.isUserInfoClicked && props.selectedUser? (
        <S.UserInfoDetailContainer>
          <S.CloseBtnBlock>
            <S.CloseBtn onClick={props.closeUserInfo}>
              <Image src="/images/admin/x.svg" alt="x" width={24} height={24} />
            </S.CloseBtn>
          </S.CloseBtnBlock>
          <S.BigTitle>
            요청번호 - <S.UserInfo>{props.selectedUser.inquiryId}</S.UserInfo>
          </S.BigTitle>
          <S.UserInfoDetailBlock>
            <S.UserItem>
              <S.UserInfosTitle>제목</S.UserInfosTitle>
              <S.UserInfosContent>
                최근에 입양을 신청했는데 궁금한 게 있습니다.
              </S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>닉네임</S.UserInfosTitle>
              <S.UserInfosContent>호얘이</S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>문의 내용</S.UserInfosTitle>
            </S.UserItem>
            <S.InquiryContent contentEditable="true"></S.InquiryContent>
            <S.UserItem>
              <S.UserInfosTitle>답변 작성</S.UserInfosTitle>
            </S.UserItem>
            <S.InquiryContent contentEditable="true"></S.InquiryContent>
          </S.UserInfoDetailBlock>
          <S.UserInfoDetailBtnContainer>
            <S.Btn>완료</S.Btn>
          </S.UserInfoDetailBtnContainer>
        </S.UserInfoDetailContainer>
      ) : null}
      <S.WrapperContainer active={props.isUserInfoClicked}>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>문의 내역</S.Title>
            <S.UserInfoContainer>
              <S.UserInfoTitleBlock>
                <S.RequestNum>요청 번호</S.RequestNum>
                <S.RequestDate>요청 날짜</S.RequestDate>
                <S.Nickname>닉네임</S.Nickname>
                <S.Kind>종류</S.Kind>
                <S.InquiriesTitle>제목</S.InquiriesTitle>
                <S.State>상태</S.State>
              </S.UserInfoTitleBlock>
              <S.UserInfoBlock>
                {props.inquiriesInfos.map((infos, index) => (
                  <S.UserInfoItems key={infos.id}>
                    <S.UserInfoItem>
                      <S.RequestNum>{infos.inquiryId}</S.RequestNum>
                      <S.RequestDate>{infos.inquiryDate}</S.RequestDate>
                      <S.Nickname>{infos.userNickName}</S.Nickname>
                      <S.Kind>{infos.type}</S.Kind>
                      <S.InquiriesTitle>{infos.subject}</S.InquiriesTitle>
                      <S.State>
                        {infos.status === "PROCESSING" ? "진행중" : "완료"}
                      </S.State>
                    </S.UserInfoItem>
                    <S.ChangeBtnBlock>
                      <S.ChangeBtn onClick={() => props.openUserInfo(infos.inquiryId)}>
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
