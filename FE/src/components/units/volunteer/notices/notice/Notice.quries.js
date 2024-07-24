export async function fetchNotice() {
  try {
    const response = await fetch(
      "/groups/{groupId}/notices",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching notice failed:", error);
    // 오류 처리 로직을 여기에 작성할 수 있습니다.
    // 예를 들어, 오류 메시지를 UI에 표시하거나, 오류 로깅 서비스에 기록 등
    return null; // 또는 적절한 오류 처리 결과를 반환
  }
}

//댓글을 보내는 api문서
export const sendComment = async (content) => {
  try {
    const response = await fetch(
      "/posts/{id}/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content
        })
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("댓글 등록에 실패하였습니다");
  }
}

//답글을 보내는 api문서
export const sendReply = async (content) => {
  try {
    const response = await fetch(
      "/posts/{postId}/comments/{commentId}/relply",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content
        })
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("답글 등록에 실패하였습니다");
  }
}

//댓글 수정
export const sendCommentEdit = async (content) => {
  try {
    const response = await fetch(
      " /posts/{postId}/comments/{commentId}",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content
        })
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("댓글 수정에 실패하였습니다");
  }
}

export const sendReplyEdit = async (content) => {
  try {
    const response = await fetch(
      "/posts/{postId}/comments/{commentId}",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content
        })
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("답글 수정에 실패하였습니다");
  }
}

export const sendDelete = async () => {
  try {
    const response = await fetch(
      "/posts/{postId}/comments/{commentId}",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("댓글 삭제 실패");
  }
}

export const likeComment = async () => {
  try {
    const response = await fetch(
      "/posts/{postId}/comments/{commentId}/like",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("댓글 삭제 실패");
  }
}