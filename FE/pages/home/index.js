import Home from "../../src/components/units/home/Home.container";
import { checkAuth } from "../../src/components/commons/utils/auth";

export default function HomePage({ isSSRLoggedIn }) {
  return (
    <>
      <Home isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult:", authResult);
  return authResult;
}
