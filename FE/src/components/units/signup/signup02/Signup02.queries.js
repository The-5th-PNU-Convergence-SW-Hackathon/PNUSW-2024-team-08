export const CheckEmailDuplication = async (email) => {
  try {
    const response = await fetch(
      `http://54.180.244.93:8080/api/accounts/check/email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        })
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
  }
};

export const CheckCodeDuplication = async (email, code) => {
  try {
    const response = await fetch(
      "http://54.180.244.93:8080/api/accounts/check/email/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          code: code
        })
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("code data : ", data);
    return data;

  } catch (error) {
    console.log("쿼리문: 코드가 일치하지 않습니다.", error);
  }
};

