import Signup01UI from "./Signup01.presenter";
import { useUserName } from "./hooks/useUserName";
import { useUserType } from "./hooks/useUserType";

export default function Signup01() {
  const { name, handleNameChange, navigateTo } = useUserName();
  const {
    selectedUserType,
    handleUserTypeChange,
    isUserDropdownOpen,
    toggleDropdown,
    isUserFocused,
    isAgreed,
    handleAgreedChange,
    handledNextButton,
  } = useUserType(name);

  return (
    <>
      <Signup01UI
        navigateTo={navigateTo}
        name={name}
        handleNameChange={handleNameChange}
        selectedUserType={selectedUserType}
        handleUserTypeChange={handleUserTypeChange}
        isUserDropdownOpen={isUserDropdownOpen}
        toggleDropdown={toggleDropdown}
        isUserFocused={isUserFocused}
        isAgreed={isAgreed}
        handleAgreedChange={handleAgreedChange}
        handledNextButton={handledNextButton}
      />
    </>
  );
}
