import { fetchInitialFavPetsData } from "../../../src/components/units/adopt/favorites/AdoptFavorites.queries";
import AdpotFavorites from "../../..//src/components/units/adopt/favorites/AdoptFavorites.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function AdpotFavoritesPage({
  isSSRLoggedIn,
  profileURL,
  initialFavPetsData,
}) {
  return (
    <>
      <AdpotFavorites
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        initialFavPetsData={initialFavPetsData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /adopt/favorites");
    const authResult = await checkAuth(context);
    console.log("authResult in /adopt/favorites:", authResult);
    const { isSSRLoggedIn, profileURL } = authResult.props;

    if (!isSSRLoggedIn) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const accessToken = context.req.cookies.accessToken;

    let initialFavPetsData = null;

    if (isSSRLoggedIn && accessToken) {
      console.log(`Fetching initial favorite pets data: `);
      initialFavPetsData = await fetchInitialFavPetsData(accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        initialFavPetsData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching initial favorite pets data in /adopt/favorites getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        initialFavPetsData: null,
      },
    };
  }
}
