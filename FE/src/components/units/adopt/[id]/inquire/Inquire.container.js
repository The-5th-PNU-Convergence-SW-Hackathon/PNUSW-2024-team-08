import InquireUI from "./Inquire.presenter";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";

export default function Inquire({ isSSRLoggedIn }) {
  console.log("Inquire isSSRLoggedIn: ", isSSRLoggedIn);

  const { navigateBack } = useNavigate();

  return <InquireUI navigateBack={navigateBack} />;
}
