import AdpotFavorites from "../../..//src/components/units/adopt/favorites/AdoptFavorites.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function AdpotFavoritesPage({ isSSRLoggedIn }) {
  return (
    <>
      <AdpotFavorites isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult:", authResult);
  return authResult;
}
