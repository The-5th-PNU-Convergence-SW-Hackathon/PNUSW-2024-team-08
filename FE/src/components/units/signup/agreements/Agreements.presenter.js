import * as S from "./Agreements.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
import Progress from "../component/Progress";
import Image from "next/image";

export default function AgreementsUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <SignupHeader />
        <S.ProgressBarBlock>
          <S.ProgressBar
            value={Progress({ startValue: 0, max: 20, interval: 10 })}
            max={20}
          />
        </S.ProgressBarBlock>
        <S.InfoContainer>
          <S.InfoTitleItem>
            회원가입 전<br />
            약관을 확인해주세요.
          </S.InfoTitleItem>
          <S.CheckboxContainer>
            <S.Checkbox type="checkbox" readOnly />
            <S.StyledCheckbox
              isChecked={props.isAllAgreed}
              onClick={() => props.handleAllAgreedChange(!props.isAllAgreed)}
            />
            <S.TotalLabel
              onClick={() => props.handleAllAgreedChange(!props.isAllAgreed)}
            >
              전체 동의
            </S.TotalLabel>
          </S.CheckboxContainer>
          <S.BorderLine></S.BorderLine>
          <S.CheckboxContainer>
            <S.Checkbox type="checkbox" readOnly />
            <S.StyledCheckbox
              isChecked={props.isTermsAgreed}
              onClick={props.handleTermsAgreedChange}
            />
            <S.Label onClick={props.handleTermsAgreedChange}>
              이용약관 동의(필수)
            </S.Label>
            <S.LabelArrow>
              <Image
                src="/images/signup/right_arrow.svg"
                alt="right_arrow"
                width={12}
                height={12}
                onClick={() => props.openPolicyModal(true)}
              />
            </S.LabelArrow>
          </S.CheckboxContainer>
          <S.CheckboxContainer>
            <S.Checkbox type="checkbox" readOnly />
            <S.StyledCheckbox
              isChecked={props.isPrivacyAgreed}
              onClick={props.handlePrivacyAgreedChange}
            />
            <S.Label onClick={props.handlePrivacyAgreedChange}>
              개인정보 수집 및 이용동의(필수)
            </S.Label>
            <S.LabelArrow>
              <Image
                src="/images/signup/right_arrow.svg"
                alt="right_arrow"
                width={12}
                height={12}
                onClick={() => props.openPolicyModal(false)}
              />
            </S.LabelArrow>
          </S.CheckboxContainer>
          <S.CheckboxContainer>
            <S.Checkbox type="checkbox" readOnly />
            <S.StyledCheckbox
              isChecked={props.isMarketingAgreed}
              onClick={props.handleMarketingAgreedChange}
            />
            <S.Label onClick={props.handleMarketingAgreedChange}>
              E-mail 및 SMS 광고성 정보 수신동의(선택)
            </S.Label>
            <S.SubLabel>다양한 이벤트 소식을 제공합니다.</S.SubLabel>
          </S.CheckboxContainer>
          <S.NextButtonItem
            type="submit"
            onClick={() => props.handledNextButton("/login/signup/01")}
          >
            다음
          </S.NextButtonItem>
        </S.InfoContainer>
      </S.WrapperContainer>
    </>
  );
}
