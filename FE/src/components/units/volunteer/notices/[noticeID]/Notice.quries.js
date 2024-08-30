export async function fetchNotice(id, accessToken) {
  console.log(id, accessToken);
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/posts/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("fetch Notice data: ", data.result);
    return data.result;
  } catch (error) {
    console.error("Failed fetch Notice data: ", error)
    return null;
  }
}