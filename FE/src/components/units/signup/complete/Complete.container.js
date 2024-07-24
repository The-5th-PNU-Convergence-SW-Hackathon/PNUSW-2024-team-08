import { useRouter } from "next/router";
import SignUpCompleteUI from "./Complete.presenter";

export default function SignUpComplete() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  return (
    <>
      <SignUpCompleteUI
        navigateTo={navigateTo}
      />
    </>
  )
}