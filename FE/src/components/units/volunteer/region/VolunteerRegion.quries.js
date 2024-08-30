import Cookies from "js-cookie";

export async function fetchVolunteerRegion(province, district, page) {
  console.log(`
      province: ${province}
      district: ${district}
      page: ${page}
      `)
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/local?province=${province}&page=${page}&district=${district}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status : ${response.status}`);
    }
    const data = await response.json();
    console.log("update region volunteer data", data.result.localGroups)
    return data.result.localGroups;
  } catch (error) {
    console.error("Feching volunteerRejoin failed", error);
  }
}
  
export async function requseVolunteerWithAuth(province, district) {
  console.log(province, district);
  try{
    const accessToken = Cookies.get("accessToken");

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/localAndNew?province=${province}&district=${district}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status : ${response.status}`);
    }
    const data = await response.json();
    console.log("update region volunteer data", data.result)
    return data.result;
  } catch (error) {
    console.error("Request failed selected volunteer data: ", error);
  }
}

export async function requseVolunteerWithoutAuth(province, district) {
  console.log(province, district);
  try{
    const accessToken = Cookies.get("accessToken");

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/groups/localAndNew?province=${province}&district=${district}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`API call failed with status : ${response.status}`);
    }
    const data = await response.json();
    console.log("update region volunteer data", data.result)
    return data.result;
  } catch (error) {
    console.error("Request failed selected volunteer data: ", error);
  }
}