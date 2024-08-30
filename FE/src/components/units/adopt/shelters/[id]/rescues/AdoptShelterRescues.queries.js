import Cookies from "js-cookie";

export async function fetchShelterRescuesDataWithAuth(id, sort, page) {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/shelters/${id}/animals?type=${sort}&page=${page}`,
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
    return data.result;
  } catch (error) {
    console.error("Fetching shelter pets failed:", error);
    // 오류 처리 로직을 여기에 작성할 수 있습니다.
    // 예를 들어, 오류 메시지를 UI에 표시하거나, 오류 로깅 서비스에 기록 등
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function fetchShelterRescuesDataWithoutAuth(id, sort, page) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/shelters/${id}/animals?sort=${sort}&page=${page}`,
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
    return data.result;
  } catch (error) {
    console.error("Fetching shelter pets failed:", error);
    // 오류 처리 로직을 여기에 작성할 수 있습니다.
    // 예를 들어, 오류 메시지를 UI에 표시하거나, 오류 로깅 서비스에 기록 등
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}
