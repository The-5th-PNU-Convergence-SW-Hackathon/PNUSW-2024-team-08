import AdoptPets from "../../../src/components/units/adopt/pets/AdoptPets.container";
import { checkAuth } from "../../../src/components/commons/utils/auth";

export default function AdoptPetsPage({ isSSRLoggedIn }) {
  return (
    <>
      <AdoptPets isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called for /adopt/pets");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult for /adopt/pets:", authResult);
  return authResult;
}
