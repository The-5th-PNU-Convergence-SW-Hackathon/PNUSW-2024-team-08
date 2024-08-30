export async function fetchChatRooms(accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/chatRooms`, {
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
    console.log("Response chatRooms:", data);
    return data.result.rooms;
  } catch (error) {
    console.error("Failed to fetch chatRooms:", error);
    return null;
  }
}
