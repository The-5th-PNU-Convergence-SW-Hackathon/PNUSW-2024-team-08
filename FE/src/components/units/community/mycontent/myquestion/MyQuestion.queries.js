import Cookies from "js-cookie";

// 로그인된 유저의 accessToken을 사용하는 버전
export async function fetchMyQuestion(page) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching my questions`);
    const response = await fetch(`${baseURL}/posts/myQuestion?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to my questions:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to my questions:", error);
    return null;
  }
}
