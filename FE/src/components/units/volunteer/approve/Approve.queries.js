import Cookies from "js-cookie";

export async function fetchUserList(id) {
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/join`, {
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
    console.log("Fetch userList data: ", data.result);
    return data.result;
  } catch (error) {
    console.error("Fetching userList data failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function userJoinApprove(id, applicantId) {
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/join/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        applicantId:applicantId
      }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("user Join approve data: ", data.success);
    return data.success;
  } catch (error) {
    console.error("Fetching userList data failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function userJoinReject(id, applicantId) {
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    console.log(`
      id: ${id}
      applicantID: ${applicantId}
      accessToken: ${accessToken}
    `)

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/join/reject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        applicantId:applicantId
      }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetch userList data: ", data.success);
    return data.success;
  } catch (error) {
    console.error("Fetching userList data failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}