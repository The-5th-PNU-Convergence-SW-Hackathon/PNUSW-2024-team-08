import { useRouter } from "next/router";
import HomeHeaderUI from "./HomeHeader.presenter";
import useModalStore from "../../../../src/store/useModalStore";

export default function HomeHeader({ isSSRLoggedIn, profileURL }) {
  const router = useRouter();
  const { openModal } = useModalStore();

  // 각 아이콘에 해당하는 경로
  const paths = {
    search: "/info/search",
    alarm: "/info/alarm",
    profile: "/info/profile",
  };

  const handleIconClick = (path) => {
    if (!isSSRLoggedIn) {
      openModal(); // 로그인 경로를 전달
    } else if (path === paths.search) {
      if (router.pathname.startsWith("/home")) {
        router.push({
          pathname: path,
          query: {
            name: "searchAll",
          },
        });
      }
    } else {
      router.push(path);
    }
  };

  return (
    <HomeHeaderUI
      handleIconClick={handleIconClick}
      paths={paths}
      isSSRLoggedIn={isSSRLoggedIn}
      profileURL={profileURL}
    />
  );
}
