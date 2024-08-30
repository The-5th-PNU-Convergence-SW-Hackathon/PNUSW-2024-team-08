import { useRouter } from "next/router";
import HeadersUI from "./Headers.presenter";
import useModalStore from "../../../../src/store/useModalStore";
import { useNavigate } from "../hooks/useNavigate";

export default function Headers({ isSSRLoggedIn, profileURL }) {
  const router = useRouter();
  const { openModal } = useModalStore();
  const { navigateTo, navigateBack } = useNavigate();

  // 경로 패턴에 따른 타이틀 설정
  const getTitleByPath = (pathname) => {
    if (pathname.startsWith("/adopt")) {
      return "입양/임시보호";
    } else if (pathname === "/volunteer/create_volunteer") {
      return "새모임 만들기";
    } else if (
      pathname === "/volunteer/detail/regular_meetings/regular_meeting"
    ) {
      return "모임명";
    } else if (pathname === "/volunteer/[id]/approve") {
      return "가입승인 대기";
    } else if (pathname === "/volunteer/detail/regular_meetings") {
      return "정기모임";
    } else if (pathname.startsWith("/volunteer")) {
      return "봉사활동";
    } else if (pathname.startsWith("/community")) {
      return "커뮤니티";
    } else if (pathname === "/chatting") {
      return "채팅";
    } else if (pathname === "/home/faq") {
      return "자주하는 질문";
    } else if (pathname === "/home/dogs") {
      return "강아지 키우기";
    } else if (pathname === "/home/cats") {
      return "고양이 키우기";
    } else {
      return ""; // 기본값 혹은 다른 경로에 대한 타이틀 설정
    }
  };

  const title = getTitleByPath(router.pathname);

  // 각 아이콘에 해당하는 경로
  const paths = {
    home: "/home",
    search: "/info/search",
    alarm: "/info/alarm",
    profile: "/info/profile",
  };

  const handleIconClick = (path) => {
    if (!isSSRLoggedIn) {
      openModal(); // 로그인 경로를 전달
    } else if (path === paths.search) {
      if (router.pathname.startsWith("/adopt")) {
        router.push({
          pathname: path,
          query: {
            name: `searchAdopt`,
          },
        });
      } else if (router.pathname.startsWith("/community")) {
        router.push({
          pathname: path,
          query: {
            name: `searchPosts`,
          },
        });
      } else if (router.pathname.startsWith("/volunteer")) {
        router.push({
          pathname: path,
          query: {
            name: `searchGroups`,
          },
        });
      }
    } else {
      router.push(path);
    }
  };

  const handleArrowClick = () => {
    const currentPath = router.pathname;
    if (currentPath.includes("community/question/") || currentPath === "/volunteer/[id]/approve" || currentPath === "/volunteer/create_volunteer") {
      navigateBack();
    } else if (currentPath.startsWith("/community/question/")) {
      navigateTo("/community/question")();
    } else {
      navigateTo("/home")();
    }
  };

  return (
    <HeadersUI
      title={title}
      navigateTo={navigateTo}
      handleArrowClick={handleArrowClick}
      handleIconClick={handleIconClick}
      paths={paths}
      currentPath={router.pathname} // 현재 경로를 전달
      isSSRLoggedIn={isSSRLoggedIn}
      profileURL={profileURL}
    />
  );
}
