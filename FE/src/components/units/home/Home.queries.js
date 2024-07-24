export async function fetchHomeData() {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response status: ", response.status);
    console.log("response headers: ", response.headers);

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    // 응답이 JSON 형식인지 확인
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Received non-JSON response");
    }

    const data = await response.json();
    console.log("response data: ", data);
    return data.result;
  } catch (error) {
    console.error("Fetching home failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}
