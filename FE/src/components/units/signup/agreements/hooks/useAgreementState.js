import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export function useAgreementState() {
  const router = useRouter();
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);

  useEffect(() => {
    if (isTermsAgreed && isPrivacyAgreed && isMarketingAgreed) {
      setIsAllAgreed(true);
    } else {
      setIsAllAgreed(false);
    }
  }, [isTermsAgreed, isPrivacyAgreed, isMarketingAgreed]);

  const handleAllAgreedChange = (checked) => {
    setIsAllAgreed(checked);
    setIsTermsAgreed(checked);
    setIsPrivacyAgreed(checked);
    setIsMarketingAgreed(checked);
  };

  const handleTermsAgreedChange = () => {
    setIsTermsAgreed((prev) => !prev);
  };

  const handlePrivacyAgreedChange = () => {
    setIsPrivacyAgreed((prev) => !prev);
  };

  const handleMarketingAgreedChange = () => {
    setIsMarketingAgreed((prev) => !prev);
  };

  const handledNextButton = (path) => {
    if (!isTermsAgreed || !isPrivacyAgreed) return;

    sessionStorage.setItem("isMarketingAgreed", isMarketingAgreed);
    router.push(path);
  };

  return {
    isAllAgreed,
    handleAllAgreedChange,
    isTermsAgreed,
    handleTermsAgreedChange,
    isPrivacyAgreed,
    handlePrivacyAgreedChange,
    isMarketingAgreed,
    handleMarketingAgreedChange,
    handledNextButton,
  };
}
