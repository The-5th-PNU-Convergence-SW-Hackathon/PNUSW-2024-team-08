import Cookies from "js-cookie";

export const requestLoginToken = async (email, password) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 쿠키를 포함하여 요청

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to login request, accessToken:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch login request, accessToken:", error);
    return null;
  }
};
