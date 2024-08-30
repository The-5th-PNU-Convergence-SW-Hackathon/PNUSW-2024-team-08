import Cookies from "js-cookie";

// 댓글 등록 함수
export const submitComment = async (postId, content) => {
  try {
    const accessToken = Cookies.get("accessToken");
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const response = await fetch(`${baseURL}/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // 에러 메시지 읽기
      throw new Error(`댓글 등록 실패: ${errorMessage}`);
    }

    const data = await response.json();
    console.log("submit comment data: ", data);
    return data;
  } catch (error) {
    console.error("댓글 등록에 실패하였습니다:", error);
    throw error; // 오류를 다시 던져 호출자가 처리할 수 있도록 함
  }
};

// 답글 등록 함수
export const submitReply = async (postId, commentId, content) => {
  try {
    const accessToken = Cookies.get("accessToken");
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const response = await fetch(
      `${baseURL}/posts/${postId}/comments/${commentId}/reply`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ content }),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text(); // 에러 메시지 읽기
      throw new Error(`답글 등록 실패: ${errorMessage}`);
    }

    const data = await response.json();
    console.log("submit reply data: ", data);
    return data;
  } catch (error) {
    console.error("답글 등록에 실패하였습니다:", error);
    throw error;
  }
};

// 댓글 수정 함수
export const editSubmitComment = async (postId, commentId, content) => {
  try {
    console.log(postId, commentId, content);
    const accessToken = Cookies.get("accessToken");
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const response = await fetch(
      `${baseURL}/posts/${postId}/comments/${commentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ content }),
      }
    );

    const data = await response.json();
    console.log("submit edeit data", data);
    return data;
  } catch (error) {
    console.error("댓글 수정에 실패하였습니다:", error);
    throw error;
  }
};
