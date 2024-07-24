export const verifyAccessToken = async (accessToken) => {
  if (!accessToken) {
    return { valid: false };
  }

  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/validate/accessToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`, // Authorization 헤더로 설정
        Cookie: `accessToken=${accessToken}`, // 직접 쿠키 설정
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Token is invalid");
    }

    const data = await response.json();
    console.log("verifyAccessToken response data:", data); // 이 로그가 서버 콘솔에 출력되는지 확인합니다.
    return { valid: data.success };
  } catch (error) {
    console.error("Error verifying access token:", error);
    return { valid: false };
  }
};

export const checkAuth = async (context) => {
  const { req } = context;
  const accessToken = req.cookies.accessToken;
  // const refreshToken = req.cookies.refreshToken;

  console.log("accessToken from cookies:", accessToken); // 이 로그가 서버 콘솔에 출력되는지 확인합니다.
  // console.log("refreshToken from cookies:", refreshToken); // 이 로그가 서버 콘솔에 출력되는지 확인합니다.

  if (!accessToken) {
    console.log("No accessToken found, redirecting to /login");
    return {
      props: {
        isSSRLoggedIn: false,
      },
    };
  }

  const { valid } = await verifyAccessToken(accessToken);
  console.log("Token valid status:", valid); // 이 로그가 서버 콘솔에 출력되는지 확인합니다.

  if (!valid) {
    console.log("Invalid token, redirecting to /login");
    return {
      props: {
        isSSRLoggedIn: false,
      },
    };
  }

  return {
    props: {
      isSSRLoggedIn: true,
    },
  };
};
