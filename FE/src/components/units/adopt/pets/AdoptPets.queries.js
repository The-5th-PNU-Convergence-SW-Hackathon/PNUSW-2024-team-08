import Cookies from "js-cookie";

// 로그인된 유저의 accessToken을 사용하는 버전
export async function fetchPetsDataWithAuth(page, sort) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching pets with auth for page: ${page}, sort: ${sort}`);
    const response = await fetch(
      `${baseURL}/animals?page=${page}&size=5&sort=${sort}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to pets data with auth:", data);
    return data.result.animals;
  } catch (error) {
    console.error("Failed to fetch pets data with auth:", error);
    return null;
  }
}

// 일반 버전
export async function fetchPetsDataWithoutAuth(page, sort) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching pets without auth for page: ${page}, sort: ${sort}`);
    const response = await fetch(
      `${baseURL}/animals?page=${page}&size=5&sort=${sort}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to pets data without auth:", data);
    return data.result.animals;
  } catch (error) {
    console.error("Failed to fetch pets data without auth:", error);
    return null;
  }
}
