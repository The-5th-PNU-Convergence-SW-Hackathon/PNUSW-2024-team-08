import SignupHeaderUI from "./SignupHeader.presenter";
import { useRouter } from "next/router";

export default function SignupHeader() {
  const router = useRouter();

  const PrevPage = () => {
    router.back();
  }
  return(
    <>
      <SignupHeaderUI PrevPage={PrevPage}/>
    </>
  )
}