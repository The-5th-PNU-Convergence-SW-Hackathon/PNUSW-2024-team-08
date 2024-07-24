export const CheckEmailDuplication = async (email) => {
  try {
    const response = await fetch(
      "/accounts/recovery",
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
    return data;
    
  } catch (error) {
    console.log("사용불가능한 이메일입니다.");
  }
};

export const CheckCode = async (email, code) => {
  try {
    const response = await fetch(
      "/accounts/recovery/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          code: code,
        })
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log("사용불가능한 이메일입니다.");
  }
};