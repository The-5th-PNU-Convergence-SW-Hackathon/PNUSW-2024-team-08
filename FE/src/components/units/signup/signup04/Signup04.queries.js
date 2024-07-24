export const checkNickNameDuplication = async (nickName) => {
  try {
    const response = await fetch(
      "http://54.180.244.93:8080/api/accounts/check/nick",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickName: nickName }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("nick data", data);
    return data; // 서버 응답 반환
  } catch (error) {
    console.error("닉네임 체크 중 오류 발생:", error);
    throw error; // 에러 처리를 호출한 곳으로 전파
  }
};

export const sendUserInfo = async (userInfo) => {
  try {
    const response = await fetch("http://54.180.244.93:8080/api/accounts", {
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
        password: userInfo.password,
        passwordConfirm: userInfo.passwordConfirm,
        profileURL: userInfo.profileURL
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
       password: ${userInfo.password}
       passwordCinfirm: ${userInfo.passwordConfirm}
       profileURL: ${userInfo.profileURL}
      `
    );
    console.error("유저 정보 보내기 실패:", error);
    throw error;
  }
};
