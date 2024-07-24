import LoginUI from "./Login.presenter";
import { useLoginCheck } from "./hooks/useLoginCheck";
import { useNavigate } from "../../commons/hooks/useNavigate";
import { useEmailPasswordCheck } from "./hooks/useEmailPasswordCheck";

export default function Login() {
  const { navigateTo } = useNavigate();

  const { email, password, isValid, handleEmailChange, handlePasswordChange } =
    useEmailPasswordCheck();

  const { verifyLogin, browseAsGeust } = useLoginCheck(email, password);

  return (
    <>
      <LoginUI
        navigateTo={navigateTo}
        email={email}
        isValid={isValid}
        handleEmailChange={handleEmailChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        verifyLogin={() => verifyLogin(email, password)}
        browseAsGeust={browseAsGeust}
      />
    </>
  );
}
