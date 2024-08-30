import * as S from "./Signup01.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
import Progress from "../component/Progress";
import Image from "next/image";

export default function Signup01UI(props) {
  return (
    <>
      <S.WrapperContainer>
        <SignupHeader />
        <S.ProgressBarBlock>
          <S.ProgressBar
            value={Progress({ startValue: 20, max: 40, interval: 10 })}
            max={40}
          />
        </S.ProgressBarBlock>
        <S.InfoContainer>
          <S.InfoTitleItem>정보를 입력해주세요</S.InfoTitleItem>
          <S.InfoContentsBlock>
            <S.InfoTitleName>이름</S.InfoTitleName>
            <S.InfoNameItem
              type="text"
              placeholder="홍길동"
              value={props.name}
              onChange={props.handleNameChange}
            />
          </S.InfoContentsBlock>
          <S.InfoContentsBlock>
            <S.InfoTitleName>사용자 유형</S.InfoTitleName>
            <S.UserSelect
              isUserFocused={props.isUserFocused}
              onClick={props.toggleDropdown}
            >
              {props.selectedUserType === ""
                ? "유형을 선택하세요."
                : props.selectedUserType === "normal"
                ? "일반 사용자"
                : "보호소 관리자"}
            </S.UserSelect>
            <S.UserArrowBlock
              isUserFocused={props.isUserFocused}
              onClick={props.toggleDropdown}
            >
              <Image
                src="/images/info/select_arrow_icon.svg"
                alt="select_arrow_icon"
                width={22}
                height={12}
              />
            </S.UserArrowBlock>
            {props.isUserDropdownOpen && (
              <S.UserDropdown>
                <S.UserOption
                  onClick={() => props.handleUserTypeChange("normal")}
                >
                  일반 사용자
                </S.UserOption>
                <S.UserOption
                  onClick={() => props.handleUserTypeChange("shelter")}
                >
                  보호소 관리자
                </S.UserOption>
              </S.UserDropdown>
            )}
            {props.selectedUserType === "shelter" && (
              <>
                <S.ShelterUserDescriptionBlock>
                  <S.DescriptionItem>
                    <S.CustomBullet>•</S.CustomBullet>
                    관리자는 직접 보호소에 소속되어 있거나, 보호소의 일정을
                    조율할 수 있는 자격/권한이 있어야 합니다.
                  </S.DescriptionItem>
                  <S.DescriptionItem>
                    <S.CustomBullet>•</S.CustomBullet>
                    관리자는 보호소 자체 봉사활동 모임을 조직하고 관리합니다.
                  </S.DescriptionItem>
                  <S.DescriptionItem>
                    <S.CustomBullet>•</S.CustomBullet>
                    해당 자격이 허위로 발각될 경우, 통보 없이 제명될 수
                    있습니다.
                  </S.DescriptionItem>
                </S.ShelterUserDescriptionBlock>
                <S.CheckboxContainer>
                  <S.Checkbox type="checkbox" readOnly />
                  <S.StyledCheckbox
                    isChecked={props.isAgreed}
                    onClick={props.handleAgreedChange}
                  />
                  <S.Label onClick={props.handleAgreedChange}>
                    안내사항을 모두 확인하였으며, 이에 동의합니다.
                  </S.Label>
                </S.CheckboxContainer>
              </>
            )}
          </S.InfoContentsBlock>
          <S.NextButtonItem
            type="submit"
            onClick={() => props.handledNextButton("/login/signup/02")}
          >
            다음
          </S.NextButtonItem>
        </S.InfoContainer>
      </S.WrapperContainer>
    </>
  );
}
