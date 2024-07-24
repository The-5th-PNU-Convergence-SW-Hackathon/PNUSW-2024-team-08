import Headers from "../../../commons/headers/Headers.container";
import DogsUI from "./Dogs.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";

export default function Dogs() {
  const { navigateBack } = useNavigate();

  return (
    <>
      <Headers />
      <DogsUI navigateBack={navigateBack} />
      <Navigation />
    </>
  );
}
