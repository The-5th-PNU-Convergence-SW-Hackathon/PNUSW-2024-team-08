import AddMeetingUI from "./AddMeeting.presenter";
import { useNavigate } from "../../../../../src/components/commons/hooks/useNavigate";
import { useProfilePhotoManager } from "../../../../../src/components/commons/hooks/useProfilePhotoManager";
import { useEffect, useState } from "react";
import { useChangeHandler } from "./hooks/useChangeHandler";
import { useSubmitMeetingInfo } from "./hooks/useSubmitMeetingInfo";
import { useSelectDate } from "./hooks/useSelectDate";

export default function AddMeeting() {
  const { navigateBack } = useNavigate();
  const [meetingInfo, setMeetingInfo] = useState({
    name: "",
    meetDate: "",
    location: "",
    cost: "",
    maxNum: "",
    description: "",
    profileURL: ""
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
  } = useChangeHandler(meetingInfo.name, meetingInfo.description, meetingInfo.location, meetingInfo.cost, meetingInfo.maxNum);

  const {
    selectedDate,
    localDate,
    showCalendar,
    handleDateSelect,
    toggleCalendar,
    closeCalendar
  } = useSelectDate();

  const {
    handleSubmitMeetingInfo,
  } = useSubmitMeetingInfo(photo);

  useEffect(() => {
    setMeetingInfo({
      name: name,
      meetDate: localDate,
      description: description,
      location: location,
      cost: Number(cost),
      maxNum: Number(maxNum),
      profileURL: "",
    })
  }, [name, localDate, description, location, cost, maxNum])

  return (
    <>
      <AddMeetingUI
        navigateBack={navigateBack}
        meetingInfo={meetingInfo}
        name={name}
        description={description}
        selectedDate={selectedDate}
        showCalendar={showCalendar}
        handleDateSelect={handleDateSelect}
        toggleCalendar={toggleCalendar}
        closeCalendar={closeCalendar}
        location={location}
        cost={cost}
        maxNum={maxNum}
        handleMeetingName={handleMeetingName}
        handleMeetingDescription={handleMeetingDescription}
        handleMeetingLocation={handleMeetingLocation}
        handleMeetingCost={handleMeetingCost}
        handleMeetingMaxNum={handleMeetingMaxNum}
        handleSubmitMeetingInfo={handleSubmitMeetingInfo}
        photo={photo}
        handlePhotoUpload={handlePhotoUpload}
        fileInputRef={fileInputRef}
        handlePhotoAddClick={handlePhotoAddClick}
      />
    </>
  )
}