import EditMeeting from "../../../../../../src/components/units/volunteer/regular_meetings/[meetingID]/editMeeting/EditMeeting.container";
import { checkAuth } from "../../../../../../src/components/commons/utils/auth";
import { fetchRegularMeeting } from "../../../../../../src/components/units/volunteer/regular_meetings/[meetingID]/Regular_Meeting.quries";

export default function EditMeetingPage ({
  isSSRLoggedIn,
  meetingData,
}) {

  return(
    <>
      <EditMeeting 
        isSSRLoggedIn={isSSRLoggedIn}
        meetingData={meetingData}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const { id, meetingID } = context.params;
    console.log(id, meetingID);

    const authResult = await checkAuth(context);
    console.log("authResult in /voluntter/[id]/regular_meetings/[mmetingID]/editNotice:", authResult);

    const { isSSRLoggedIn, profileURL } = authResult.props;

    const accessToken = context.req.cookies.accessToken;

    let meetingData = null;

    if (authResult.props.isSSRLoggedIn && accessToken) {
      console.log(`Fetching meeting edit for id: ${meetingID}`);
      meetingData = await fetchRegularMeeting(id, meetingID, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        profileURL,
        meetingData,
      },
    };
  } catch (error) {
    console.error(
      `Error fetching question edit in /volunteer/[id]/regular_meetings/[meetingID]/edit getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        profileURL: null,
        meetingData: null,
      },
    };
  }
}