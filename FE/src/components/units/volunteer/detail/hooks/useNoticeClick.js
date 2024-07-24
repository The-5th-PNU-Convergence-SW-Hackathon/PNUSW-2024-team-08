import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useNoticeClick = () => {
  //라우팅 설정
  const router = useRouter();
  // 클릭 이벤트 처리를 위한 상태 변수와 상태 업데이트 함수 선언 공지사항에 쓰임()
  const [clickedIndex, setClickedIndex] = useState(-1);
  //가입 여부에서 클릭 상태 확인(가입이 되지 않은 회원이 눌리면 false 누르면 true이다)
  const [isJoinedClikced, setIsJoinedClicked] = useState(false);
  //추천모임에서 온 사람인지 아니면 내 모임에서 온사람인지 판단
  const status = router.query.name;

  //클릭을 하였을 떄 멤버가 아닌 회원은 막는 기능 통신 부분에 들어가서 판단
  const navigateTo = (path) => () => {
    if (status === "member") {
      router.push(
        {
          pathname: path,
          query: {
            name: "member",
          },
        },
        `${path}`
      );
    } else {
      setIsJoinedClicked(true);
      setTimeout(() => {
        setIsJoinedClicked(false);
      }, 1000);
    }
  };

  //공지사항을 클릭한 후 클릭한 공지사항의 색을 바꿔주는 기능
  const handleAnnouncementClick = (index) => {
    if (status === "member") {
      // 클릭된 공지사항의 인덱스를 설정
      setClickedIndex(index === clickedIndex ? -1 : index);

      // 2초 후에 클릭된 상태를 초기화하여 원래 색으로 돌아가도록 타이머 설정
      setTimeout(() => {
        setClickedIndex(-1);
      }, 2000);
    }
  };
  return {
    navigateTo,
    clickedIndex,
    isJoinedClikced,
    handleAnnouncementClick,
    status,
  };
};
