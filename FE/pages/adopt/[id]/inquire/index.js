import Inquire from "../../../../src/components/units/adopt/[id]/inquire/Inquire.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import { fetchPetDetailWithAuth } from "../../../../src/components/units/adopt/[id]/AdoptPetDetail.queries";

export default function InquirePage({ isSSRLoggedIn, petDetailData }) {
  return (
    <>
      <Inquire isSSRLoggedIn={isSSRLoggedIn} petDetailData={petDetailData} />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("getServerSideProps called for /adopt/[id]");
    const { id } = context.params;

    if (!id) {
      throw new Error("Missing pet ID");
    }

    const authResult = await checkAuth(context);
    console.log("authResult in /adopt/[id]:", authResult);
    const accessToken = context.req.cookies.accessToken;

    const { isSSRLoggedIn, profileURL } = authResult.props;

    let petDetailData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching pet detail with auth for id: ${id}`);
      petDetailData = await fetchPetDetailWithAuth(id, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        petDetailData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching pet details in adopt/[id] getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        petDetailData: null,
      },
    };
  }
}
