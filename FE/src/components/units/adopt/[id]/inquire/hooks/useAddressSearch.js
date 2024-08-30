import { useState } from "react";

export function useAddressSearch() {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const openAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleComplete = (data) => {
    let fullAddress = data.roadAddress;
    let extraAddress = "";

    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
      extraAddress += data.bname;
    }
    if (data.buildingName !== "" && data.apartment === "Y") {
      extraAddress +=
        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    if (extraAddress !== "") {
      fullAddress += ` (${extraAddress})`;
    }

    const postalCode = data.zonecode; // 우편번호

    setSelectedAddress(fullAddress);
    setPostalCode(postalCode); // 우편번호 상태 업데이트
    closeAddressModal(); // 모달 닫기
  };

  return {
    isAddressModalOpen,
    openAddressModal,
    closeAddressModal,
    selectedAddress,
    postalCode,
    handleComplete,
  };
}
