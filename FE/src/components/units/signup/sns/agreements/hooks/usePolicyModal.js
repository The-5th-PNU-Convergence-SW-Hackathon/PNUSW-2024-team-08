import { useState } from "react";

export function usePolicyModal() {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isTermsOfService, setIsTermsOfService] = useState(true);

  const openPolicyModal = (state) => {
    setIsPolicyModalOpen(true);
    setIsTermsOfService(state);
  };

  const closePolicyModal = () => {
    setIsPolicyModalOpen(false);
  };

  return {
    isTermsOfService,
    setIsTermsOfService,
    isPolicyModalOpen,
    openPolicyModal,
    closePolicyModal,
  };
}
