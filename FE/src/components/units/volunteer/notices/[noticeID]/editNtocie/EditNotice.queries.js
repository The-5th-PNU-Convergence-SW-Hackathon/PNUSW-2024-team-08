import Cookies from "js-cookie";

export const submitEditNotice = async (postId, editInfo) => {
  try {
    console.log(postId, editInfo);
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(editInfo)
    });

    const data = await response.json();
    console.log("Edit notice data: ", data);
    return data;
  } catch (error) {
    console.error("Error sending notice edit info:", error);
    throw error
  }
}