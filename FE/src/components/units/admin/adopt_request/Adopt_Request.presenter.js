import * as S from "./Adopt_Request.styles";
import Image from "next/image";
import AdminHandler from "../adminHandler/AdminHandler.container";

export default function AdoptRequestUI(props) {
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
            요청번호 - <S.UserInfo>{props.selectedUser.applyId}</S.UserInfo>
          </S.BigTitle>
          <S.UserInfoDetailBlock>
            <S.UserItem>
              <S.UserInfosTitle>지원자 이름</S.UserInfosTitle>
              <S.UserInfosContent>{props.selectedUser.userName}</S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>연락처</S.UserInfosTitle>
              <S.UserInfosContent>{props.selectedUser.tel}</S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>거주지</S.UserInfosTitle>
              <S.UserInfosContent>{props.selectedUser.residence}</S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>연결 보호소</S.UserInfosTitle>
              <S.UserInfosContent>{props.selectedUser.careName}</S.UserInfosContent>
            </S.UserItem>
            <S.UserItem>
              <S.UserInfosTitle>보호소 연락처</S.UserInfosTitle>
              <S.UserInfosContent>{props.selectedUser.careTel}</S.UserInfosContent>
            </S.UserItem>
          </S.UserInfoDetailBlock>
          <S.UserInfoDetailBtnContainer>
            <S.UserInfoDetailBtnBlock>
              <S.Btn>완료하기</S.Btn>
              <S.Btn>반려하기</S.Btn>
            </S.UserInfoDetailBtnBlock>
          </S.UserInfoDetailBtnContainer>
        </S.UserInfoDetailContainer>
      ) : null}
      <S.WrapperContainer active={props.isUserInfoClicked}>
        <AdminHandler />
        <S.ContentsContainer>
          <S.ContentsBlock>
            <S.Title>입양 요청</S.Title>
            <S.UserInfoContainer>
              <S.UserInfoTitleBlock>
                <S.RequestNum>요청 번호</S.RequestNum>
                <S.RequestDate>요청 날짜</S.RequestDate>
                <S.AnimaiId>동물 ID</S.AnimaiId>
                <S.Breed>품종</S.Breed>
                <S.Sex>성별</S.Sex>
                <S.Age>나이</S.Age>
                <S.ApplicantName>지원자 이름</S.ApplicantName>
                <S.State>상태</S.State>
              </S.UserInfoTitleBlock>
              <S.UserInfoBlock>
                {props.requestInfos.map((infos, index) => (
                  <S.UserInfoItems key={index + 1}>
                    <S.UserInfoItem>
                      <S.RequestNum>{infos.applyId}</S.RequestNum>
                      <S.RequestDate>{infos.applyDate}</S.RequestDate>
                      <S.AnimaiId>{infos.animalId}</S.AnimaiId>
                      <S.Breed>{infos.kind}</S.Breed>
                      <S.Sex>{infos.gender}</S.Sex>
                      <S.Age>{infos.age}</S.Age>
                      <S.ApplicantName>{infos.userName}</S.ApplicantName>
                      <S.State>
                        {infos.status === "PROCESSING" ? "진행중" : "완료"}
                      </S.State>
                    </S.UserInfoItem>
                    <S.ChangeBtnBlock>
                      <S.ChangeBtn onClick={() => props.openUserInfo(infos.applyId)}>
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
