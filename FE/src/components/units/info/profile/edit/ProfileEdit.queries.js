import Cookies from "js-cookie";

export const checkNickNameDuplication = async (nickName) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Checking nickname duplication for nickname: ${nickName}`);
    const response = await fetch(`${baseURL}/accounts/check/nick`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickName: nickName }),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response to nickname duplication check:", data);
    return data.success; // 서버 응답 반환
  } catch (error) {
    console.error("Failed to check nickname duplication:", error);
    return null; // 에러 처리를 호출한 곳으로 전파
  }
};

export const updateUserInfo = async (userInfo) => {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Updating modified user profile`);
    const response = await fetch(`${baseURL}/accounts/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      throw new Error("Failed to update user info");
    }
    const data = await response.json();
    return data; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
};
