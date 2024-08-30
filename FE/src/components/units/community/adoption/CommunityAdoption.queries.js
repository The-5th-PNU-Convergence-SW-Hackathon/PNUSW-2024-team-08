export async function fetchAdoptionList(page) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching adoption list for page: ${page}`);
    const response = await fetch(`${baseURL}/posts/adoption?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to adoption list:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch adoption list:", error);
    return null;
  }
}

export async function fetchPopularAdoptionList(page) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching popular adoption list for page: ${page}`);
    const response = await fetch(
      `${baseURL}/posts/popular?page=${page}&type=ADOPTION`,
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
    console.log("Response to popular adoption list:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch popular adoption list:", error);
    return null;
  }
}
