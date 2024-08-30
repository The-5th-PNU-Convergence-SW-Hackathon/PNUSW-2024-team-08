import Cookies from "js-cookie";

export async function fetchNotices(id, page) {
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/notices?size=10&page=${page}`, {
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
    console.log("Fetch notices data: ", data.result);
    return data.result;
  } catch (error) {
    console.error("Fetching notices data failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}
