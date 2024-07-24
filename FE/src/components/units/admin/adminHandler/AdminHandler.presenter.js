import * as S from "./AdminHandler.styles"
import Image from "next/image";

export default function AdminHandlerUI(props) {
  return (
    <>
      <S.MenuContainer>
        <S.MenuBlock>
          <S.MenuItem
            onClick={props.navigateTo(props.paths.dashboard)}
            active={props.isActive(props.paths.dashboard)}
          >
            <Image
              src="/images/admin/dashboard.svg"
              alt="dashboard_Icon"
              width={31}
              height={23}
            />
            <S.MenuTitle style={{
              paddingTop: "0.488vh",
              paddingLeft: "0.486vw"
            }}>
              대시보드
            </S.MenuTitle>
          </S.MenuItem>
          <S.MenuItem
            onClick={props.navigateTo(props.paths.member_management)}
            active={props.isActive(props.paths.member_management)}
          >
            <Image
              src="/images/admin/members.svg"
              alt="members"
              width={31}
              height={23}
            />
            <S.MenuTitle>구성원 관리</S.MenuTitle>
          </S.MenuItem>
          <S.MenuItem
            onClick={props.navigateTo(props.paths.adopt_request)}
            active={props.isActive(props.paths.adopt_request)}
          >
            <Image
              src="/images/admin/folder.svg"
              alt="members"
              width={31}
              height={23}
            />
            <S.MenuTitle>입양 요청</S.MenuTitle>
          </S.MenuItem>
          <S.MenuItem
            onClick={props.navigateTo(props.paths.inquiries)}
            active={props.isActive(props.paths.inquiries)}
          >
            <Image
              src="/images/admin/folder.svg"
              alt="members"
              width={31}
              height={23}
            />
            <S.MenuTitle>문의 내역</S.MenuTitle>
          </S.MenuItem>
          <S.MenuItem
            onClick={props.navigateTo(props.paths.reports)}
            active={props.isActive(props.paths.reports)}
          >
            <Image
              src="/images/admin/folder.svg"
              alt="members"
              width={31}
              height={23}
            />
            <S.MenuTitle>신고 내역</S.MenuTitle>
          </S.MenuItem>
        </S.MenuBlock>
      </S.MenuContainer>
    </>
  )
}