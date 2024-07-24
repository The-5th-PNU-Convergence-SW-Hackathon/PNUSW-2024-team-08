export const setNewPassword = async (code, newPassWord) => {
  try {
    const response = await fetch(
      " /accounts/recovery/reset",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          newPassWord: newPassWord
        })
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log("사용 불가 패스워드");
  }
};