import { useRouter } from "next/router";
import AdoptShelterHandlerUI from "./AdoptShelterHandler.presenter";

export default function AdoptShelterHandler() {
  const router = useRouter();
  const { id } = router.query;

  const isActive = (path) => {
    return router.asPath === path;
  };

  const navigateTo = (path) => () => router.push(path);

  const paths = {
    detail: `/adopt/shelters/${id}`,
    rescues: `/adopt/shelters/${id}/rescues`,
  };

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <AdoptShelterHandlerUI
        isActive={isActive}
        navigateTo={navigateTo}
        paths={paths}
        navigateBack={navigateBack}
      />
    </>
  );
}
