import { useLoginCheck } from "./hooks/useLoginCheck";
import SignupCompleteUI from "./SignupComplete.presenter";

export default function SignupComplete() {
  const { verifyLogin } = useLoginCheck();

  return (
    <>
      <SignupCompleteUI verifyLogin={verifyLogin} />
    </>
  );
}
