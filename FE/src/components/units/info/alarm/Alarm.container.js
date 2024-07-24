import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import AlarmUI from "./Alarm.presenter";

export default function Alarm() {
  const { navigateBack } = useNavigate();

  return <AlarmUI navigateBack={navigateBack} />;
}
