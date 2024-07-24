export async function fetchAdoptionList(page, sort) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching adoption list for page: ${page}, sort: ${sort}`);
    const response = await fetch(
      `${baseURL}/posts/adoption?page=${page}&sort=${sort}`,
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
    console.log("Response to adoption list:", data);
    return data.result.adoptions;
  } catch (error) {
    console.error("Failed to fetch adoption list:", error);
    return null;
  }
}
