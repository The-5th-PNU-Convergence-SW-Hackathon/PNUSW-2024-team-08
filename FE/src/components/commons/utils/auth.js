export const verifyAccessToken = async (accessToken) => {
  if (!accessToken) {
    console.log("verifyAccessToken: No accessToken provided");
    return { valid: false };
  }

  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(
      `verifyAccessToken: Fetching from ${baseURL}/validate/accessToken with token ${accessToken}`
    );
    const response = await fetch(`${baseURL}/validate/accessToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`, // 직접 쿠키 설정
      },
      credentials: "include",
    });

    if (!response.ok) {
      console.log("verifyAccessToken: Response not OK");
      throw new Error("Token is invalid");
    }

    const data = await response.json();
    console.log("verifyAccessToken response data:", data);
    return {
      valid: data.success,
      profileURL:
        data.result && data.result.profile ? data.result.profile : null,
    };
  } catch (error) {
    console.error("Error verifying access token:", error);
    return { valid: false };
  }
};

export const checkAuth = async (context) => {
  const { req } = context;
  const accessToken = req.cookies.accessToken;

  console.log("checkAuth: accessToken from cookies:", accessToken);

  if (!accessToken) {
    console.log("checkAuth: No accessToken found, redirecting to /login");
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
      },
    };
  }

  const { valid, profileURL } = await verifyAccessToken(accessToken);
  console.log("checkAuth: Token valid status:", valid);

  if (!valid) {
    console.log("checkAuth: Invalid token, redirecting to /login");
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
      },
    };
  }

  console.log("checkAuth: Token is valid");
  return {
    props: {
      isSSRLoggedIn: true,
      profileURL: profileURL,
    },
  };
};
