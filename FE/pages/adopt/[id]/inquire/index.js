import Inquire from "../../../../src/components/units/adopt/[id]/inquire/Inquire.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";

export default function InquirePage({ isSSRLoggedIn }) {
  return (
    <>
      <Inquire isSSRLoggedIn={isSSRLoggedIn} />
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps called");
  const authResult = await checkAuth(context);
  console.log("getServerSideProps authResult:", authResult);
  return authResult;
}
