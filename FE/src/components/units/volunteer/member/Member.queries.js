import Cookies from "js-cookie";

export async function fetchMember(id, accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/members`, {
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
    console.log("Response volunteer member with auth", data.result);
    return data.result;
  } catch (error) {
    console.error("Fetching volunteer member with auth failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function changeRole(id, userId, userRole) {
  console.log(id, userId, userRole);
  try{
    const accessToken = Cookies.get("accessToken");
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/userRole`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole
      }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response member role change", data);
    return data;
  } catch (error) {
    console.error("Request failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function requestExpel(id, userId) {
  console.log(id, userId);
  try{
    const accessToken = Cookies.get("accessToken");
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/expel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userId: userId,
      }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response member expel", data.result);
    return data.result;
  } catch (error) {
    console.error("Request failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}