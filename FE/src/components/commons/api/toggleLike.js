import Cookies from "js-cookie";

export async function toggleLike(id) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/animals/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();

    // 통신 결과를 콘솔로 출력
    console.log("toggleLike response status:", response.status);
    console.log("toggleLike response data:", data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data.success;
  } catch (error) {
    console.error("Fetching toggleLike failed:", error);
    return null;
  }
}
