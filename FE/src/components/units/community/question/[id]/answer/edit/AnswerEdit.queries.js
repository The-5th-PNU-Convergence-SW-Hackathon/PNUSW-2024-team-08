import Cookies from "js-cookie";

export async function fetchAnswerDetail(id, accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching answer detail for id: ${id}`);
    const response = await fetch(`${baseURL}/answers/${id}`, {
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
    console.log("Response answer detail:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch answer detail:", error);
    return null;
  }
}

export async function submitAnswerEdit(id, postData) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Submitting answer edit`);
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Response to answer edit:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to submit answer edit:`, error);
    return null;
  }
}
