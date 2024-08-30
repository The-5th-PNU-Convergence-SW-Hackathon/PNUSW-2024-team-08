import Cookies from "js-cookie";

export async function fetchChatImages(id, accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/chatRooms/${id}/images?page=0&size=20`,
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
    console.log("Response chatting images:", data);
    return data.result;
  } catch (error) {
    console.error("Fetching chatting images failed:", error);
    return null;
  }
}

export async function fetchChatImagesMore(id, page) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/chatRooms/${id}/images?page=${page}&size=20`,
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
    console.log("Response previous chatting messages:", data);
    return data.result;
  } catch (error) {
    console.error("Fetching previous chatting messages failed:", error);
    return null;
  }
}
