export const submitNewPassword = async (code, newPassword) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/accounts/recovery/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        newPassword: newPassword,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("password data: ", data);
    return data;
  } catch (error) {
    console.log("사용 불가 패스워드", error);
    throw error;
  }
};
