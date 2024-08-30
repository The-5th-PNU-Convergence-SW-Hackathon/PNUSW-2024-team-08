import * as S from "./Member.styles";
import Image from "next/image";
import { useFormatDate } from "../hooks/useFormat";

export default function MemberUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.Container>
          <S.SearchAndInviteContainer active={props.userRole === "USER"}>
            <S.SearchContainer>
              <S.Search
                type="text"
                placeholder="검색어를 입력해주세요"
                value={props.search}
                onChange={props.handleSearch}
              />
              <S.SearchImageContainer>
                <Image
                  src="/images/info/search_icon_info.svg"
                  alt="search_icon"
                  width={31.36}
                  height={31.36}
                />
              </S.SearchImageContainer>
            </S.SearchContainer>
            <S.InviteContainer>
              <S.InviteImg>
                <Image
                  src="/images/signup/add_profile.svg"
                  alt="add_meeting"
                  width={25}
                  height={25}
                />
              </S.InviteImg>
              <S.InviteBlock>
                <S.InviteTitle>멤버 초대하기</S.InviteTitle>
                <S.InviteExplain>아직 가입하지 않은 친구를 초대하세요.</S.InviteExplain>
              </S.InviteBlock>
            </S.InviteContainer>
          </S.SearchAndInviteContainer>
          <S.MemberInfo>
            모인멤버 <span style={{ color: "#FF6636" }}>{props.memberInfos.participantCnt}명</span> ({props.memberInfos.participantCnt}/{props.memberInfos.maxNum})
          </S.MemberInfo>
          <S.MemberListContainer>
            {props.memberInfos.members.map((infos) => (
              <S.MemberBlock
                key={infos.id}
                active={props.clickedMemberIds.includes(infos.id) && infos.role !== "CREATOR"}
                adjustedPosition={infos.adjustedPosition}
                zIndex={infos.zIndex}
                animationState={infos.animationState}
              >
                <S.MemberBox
                  onClick={() => props.handleMemberClick(infos.id)}
                >
                  <S.MemberIcon>
                    <S.MemberImg
                      src={infos.profileURL}
                      alt="user_icon"
                    />
                  </S.MemberIcon>
                  <S.MemberName>{infos.nickName}</S.MemberName>
                  <S.StatusBlock>
                    <S.Status>
                      {useFormatDate(infos.joinDate, "yy.mm.dd")} 가입
                      | {" "}
                      {infos.role === "CREATOR" ?
                        "방장" :
                        infos.role === "ADMIN" ?
                          "매니저" : "회원"}
                    </S.Status>
                  </S.StatusBlock>
                </S.MemberBox>
                {props.clickedMemberIds.includes(infos.id) && (
                  <S.BtnContainer active={props.clickedMemberIds.includes(infos.id)}>
                    <S.ExpelBtn onClick={() => props.handleClickExpel(infos.id)}>내보내기</S.ExpelBtn>
                    <S.RoleChangeBtn onClick={() => props.handleClickStatus(infos.id, infos.role)}>
                      {infos.role === "ADMIN" ? "매니저 해제" : "매니저 등록"}
                    </S.RoleChangeBtn>
                  </S.BtnContainer>
                )}
              </S.MemberBlock>
            ))}
          </S.MemberListContainer>
        </S.Container>
      </S.WrapperContents>
    </>
  )
}