import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import SupportUI from "./Support.presenter";

export default function Support() {
  const { navigateTo, navigateBack } = useNavigate();

  return <SupportUI navigateTo={navigateTo} navigateBack={navigateBack} />;
}
