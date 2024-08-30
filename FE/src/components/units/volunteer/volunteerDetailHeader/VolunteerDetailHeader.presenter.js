import * as S from "./VolunteerDetailHeader.styles";
import Image from "next/image";

export default function VolunteerDetailHeaderUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.routerBack}
            />
            <S.Title>{props.title}</S.Title>
          </S.LeftArrowTitleContainer>
          {props.canModify !== false && (
            <S.MenuContainer
              ref={props.wrapperRef}
              onClick={props.handleMenuClick}
            >
              <Image
                src="/images/header/menu_icon.svg"
                alt="menu_icon"
                width={44}
                height={44}
              />
              <S.MenuBlock active={props.isMenuClicked}>
                {props.userRole === "CREATOR" ? (
                  props.pathname === "/volunteer/[id]" ? (
                    <>
                      <S.Menu
                        onClick={
                          props.canModify
                            ? () => props.handleRequireModal(props.editUrl)
                            : null
                        }
                      >
                        정보 수정
                      </S.Menu>
                      <S.Menu
                        onClick={
                          props.canModify
                            ? () => props.handleRequireModal(props.memberUrl)
                            : null
                        }
                      >
                        회원 관리
                      </S.Menu>
                      <S.Menu
                        onClick={
                          props.canModify
                            ? () => props.handleRequireModal(props.noticeUrl)
                            : null
                        }
                      >
                        공지사항 관리
                      </S.Menu>
                      <S.Menu
                        onClick={
                          props.canModify
                            ? () => props.handleRequireModal(props.meetingUrl)
                            : null
                        }
                      >
                        정기모임 관리
                      </S.Menu>
                    </>
                  ) : (
                    <>
                      {props.pathname !== "/volunteer/[id]/edit" && (
                        <S.Menu
                          onClick={
                            props.canModify
                              ? () => props.handleRequireModal(props.editUrl)
                              : null
                          }
                        >
                          정보수정
                        </S.Menu>
                      )}
                      <S.Report
                        onClick={
                          props.canModify
                            ? props.deleteFunction  // 각 경로별 deleteFunction 사용
                            : null
                        }
                      >
                        {props.pathname === "/volunteer/[id]/edit"
                          ? "모임 해체하기" :
                          props.pathname === "/volunteer/[id]/notices/[noticeID]" || props.pathname === "/volunteer/[id]/regular_meetings/[meetingID]"
                            ? "삭제하기" : null
                        }
                      </S.Report>
                    </>
                  )
                ) : (
                  <>
                    <S.Menu>URL복사하기</S.Menu>
                    {props.pathname === `/volunteer/[id]/notices/[noticeID]` && (
                      <S.Report onClick={() => props.handleClickReport()}>신고하기</S.Report>
                    )}
                    {props.pathname === `/volunteer/[id]` && props.userRole === "USER" && (
                      <S.Withdraw
                        onClick={
                          props.canModify
                            ? props.withdrawFunction
                            : null
                        }>
                        회원탈퇴
                      </S.Withdraw>
                    )}
                  </>
                )}
              </S.MenuBlock>
            </S.MenuContainer>
          )}
        </S.Header>
      </S.WrapperHeader>
    </>
  );
}
