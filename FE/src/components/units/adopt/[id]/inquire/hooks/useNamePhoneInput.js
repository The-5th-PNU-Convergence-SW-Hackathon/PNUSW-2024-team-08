import { useState } from "react";

export const useNamePhoneInput = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // 이름 입력 핸들러
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // 전화번호 입력 핸들러
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 남김

    if (input.length <= 3) {
      setPhone(input);
    } else if (input.length <= 7) {
      setPhone(`${input.slice(0, 3)}-${input.slice(3, 7)}`);
    } else {
      setPhone(
        `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(7, 11)}`
      );
    }
  };

  return {
    name,
    phone,
    handleNameChange,
    handlePhoneChange,
  };
};
