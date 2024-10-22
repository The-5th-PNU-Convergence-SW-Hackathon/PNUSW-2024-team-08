import { useRouter } from "next/router";

export function useNavigate() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const navigateBack = () => router.back();

  const isActive = (path) => {
    return router.asPath === path;
  };

  return { navigateTo, navigateBack, isActive };
}
