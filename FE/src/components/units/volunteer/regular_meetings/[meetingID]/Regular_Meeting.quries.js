import Cookies from "js-cookie";

export async function fetchRegularMeeting(groupId, meetingId, accessToken ) {
  try {
    console.log(groupId, meetingId);
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/groups/${groupId}/meetings/${meetingId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("meeting detail data", data);
    return data.result;
  } catch (error) {
    console.error("Fetching Meeting data failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function requestJoinMeeting(id, meetingID) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/meetings/${meetingID}/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to send user info")
    }
    const data = await response.json();
    console.log("Edit volunteer data: ", data);
    return data;
  } catch (error) {
    console.error("Error join meeting:", error);
    throw error
  }
}

export async function requestWithdrawMeeting(id, meetingID) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/meetings/${meetingID}/withdraw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to send user info")
    }
    const data = await response.json();
    console.log("Edit volunteer data: ", data);
    return data;
  } catch (error) {
    console.error("Error withdraw meeting:", error);
    throw error
  }
}
