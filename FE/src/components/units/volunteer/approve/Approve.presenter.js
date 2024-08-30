import * as S from "./Approve.styles";
import Image from "next/image";
import { findProvinceKo } from "../../../../../src/components/commons/district/districtName";
import { useFormatDate } from "../hooks/useFormat";

export default function ApproveUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.Container>
          <S.ApproveInfo>
            승인 대기 <span style={{color: "#FF6636"}}>{props.userListData.length}명</span>
          </S.ApproveInfo>
          <S.ApproveListContainer>
            {props.userListData.map((infos, index) => (
              <S.ApproveBlock
                key={infos.id}
                active={props.clickedApproveIds.includes(infos.id)}
              >
                <S.ApproveBox onClick={() => props.handleApproveClick(infos.id)}>
                  <S.ApproveIcon>
                    <S.ApproveImg
                      src={infos.profileURL}
                      alt="user_icon"
                    />
                  </S.ApproveIcon>
                  <S.ApproveName>{infos.nickName}</S.ApproveName>
                  <S.StatusBlock>
                    <S.Status>
                      {useFormatDate(infos.applyDate, "yy.mm.dd")} 가입신청
                    </S.Status>
                  </S.StatusBlock>
                </S.ApproveBox>
                <S.ExpandedContent active={props.clickedApproveIds.includes(infos.id)}>
                  <S.Province>{findProvinceKo(infos.province)}</S.Province>
                  <S.GreetingContainer>
                    <S.Greeting>가입인사</S.Greeting>
                    <S.GreetingContent>
                      {infos.greeting}
                    </S.GreetingContent>
                  </S.GreetingContainer>
                  <S.BtnContainer>
                    <S.RejectBtn onClick={() => props.handleClickReject(props.id, infos.id)}>거절</S.RejectBtn>
                    <S.ApproveBtn onClick={() => props.handleClickApprove(props.id, infos.id)}>승인</S.ApproveBtn>
                  </S.BtnContainer>
                </S.ExpandedContent>
              </S.ApproveBlock>
            ))}
          </S.ApproveListContainer>
        </S.Container>
      </S.WrapperContents>
    </>
  )
}