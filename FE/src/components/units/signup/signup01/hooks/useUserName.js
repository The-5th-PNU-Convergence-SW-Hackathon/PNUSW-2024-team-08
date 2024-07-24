import { useState } from "react";
import { useRouter } from "next/router";

export const useUserName = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleNameValueChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  };

  const navigateTo = (path) => () => {
    if (name.length >= 2) {
      router.push(
        {
          pathname: path,
          query: {
            name: `${name}`, //이메일 값을 다음 페이지에 넘김
          },
        },
        `${path}` //url값에 path를 숨기기 위하여 넣는 값
      );
    }
  };

  return {
    name,
    handleNameValueChange,
    navigateTo,
  };
};
