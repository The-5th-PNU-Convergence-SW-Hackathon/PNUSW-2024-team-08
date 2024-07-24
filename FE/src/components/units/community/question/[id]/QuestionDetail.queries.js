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
