import * as S from "./ReportModal.styles";
import Image from "next/image";

export default function ReportModalUI(props) {
  return (
    <S.ModalContainer onClick={props.handleOutsideClick}>
      <S.ModalContent>
        <S.ReportTitleContainer>
          <S.CancleReport onClick={props.handleClose}>
            <Image
              src="/images/volunteer/Xicon.svg"
              alt="cancel"
              width={24}
              height={24}
            />
          </S.CancleReport>
          <S.ReportTitle>신고하기</S.ReportTitle>
          <S.Expalin>문재를 가장 잘 설묭하는 사유를 선택해주세요.</S.Expalin>
        </S.ReportTitleContainer>
        <S.ReportBlock>
          {props.reportOptions.map((option) => (
            <S.Report key={option.value}>
              <S.ReportLabel>
                <S.ReportInput
                  type="checkbox"
                  id={option.value}
                  name="report"
                  value={option.value}
                  checked={props.selectedReportType === option.value}
                  onChange={() =>
                    props.handleReportSelect(option.value, option.label)
                  }
                />
                {option.label}
              </S.ReportLabel>
            </S.Report>
          ))}
        </S.ReportBlock>
        <S.ReportBtn
          active={props.selectedReportType}
          onClick={() => props.handleRequest(props.submit)}
        >
          신고하기
        </S.ReportBtn>
      </S.ModalContent>
    </S.ModalContainer>
  );
}
