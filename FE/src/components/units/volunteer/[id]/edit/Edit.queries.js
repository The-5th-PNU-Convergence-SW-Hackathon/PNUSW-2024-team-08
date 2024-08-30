import Cookies from "js-cookie";

export const fetchVolunteerEditData = async (id, accessToken) => {
  try {
    console.log(id, accessToken);
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response volunteer Edit Info", data.result);
    return data.result;
  } catch (error) {
    console.error("Fetching volunteer Edit Info:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export const sendEditVolunteerUnfo = async (id, userInfo) => {
  console.log(userInfo);
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}`, {
      method: "PATCH",
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
    console.log("Edit volunteer data: ", data);
    return data;
  } catch (error) {
    console.error("Error sending user info:", error);
    throw error
  }
}