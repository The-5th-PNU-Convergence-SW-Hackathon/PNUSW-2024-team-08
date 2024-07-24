import Cookies from "js-cookie";

export async function fetchVolunteerJoined(region, size, page) {
  try {
    // 쿠키에서 accessToken을 가져옴
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
    const response = await fetch(`${baseURL}/groups/my?region=${region}&size=${size}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      // credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to volunteer joined data with auth:", data);
    return data;
  } catch (error) {
    console.error("Fetching volunteerjoined failed:", error);
    return null;
  }
}