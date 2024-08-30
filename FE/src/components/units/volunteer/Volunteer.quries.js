import Cookies from "js-cookie";

//추천모임, 지역모임, 내모임 해서 전체적으로 불러와서 통신하는 코드
export async function fetchVolunteerWithAuth(accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups`, {
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
    return data.result;
  } catch (error) {
    console.error("Fetching volunteer with auth failed:", error);
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

export async function fetchVolunteerWithoutAuth() {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/groups`,
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
    return data.result;
  } catch (error) {
    console.error("Fetching volunteer without auth failed", error)
  }
}

export const volunteerLike = async (id) => {
  console.log(id);
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("volunteer Like data : ", data);
    return data;
  } catch (error) {
    console.log("volunteer Like failed", error);
  }
};
