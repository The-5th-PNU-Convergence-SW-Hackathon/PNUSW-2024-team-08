import Cookies from "js-cookie";

export const sendNewVolunteerInfo = async (userInfo) => {
  console.log(userInfo);
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userInfo)
    });
    if (!response.ok) {
      throw new Error("Failed to send user info")
    }
    const data = await response.json();
    console.log("created volunteer data: ", data);
    return data;
  } catch (error) {
    console.error("Error sending user info:", error);
    throw error
  }
}