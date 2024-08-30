import Cookies from "js-cookie";

export async function fetchVolunteerDetailWithAuth(id, accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/detail`, {
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
    console.log("Response volunteer detail with auth", data.result);
    return data.result;
  } catch (error) {
    console.error("Fetching volunteer detail with auth failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function fetchVolunteerDetailWithoutAuth(id) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/detail`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response volunteer detail with auth", data.result);
    return data.result;
  } catch (error) {
    console.error("Fetching volunteer detail with auth failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function requestVolunteerJoin(id, greeting) {
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        greeting: greeting,
      })
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response Request Join data", data.success);
    return data.success;
  } catch (error) {
    console.error("Fetching volunteer detail with auth failed:", error);
    return null;
  }
}
