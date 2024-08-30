export const sendSnsUserInfo = async (userInfo) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/accounts/social`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfo.email,
        name: userInfo.name,
        nickName: userInfo.nickName,
        province: userInfo.province,
        district: userInfo.district,
        subDistrict: userInfo.subDistrict,
        profileURL: userInfo.profileURL,
        authProvider: userInfo.authProvider,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to send user info");
    }
    const data = await response.json();
    console.log("profile data", data);
    return data;
  } catch (error) {
    console.log(
      `email: ${userInfo.email}
       name: ${userInfo.name}
       nickName: ${userInfo.nickName}
       province: ${userInfo.province}
       district: ${userInfo.district}
       subDistrict: ${userInfo.subDistrict}
       profileURL: ${userInfo.profileURL}
       authProvider: ${userInfo.authProvider}
      `
    );
    console.error("유저 정보 보내기 실패:", error);
    throw error;
  }
};
