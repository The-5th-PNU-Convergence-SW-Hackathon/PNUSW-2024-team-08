import AgreementsUI from "./Agreements.presenter";
import { usePolicyModal } from "./hooks/usePolicyModal";
import PolicyUI from "./policy/Policy.presenter";
import termsData from "../../../../../src/components/commons/documents/terms.json";
import privacyData from "../../../../../src/components/commons/documents/privacy.json";
import { useAgreementState } from "./hooks/useAgreementState";

export default function Agreements() {
  const {
    isAllAgreed,
    handleAllAgreedChange,
    isTermsAgreed,
    handleTermsAgreedChange,
    isPrivacyAgreed,
    handlePrivacyAgreedChange,
    isMarketingAgreed,
    handleMarketingAgreedChange,
    handledNextButton,
  } = useAgreementState();

  const {
    isTermsOfService,
    setIsTermsOfService,
    isPolicyModalOpen,
    openPolicyModal,
    closePolicyModal,
  } = usePolicyModal();

  return (
    <>
      <AgreementsUI
        isAllAgreed={isAllAgreed}
        handleAllAgreedChange={handleAllAgreedChange}
        isTermsAgreed={isTermsAgreed}
        handleTermsAgreedChange={handleTermsAgreedChange}
        isPrivacyAgreed={isPrivacyAgreed}
        handlePrivacyAgreedChange={handlePrivacyAgreedChange}
        isMarketingAgreed={isMarketingAgreed}
        handleMarketingAgreedChange={handleMarketingAgreedChange}
        handledNextButton={handledNextButton}
        openPolicyModal={openPolicyModal}
      />
      <PolicyUI
        isTermsOfService={isTermsOfService}
        setIsTermsOfService={setIsTermsOfService}
        isPolicyModalOpen={isPolicyModalOpen}
        openPolicyModal={openPolicyModal}
        closePolicyModal={closePolicyModal}
        termsData={termsData}
        privacyData={privacyData}
      />
    </>
  );
}
