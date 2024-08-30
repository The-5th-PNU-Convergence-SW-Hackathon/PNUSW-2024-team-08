export async function fetchPetDetailWithAuth(id, accessToken) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/animals/${id}`, {
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
    console.log("Response pet detail with auth:", data);
    return data.result;
  } catch (error) {
    console.error("Failed to fetching pet detail with auth:", error);
    return null;
  }
}

export async function fetchPetDetailWithoutAuth(id) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/animals/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response pet detail without auth:", data);
    return data.result;
  } catch (error) {
    console.error("Fetching pet detail without auth failed:", error);
    return null;
  }
}
