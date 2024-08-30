export async function fetchMyCommunity(accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching my community`);
    const response = await fetch(`${baseURL}/communityStats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to my community:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch my community:", error);
    return null;
  }
}
