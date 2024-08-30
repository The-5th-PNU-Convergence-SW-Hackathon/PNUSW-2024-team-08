import { useRouter } from "next/router"
import useS3Upload from "../../../../../../src/components/commons/hooks/useS3Upload"
import { submitMeeting } from "../AddMeeting.queries";

export const useSubmitMeetingInfo = (photo) => {
  const router = useRouter();
  const { id } = router.query;
  const { uploadFile } = useS3Upload("pnucoding", "volunteer");

  const uploadImageToS3 = async (photo) => {
    console.log("Uploading photo:", photo);
    const imageUrl = await uploadFile(photo.file);
    console.log("Uploaded image URL:", imageUrl);
    return imageUrl !== null ? imageUrl : null;
  };

  const handleSubmitMeetingInfo = async (meetingInfo) => {
    try {
      if (photo) {
        const uploadedImageUrl = await uploadImageToS3(photo);

        // 업로드된 이미지 URL을 userInfo에 추가
        const updatedUserInfo = {
          ...meetingInfo,
          profileURL: uploadedImageUrl,
        };
        const data = await submitMeeting(id, updatedUserInfo);
        if (data.success) {
          router.push(`/volunteer/${id}/regular_meetings/${data.result.id}`)
        }
      }
    } catch (error) {
      console.error("새로운 정기모임 생성 실패: ", error);
    }
  }

  return {
    handleSubmitMeetingInfo
  }
}