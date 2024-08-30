import AdoptPets from "../../../src/components/units/adopt/pets/AdoptPets.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function AdoptPetsPage({
  isSSRLoggedIn,
  profileURL,
  initialLoading,
}) {
  return (
    <>
      <AdoptPets
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        initialLoading={initialLoading}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("authResult in /adopt/pets:", authResult);

  const { isSSRLoggedIn, profileURL } = authResult.props;
  const initialLoading = true;

  return {
    props: {
      isSSRLoggedIn,
      profileURL,
      initialLoading,
    },
  };
}
