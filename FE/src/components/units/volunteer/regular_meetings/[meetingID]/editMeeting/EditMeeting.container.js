import EditMeetingUI from "./EditMeeting.presenter";
import { useNavigate } from "../../../../../../../src/components/commons/hooks/useNavigate";
import { useProfilePhotoManager } from "../../../../../../../src/components/commons/hooks/useProfilePhotoManager";
import { useChangeHandler } from "../../../addMeeting/hooks/useChangeHandler";
import { useSelectDate } from "../../../addMeeting/hooks/useSelectDate";
import { useSubmitMeetingEdit } from "./hooks/useSubmitMeetingEdit";
import { useEffect, useState } from "react";
import SuccessModal from "../../../[id]/edit/modal/successModal";
import { useRouter } from "next/router";

export default function EditMeeting({ isSSRLoggedIn, meetingData }) {
  const { navigateBack } = useNavigate();
  const router = useRouter();
  const {id, meetingID} = router.query;
  const [showModal, setShowModal] = useState(false);
  const [meetingInfo, setMeetingInfo] = useState(meetingData);
  const [editInfo, setEditInfo] = useState({
    name: meetingInfo.name,
    meetDate: meetingInfo.meetDate,
    location: meetingInfo.location,
    cost: meetingInfo.cost,
    maxNum: meetingInfo.maxNum,
    description: meetingInfo.description,
    profileURL: meetingInfo.profileURL
  });

  const { photo, handlePhotoUpload, fileInputRef, handlePhotoAddClick } =
    useProfilePhotoManager();

  const {
    name,
    description,
    location,
    cost,
    maxNum,
    handleMeetingName,
    handleMeetingDescription,
    handleMeetingLocation,
    handleMeetingCost,
    handleMeetingMaxNum
  } = useChangeHandler(meetingData.name, meetingData.description, meetingData.location, meetingData.cost, meetingData.maxNum);

  const {
    selectedDate,
    localDate,
    showCalendar,
    handleDateSelect,
    toggleCalendar,
    closeCalendar
  } = useSelectDate(meetingInfo.meetDate);

  const {
    handleSubmitMeetingEdit
  } = useSubmitMeetingEdit();

  useEffect(() => {
    setEditInfo({
      name: name || meetingInfo.name,
      meetDate: localDate || meetingInfo.meetDate,
      description: description || meetingInfo.description,
      location: location || meetingInfo.location,
      cost: Number(cost) || meetingInfo.cost,
      maxNum: Number(maxNum) || meetingInfo.maxNum,
      profileURL: meetingInfo.profileURL
    })
  }, [name, localDate, description, location, cost, maxNum]);

  const handleEditCompletion = async () => {
    const success = await handleSubmitMeetingEdit(id, meetingID, photo, editInfo);
    if (success) {
      setShowModal(true); // 성공 시 모달 표시
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.push(`/volunteer/${id}/regular_meetings/${meetingID}`); // 모달 닫힐 때 페이지 이동
  };

  return (
    <>
      <EditMeetingUI
        id={id}
        meetingID={meetingID}
        navigateBack={navigateBack}
        editInfo={editInfo}
        meetingInfo={meetingData}
        name={name}
        description={description}
        selectedDate={selectedDate}
        showCalendar={showCalendar}
        handleDateSelect={handleDateSelect}
        toggleCalendar={toggleCalendar}
        closeCalendar={closeCalendar}
        initialDate={meetingData.meetDate}
        location={location}
        cost={cost}
        maxNum={maxNum}
        handleMeetingName={handleMeetingName}
        handleMeetingDescription={handleMeetingDescription}
        handleMeetingLocation={handleMeetingLocation}
        handleMeetingCost={handleMeetingCost}
        handleMeetingMaxNum={handleMeetingMaxNum}
        handleEditCompletion={handleEditCompletion}
        photo={photo}
        handlePhotoUpload={handlePhotoUpload}
        fileInputRef={fileInputRef}
        handlePhotoAddClick={handlePhotoAddClick}
      />
      <SuccessModal showModal={showModal} onClose={handleCloseModal} />
    </>
  )
}