import { useRouter } from "next/router"
import { requestJoinMeeting, requestWithdrawMeeting } from "../Regular_Meeting.quries";

export const useRequestJoinMeeting = () => {
  const router = useRouter();
  const {id, meetingID} = router.query;

  const handleRequestJoin = async () => {
    try{
      const data = await requestJoinMeeting(id, meetingID);
      if(data.success) {
        router.push(`/volunteer/${id}/regular_meetings`);
      }
    } catch(error) {
      console.error("참가실패: ", error);
    }
  }

  const handleRequestWithdraw = async () => {
    try{
      const data = await requestWithdrawMeeting(id, meetingID);
      console.log(data);
      if(data.success) {
        router.push(`/volunteer/${id}/regular_meetings`);
      }
    } catch(error) {
      console.error("탈퇴실패");
    }
  }

  return{
    handleRequestJoin,
    handleRequestWithdraw
  }
}