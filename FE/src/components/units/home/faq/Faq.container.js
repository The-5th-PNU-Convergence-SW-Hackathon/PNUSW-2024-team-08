import FaqUI from "./Faq.presenter";
import Headers from "../../../commons/headers/Headers.container";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";

export default function Faq() {
  const { navigateBack } = useNavigate();

  return (
    <>
      <Headers />
      <FaqUI navigateBack={navigateBack} />
    </>
  );
}
