import Headers from "../../../commons/headers/Headers.container";
import CatsUI from "./Cats.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";

export default function Cats() {
  const { navigateBack } = useNavigate();

  return (
    <>
      <Headers />
      <CatsUI navigateBack={navigateBack} />
      <Navigation />
    </>
  );
}
