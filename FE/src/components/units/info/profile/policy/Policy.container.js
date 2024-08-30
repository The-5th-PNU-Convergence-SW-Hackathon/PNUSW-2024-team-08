import { useState } from "react";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import PolicyUI from "./Policy.presenter";
import termsData from "../../../../../../src/components/commons/documents/terms.json";
import privacyData from "../../../../../../src/components/commons/documents/privacy.json";

export default function Policy() {
  const [isTermsOfService, setIsTermsOfService] = useState(true);
  console.log("termsData: ", termsData);
  const { navigateTo } = useNavigate();

  return (
    <PolicyUI
      isTermsOfService={isTermsOfService}
      setIsTermsOfService={setIsTermsOfService}
      termsData={termsData}
      privacyData={privacyData}
      navigateTo={navigateTo}
    />
  );
}
