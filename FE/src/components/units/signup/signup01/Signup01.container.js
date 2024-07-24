import SignUpUI01 from "./Signup01.presenter";
import { useUserName } from "./hooks/useUserName";

export default function SignUp01() {
  const { name, handleNameValueChange, navigateTo } = useUserName();

  return (
    <>
      <SignUpUI01
        navigateTo={navigateTo}
        name={name}
        handleNameValueChange={handleNameValueChange}
      />
    </>
  );
}
