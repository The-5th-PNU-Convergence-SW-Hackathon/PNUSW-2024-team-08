import IntroUI from "./Intro.presenter";
import { useNavigate } from "../../commons/hooks/useNavigate";

export default function Intro() {
  const { navigateTo } = useNavigate();

  return (
    <>
      <IntroUI navigateTo={navigateTo} />
    </>
  );
}
