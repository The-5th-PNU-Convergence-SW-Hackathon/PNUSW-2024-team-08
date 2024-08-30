import Cookies from "js-cookie";

export const checkPassword = async (currentPassword) => {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Checking current password`);
    const response = await fetch(`${baseURL}/accounts/password/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ password: currentPassword }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to check current password:", data);
    return data.result.isMatching; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error("Error checking current password:", error);
    throw error;
  }
};

export const requestWithdrawCode = async (email) => {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Request withdraw code`);
    const response = await fetch(`${baseURL}/accounts/withdraw/code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ email: email }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    // 여기서 응답의 success 필드를 확인합니다.
    if (!response.ok || !data.success) {
      // 이곳에서 상태 코드나 success 필드에 따라 오류를 throw합니다.
      throw new Error(
        data.message || `API call failed with status: ${response.status}`
      );
    }

    return data.success; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error("Error request to withdraw code:", error);
    throw error;
  }
};

export const requestMoreCode = async (email) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Request withdraw code again`);
    const response = await fetch(
      `${baseURL}/accounts/resend/code?codeType=withdraw`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to request withdraw code again:", data);
    return data.success; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error("Error request to withdraw code again:", error);
    throw error;
  }
};

export const verifykWithdrawCode = async (email, code) => {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Check withdraw code`);
    const response = await fetch(
      `${baseURL}/accounts/verify/code?codeType=withdraw`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ email: email, code: code }),
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to check withdraw code:", data);
    return data.result.isMatching; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error("Error check withdraw code:", error);
    throw error;
  }
};

export const requestWithdraw = async (email) => {
  try {
    // 쿠키에서 accessToken을 가져옵니다.
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      throw new Error("Access token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(`Request withdraw code`);
    const response = await fetch(`${baseURL}/accounts/withdraw/code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ email: email }),
    });
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response to request withdraw code:", data);
    return data.success; // 성공적인 응답 데이터 반환
  } catch (error) {
    console.error("Error request to withdraw code:", error);
    throw error;
  }
};
