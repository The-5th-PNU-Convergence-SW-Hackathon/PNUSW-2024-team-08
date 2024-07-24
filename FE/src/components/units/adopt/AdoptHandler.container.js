import AdoptHandlerUI from "./AdoptHandler.presenter";
import { useRouter } from "next/router";
import { useNavigate } from "../../commons/hooks/useNavigate";

export default function AdoptHandler({ handleRequireModal }) {
  const router = useRouter();
  const { navigateTo, isActive } = useNavigate();

  const paths = {
    pets: "/adopt/pets",
    shelters: "/adopt/shelters",
    favorites: "/adopt/favorites",
  };

  return (
    <AdoptHandlerUI
      handleRequireModal={handleRequireModal}
      isActive={isActive}
      navigateTo={navigateTo}
      paths={paths}
    />
  );
}
