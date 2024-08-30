export const CheckEmailDuplication = async (email) => {
  console.log(email);
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(`${baseURL}/accounts/check/email`, {
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
    console.log("email data : ", data);
    return data.result.isValid;
  } catch (error) {
    console.log("사용불가능한 이메일입니다.", error);
    throw error;
  }
};

export const VerifySignupCode = async (email, code) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/accounts/verify/code?codeType=join`,
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
    console.log("code data : ", data);
    return data.result.isMatching;
  } catch (error) {
    console.log("쿼리문: 코드가 일치하지 않습니다.", error);
  }
};

export const ResendCode = async (email) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await fetch(
      `${baseURL}/accounts/resend/code?codeType=join`,
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
    return data.success;
  } catch (error) {
    console.log("사용불가능한 이메일입니다.", error);
  }
};
