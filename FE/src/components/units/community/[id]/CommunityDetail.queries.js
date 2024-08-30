import Cookies from "js-cookie";

export async function fetchCommunityDetail(id, accessToken) {
  console.log(id, accessToken);
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/posts/${id}`, {
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
    console.log("fetch adoption data: ", data.result);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch adoption data: ", error);
    return null;
  }
}

export async function submitCommunityDelete(id) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching post delete for id: ${id}`);
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
    console.log("Response post delete:", data);
    return data.success;
  } catch (error) {
    console.error("Failed to fetch post delete:", error);
    return null;
  }
}

export async function submitCommunityLike(id) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching post like for id: ${id}`);
    const response = await fetch(`${baseURL}/posts/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response post like:", data);
    return data.success;
  } catch (error) {
    console.error("Failed to fetch post like:", error);
    return null;
  }
}
