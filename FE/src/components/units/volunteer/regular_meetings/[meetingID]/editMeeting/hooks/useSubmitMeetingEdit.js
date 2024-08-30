import useS3Upload from "../../../../../../../../src/components/commons/hooks/useS3Upload"
import { submitEditMeeting } from "../EditMeeting.queries"

export const useSubmitMeetingEdit = () => {

  const { uploadFile } = useS3Upload("pnucoding", "volunteer");

  const uploadImageToS3 = async (photo) => {
    console.log("Uploading photo:", photo);
    const imageUrl = await uploadFile(photo.file);
    console.log("Uploaded image URL:", imageUrl);
    return imageUrl !== null ? imageUrl : null;
  };

  const handleSubmitMeetingEdit = async (id, meetingID, photo, editInfo) => {
    try {
      let data;
      if (photo) {
        const uploadedImageUrl = await uploadImageToS3(photo);

        const updatedEditInfo = {
          ...editInfo,
          profileURL: uploadedImageUrl,
        };

        data = await submitEditMeeting(id, meetingID, updatedEditInfo);
      } else {
        data = await submitEditMeeting(id, meetingID, editInfo);
      }
      if (data.success) {
        return true; // 성공 시 true 반환
      }
    } catch (error) {
      console.error("정기모임 수정 실패: ", error);
    }
  }
  return {
    handleSubmitMeetingEdit
  }
}