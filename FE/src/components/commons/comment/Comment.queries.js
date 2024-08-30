import Cookies from "js-cookie";

// 댓글 삭제 통신문
export const deleteSubmitComment = async (postId, commentId) => {
  console.log(postId, commentId);
  try {
    const accessToken = Cookies.get("accessToken");
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const response = await fetch(`${baseURL}/posts/${postId}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // 에러 메시지 읽기
      throw new Error(`댓글 삭제 실패: ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("댓글 삭제에 실패하였습니다:", error);
    throw error;
  }
}

//댓글 대댓글 좋아요 통신문

export const toggleLike = async (postId, commentId) => {
  console.log(postId, commentId);
  try {
    const accessToken = Cookies.get("accessToken");
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const response = await fetch(`${baseURL}/posts/${postId}/comments/${commentId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // 에러 메시지 읽기
      throw new Error(`댓글 좋아요 실패: ${errorMessage}`);
    }

    const data = await response.json();
    console.log("commet toggle Like data: ", data);
    return data;
  } catch (error) {
    console.error("댓글 좋아요에 실패하였습니다:", error);
    throw error;
  }
}
