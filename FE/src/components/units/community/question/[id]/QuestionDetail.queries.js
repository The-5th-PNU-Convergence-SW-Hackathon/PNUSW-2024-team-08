import Cookies from "js-cookie";

export async function fetchQuestionDetail(id, accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching question detail for id: ${id}`);
    const response = await fetch(`${baseURL}/posts/${id}/qna`, {
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
    console.log("Response question detail:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch question detail:", error);
    return null;
  }
}

export async function submitQuestionDelete(id) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching question delete for id: ${id}`);
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response question delete:", data);
    return data.success;
  } catch (error) {
    console.error("Failed to fetch question delete:", error);
    return null;
  }
}

export async function submitAnswerDelete(id) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching answer delete for id: ${id}`);
    const response = await fetch(`${baseURL}/answers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response answer delete:", data);
    return data.success;
  } catch (error) {
    console.error("Failed to fetch answer delete:", error);
    return null;
  }
}
