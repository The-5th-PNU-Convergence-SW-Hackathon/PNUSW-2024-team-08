import Cookies from "js-cookie";

export async function submitMeeting(id, meetingData) {
  try {
    console.log(id, meetingData);
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/meetings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(meetingData),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Response to meeting data:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to submit Meeting:`, error);
    return null;
  }
}