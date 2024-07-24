import Cookies from "js-cookie";

export const checkPassword = async (currentPassword) => {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Checking current password`);
    const response = await fetch(`${baseURL}/accounts/password/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ password: currentPassword }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to check current password:", data);
    return data.result.isMatching; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error("Error checking current password:", error);
    throw error;
  }
};

export const updateNewPassword = async (passwords) => {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Updating new password`);
    const response = await fetch(`${baseURL}/accounts/password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(passwords),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to update new password:", data);
    return data.success; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error("Error updating new password:", error);
    throw error;
  }
};
