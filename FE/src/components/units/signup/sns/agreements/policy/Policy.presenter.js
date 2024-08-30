import * as S from "./Policy.styles";
import Image from "next/image";

export default function PolicyUI(props) {
  return (
    <>
      {props.isPolicyModalOpen && (
        <S.PolicyOverlay>
          <S.WrapperHeader>
            <S.Header>
              <S.LeftArrowTitleContainer>
                <Image
                  src="/images/header/arrow_left_icon.svg"
                  alt="arrow_left_icon"
                  width={15}
                  height={25}
                  onClick={props.closePolicyModal}
                />
                <S.Title>약관 및 정책</S.Title>
              </S.LeftArrowTitleContainer>
            </S.Header>
          </S.WrapperHeader>
          <S.WrapperPolicy>
            <S.PolicyMenuContainer>
              <S.TermsOfServiceMenu
                isSelected={props.isTermsOfService}
                onClick={() => props.setIsTermsOfService(true)}
              >
                이용약관
              </S.TermsOfServiceMenu>
              <S.PrivacyPolicyMenu
                isSelected={!props.isTermsOfService}
                onClick={() => props.setIsTermsOfService(false)}
              >
                개인정보 수집 및 이용
              </S.PrivacyPolicyMenu>
            </S.PolicyMenuContainer>
            {props.isTermsOfService ? (
              <S.PolicyContainer>
                <S.PolicyText>포포(ForPaw) 서비스 이용약관</S.PolicyText>
                {props.termsData.terms.map((term) => (
                  <S.PolicyBlock key={term.title}>
                    <S.PolicyTitle>{term.title}</S.PolicyTitle>
                    {Array.isArray(term.contents) ? (
                      <S.PolicyOrderedList>
                        {term.contents.map((contentItem) => (
                          <div key={contentItem}>
                            {typeof contentItem === "object" &&
                            contentItem !== null ? (
                              <>
                                <S.PolicyListContent>
                                  {contentItem.text}
                                </S.PolicyListContent>
                                <S.PolicyUnorderedList>
                                  {contentItem.subContents.map(
                                    (subContent, j) => (
                                      <S.PolicyListContent
                                        key={subContent}
                                        style={{ listStyleType: "disc" }}
                                      >
                                        {subContent}
                                      </S.PolicyListContent>
                                    )
                                  )}
                                </S.PolicyUnorderedList>
                              </>
                            ) : (
                              <S.PolicyListContent>
                                {contentItem}
                              </S.PolicyListContent>
                            )}
                          </div>
                        ))}
                      </S.PolicyOrderedList>
                    ) : (
                      <S.PolicyContent>{term.content}</S.PolicyContent>
                    )}
                  </S.PolicyBlock>
                ))}
                <S.PolicyText>
                  -본 약관은 2024년 9월 1일부터 적용됩니다.
                </S.PolicyText>
              </S.PolicyContainer>
            ) : (
              <S.PolicyContainer>
                <S.PolicyText>포포(ForPaw) 개인정보 처리방침</S.PolicyText>
                <S.PolicyTitle>
                  [회원가입 시 수집하는 필수 항목 고지]
                </S.PolicyTitle>
                <S.PrivacyTableTitleBlock>
                  <S.PrivacyTableTitle>목적</S.PrivacyTableTitle>
                  <S.PrivacyTableTitle>항목</S.PrivacyTableTitle>
                  <S.PrivacyTableTitle>보유기간</S.PrivacyTableTitle>
                </S.PrivacyTableTitleBlock>
                <S.PrivacyTableContentBlock>
                  <S.PrivacyTableContent>
                    이용사 식별 및
                    <br /> 회원관리,
                    <br /> 정보 연동
                  </S.PrivacyTableContent>
                  <S.PrivacyTableContent>
                    이름, 이메일(ID),
                    <br /> 출생연도, 성별,
                    <br /> 활동지역
                  </S.PrivacyTableContent>
                  <S.PrivacyTableContent>
                    회원 탈퇴 시 까지
                  </S.PrivacyTableContent>
                </S.PrivacyTableContentBlock>
                {props.privacyData.privacy.map((privacy) => (
                  <S.PolicyBlock key={privacy.title}>
                    <S.PolicyTitle>{privacy.title}</S.PolicyTitle>
                    {Array.isArray(privacy.contents) ? (
                      <>
                        {privacy.contents.map((contentItem) => (
                          <div key={contentItem}>
                            {typeof contentItem === "object" &&
                            contentItem !== null ? (
                              <>
                                {contentItem.text && (
                                  <S.PolicyContent>
                                    {contentItem.text}
                                  </S.PolicyContent>
                                )}
                                {contentItem.orderedContents && (
                                  <S.PolicyOrderedList>
                                    {contentItem.orderedContents.map(
                                      (subContent, j) => (
                                        <S.PolicyListContent key={subContent}>
                                          {subContent}
                                        </S.PolicyListContent>
                                      )
                                    )}
                                  </S.PolicyOrderedList>
                                )}
                                {contentItem.unorderedContents && (
                                  <S.PolicyUnorderedList>
                                    {contentItem.unorderedContents.map(
                                      (subContent, j) => (
                                        <S.PolicyListContent key={subContent}>
                                          {subContent}
                                        </S.PolicyListContent>
                                      )
                                    )}
                                  </S.PolicyUnorderedList>
                                )}
                              </>
                            ) : (
                              <S.PolicyContent>{contentItem}</S.PolicyContent>
                            )}
                          </div>
                        ))}
                      </>
                    ) : (
                      <S.PolicyContent>{privacy.content}</S.PolicyContent>
                    )}
                  </S.PolicyBlock>
                ))}
                <S.PolicyText>
                  - 본 개인정보 처리방침은 2024년 9월 1일부터 적용됩니다.
                </S.PolicyText>
              </S.PolicyContainer>
            )}
          </S.WrapperPolicy>
        </S.PolicyOverlay>
      )}
    </>
  );
}
