export const CheckPasswordDuplication = async (password, passwordConfirm) => {
  try {
    const response = await fetch(
      "https://your-api-endpoint.com/Signup03Password/check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          passwordConfirm: passwordConfirm
        })
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log("사용할 수 없는 비밀번호입니다.");
  }
}; 