import { updateNewPassword } from "../PasswordEdit.queries";

export const useUpdatePassword = (
  currentPassword,
  newPassword,
  confirmPassword,
  isCorrectPassword,
  isPasswordValid,
  isPasswordMatching
) => {
  const updatePasswords = async (e) => {
    e.preventDefault();
    if (isCorrectPassword && isPasswordValid && isPasswordMatching) {
      try {
        const result = await updateNewPassword({
          newPassword: newPassword,
          newPasswordConfirm: confirmPassword,
          curPassword: currentPassword,
        });
        console.log("result: ", result);
      } catch (error) {
        console.error("Error updating passwords]:", error);
      } finally {
      }
    }
  };

  return { updatePasswords };
};
