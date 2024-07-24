export async function fetchVolunteerRegion() {
  try {
    const response = await fetch("https://example.com/api/volunteer/region", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Feching volunteerRejoin failed", error);
  }
}

export async function fetchVolunteerNewGroup() {
    try {
      const response = await fetch("https://example.com/api/volunteer/region", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`API call failed with status : ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Feching volunteerRejoin failed", error);
    }
  }
  