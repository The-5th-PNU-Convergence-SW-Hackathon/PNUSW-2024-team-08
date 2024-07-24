export async function fetchProfileData(accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Fetching profile data`);
    const response = await fetch(`${baseURL}/accounts/profile`, {
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
    console.log("Response to profile data:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetch profile data:", error);
    return null;
  }
}
