import Cookies from "js-cookie";

export async function requestReport(submit) {
  try {
    console.log(submit);
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(submit),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("submit roport: ", data);
    return data;
  } catch (error) {
    console.error("Submit  data failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}
