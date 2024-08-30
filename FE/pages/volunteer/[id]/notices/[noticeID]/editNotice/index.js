import EditNotice from "../../../../../../src/components/units/volunteer/notices/[noticeID]/editNtocie/EditNotice.container";
import { checkAuth } from "../../../../../../src/components/commons/utils/auth";
import { fetchNotice } from "../../../../../../src/components/units/volunteer/notices/[noticeID]/Notice.quries";

export default function EditNoticePage(
  isSSRLoggedIn,
  profileURL,
  noticeData,
) {

  return(
    <>
      <EditNotice 
        isSSRLoggedIn={isSSRLoggedIn}
        profileURL={profileURL}
        noticeData={noticeData}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { noticeID } = context.params;

    const authResult = await checkAuth(context);
    console.log("authResult in /voluntter/[id]/notice/[noticeID]/editNotice:", authResult);

    const { isSSRLoggedIn, profileURL } = authResult.props;

    const accessToken = context.req.cookies.accessToken;

    let noticeData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching notice edit for id: ${noticeID}`);
      noticeData = await fetchNotice(noticeID, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        noticeData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching question edit in /volunteer/[id]/notices/[noticeID]/edit getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        noticeData: null,
      },
    };
  }
}