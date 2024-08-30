import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import LicenseUI from "./License.presenter";

export default function License() {
  const { navigateTo } = useNavigate();

  return <LicenseUI navigateTo={navigateTo} />;
}
