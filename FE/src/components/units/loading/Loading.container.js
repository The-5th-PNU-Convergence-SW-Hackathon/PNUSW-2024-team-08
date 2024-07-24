import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingUI from "./Loading.presenter";

export default function Loading() {
  const router = useRouter();
  //1.5초뒤 자동으로 페이지 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/intro");
    }, 1500);
    //페이지 이동 후 타이며 초기화
    return () => clearTimeout(timer);
  }, []);

  const [blurred, setBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurred(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingUI blurred={blurred} />
    </>
  );
}
