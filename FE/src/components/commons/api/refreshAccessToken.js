// refreshAccessToken.js
const refreshAccessToken = async () => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/auth/access`, {
      method: "PATCH",
      credentials: "include", // 쿠키를 포함하여 요청
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}), // 필요시 추가 데이터 포함
    });

    console.log("Request URL:", `${baseURL}/auth/access`);
    console.log("Request headers:", {
      "Content-Type": "application/json",
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Response error data:", errorData);
      throw new Error(errorData.message || "Unknown error occurred");
    }

    const data = await response.json();
    console.log("Response data:", data);
    return data.result;
  } catch (error) {
    console.error("AccessToken 갱신 실패:", error.message);
    throw error;
  }
};

export default refreshAccessToken;
