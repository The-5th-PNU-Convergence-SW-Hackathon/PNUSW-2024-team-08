export async function fetchQuestionList(page) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching question list for page: ${page}`);
    const response = await fetch(`${baseURL}/posts/question?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to question list:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch question list:", error);
    return null;
  }
}
