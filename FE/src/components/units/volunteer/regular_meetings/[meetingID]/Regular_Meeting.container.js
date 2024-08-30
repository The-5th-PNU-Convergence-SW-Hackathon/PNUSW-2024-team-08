import VolunteerDetailHeader from "../../volunteerDetailHeader/VolunteerDetailHeader.container";
import RegularMeetingUI from "./Regular_Meeting.presenter";
import { useRequestJoinMeeting } from "./hooks/useRequestMeeting";

export default function RegularMeeting({ isSSRLoggedIn, meetingData, profileURL, meetingID, userRole, match }) {

  const { handleRequestJoin, handleRequestWithdraw } = useRequestJoinMeeting();
  console.log(meetingData);

  return (
    <>
      <VolunteerDetailHeader isSSRLoggedIn={isSSRLoggedIn} meetingData={meetingData} userRole={userRole} />
      <RegularMeetingUI
        regularMeetingInfos={meetingData}
        userRole={userRole}
        handleRequestJoin={handleRequestJoin}
        handleRequestWithdraw={handleRequestWithdraw}
        match={match}
      />
    </>
  );
}
