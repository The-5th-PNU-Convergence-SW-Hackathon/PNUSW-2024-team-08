export const fetchUserInfo = async () => {
  try {
    const response = await fetch("https://your-api-endpoint.com/user/info", {
      method: "GET",
      headers: {
        Authorization: "Bearer your-token-here", // 필요한 경우 인증 헤더 추가
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }
    const data = await response.json();
    return data; // 응답 데이터 반환
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error; // 에러를 호출한 측으로 전파
  }
};

export const sendNewVolunteerInfo = async (name, province, district, subDistrict, description, category, profileURL) => {
  try {
    const response = await fetch("/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        province: province,
        district: district,
        subDistrict: subDistrict,
        description: description,
        category: category,
        profileURL: profileURL
      })
    });
    if(!response.ok) {
      throw new Error("Failed to send user info")
    }
  }catch(error) {
    console.error("Error sending user info:", error);
    throw error
  }
}