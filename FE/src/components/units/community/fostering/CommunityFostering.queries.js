export async function fetchFosteringList(page, sort) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching fostering list for page: ${page}, sort: ${sort}`);
    const response = await fetch(
      `${baseURL}/posts/fostering?page=${page}&sort=${sort}`,
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
    console.log("Response to fostering list:", data);
    return data.result.fostering;
  } catch (error) {
    console.error("Failed to fetch fostering list:", error);
    return null;
  }
}
