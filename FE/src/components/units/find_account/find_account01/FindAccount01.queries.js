export const CheckEmail = async (email) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/accounts/recovery/code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("email data: ", data);
    return data.result;
  } catch (error) {
    console.log("사용불가능한 이메일입니다.");
    throw error;
  }
};

export const CheckCode = async (email, code) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/accounts/verify/code?codeType=recovery`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          code: code,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("code data: ", data);
    return data.result.isMatching;
  } catch (error) {
    console.log("사용불가능한 이메일입니다.");
    throw error;
  }
};

export const ResendCode = async (email) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/accounts/resend/code?codeType=recovery`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("email data : ", data);
    return data;
  } catch (error) {
    console.log("사용불가능한 이메일입니다.", error);
    throw error;
  }
};
