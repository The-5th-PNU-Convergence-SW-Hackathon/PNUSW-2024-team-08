import Cookies from "js-cookie";

export const submitEditMeeting = async (id, meetingID, editInfo) => {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/meetings/${meetingID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(editInfo)
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