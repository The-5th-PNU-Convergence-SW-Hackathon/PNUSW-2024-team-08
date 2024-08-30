import { useState } from "react"

export const useChangeHandler = (initialName, initialDescription, initialLocation, initialCost, initialMaxNum) => {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [location, setLocation] = useState(initialLocation);
  const [cost, setCost] = useState(initialCost);
  const [maxNum, setMaxNum] = useState(initialMaxNum);

  const handleMeetingName = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  }

  const handleMeetingDescription = (e) => {
    const inputDescription = e.target.value;
    setDescription(inputDescription);
  }

  const handleMeetingLocation = (e) => {
    const inputLocation = e.target.value;
    setLocation(inputLocation);
  }

  const handleMeetingCost = (e) => {
    const inputCost = e.target.value;
    setCost(inputCost);
  }

  const handleMeetingMaxNum = (e) => {
    const inputMaxNum = e.target.value;
    setMaxNum(inputMaxNum);
  }

  return{
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
  }
}