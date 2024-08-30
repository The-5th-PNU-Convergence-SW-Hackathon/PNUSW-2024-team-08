import Cookies from "js-cookie";

async function fetchData(url) {
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}${url}`, {
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
    return data.result || data;
  } catch (error) {
    console.error(`Fetching data failed:`, error);
    // 오류 처리 로직을 여기에 작성할 수 있습니다.
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function fetchSearchAll(key) {
  return fetchData(`/search/all?keyword=${key}`);
}

export async function fetchSearchShelters(key, page) {
  return fetchData(`/search/shelters?keyword=${key}&page=${page}`);
}

export async function fetchSearchPosts(key, page) {
  return fetchData(`/search/posts?keyword=${key}&page=${page}`);
}

export async function fetchSearchGroups(key, page) {
  return fetchData(`/search/groups?keyword=${key}&page=${page}`);
}