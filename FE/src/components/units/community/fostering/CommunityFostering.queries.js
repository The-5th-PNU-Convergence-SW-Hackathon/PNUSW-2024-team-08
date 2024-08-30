export async function fetchFosteringList(page) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching fostering list for page: ${page}`);
    const response = await fetch(`${baseURL}/posts/fostering?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to fostering list:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch fostering list:", error);
    return null;
  }
}

export async function fetchPopularFosteringList(page) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching popular fostering list for page: ${page}`);
    const response = await fetch(
      `${baseURL}/posts/popular?page=${page}&type=FOSTERING`,
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
    console.log("Response to popular fostering list:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch popular fostering list:", error);
    return null;
  }
}
