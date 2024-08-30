import InquireUI from "./Inquire.presenter";
import { useNavigate } from "../../../../../../src/components/commons/hooks/useNavigate";
import { useAddressSearch } from "./hooks/useAddressSearch";
import { useNamePhoneInput } from "./hooks/useNamePhoneInput";

export default function Inquire({ isSSRLoggedIn, petDetailData }) {
  console.log("Inquire isSSRLoggedIn: ", isSSRLoggedIn);
  console.log("petDetailData: ", petDetailData);

  const { name, phone, handleNameChange, handlePhoneChange } =
    useNamePhoneInput();

  const {
    isAddressModalOpen,
    openAddressModal,
    closeAddressModal,
    selectedAddress,
    postalCode,
    handleComplete,
  } = useAddressSearch();

  const { navigateBack } = useNavigate();

  return (
    <InquireUI
      name={name}
      phone={phone}
      handleNameChange={handleNameChange}
      handlePhoneChange={handlePhoneChange}
      isAddressModalOpen={isAddressModalOpen}
      openAddressModal={openAddressModal}
      closeAddressModal={closeAddressModal}
      selectedAddress={selectedAddress}
      postalCode={postalCode}
      handleComplete={handleComplete}
      navigateBack={navigateBack}
      petDetailData={petDetailData}
    />
  );
}
