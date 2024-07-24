import VolunteerDetailHeader from "../../detail/volunteerDetailHeader/VolunteerDetailHeader.container";
import RegularMeetingUI from "./Regular_Meeting.presenter";
import useFetchRegularMeeting from "./hooks/useFetchRegularMeeting";

export default function RegularMeeting() {
  const {regularMeetingInfos} = useFetchRegularMeeting();
  return (
    <>
      <VolunteerDetailHeader />
      <RegularMeetingUI regularMeetingInfos={regularMeetingInfos} />
    </>
  );
}
