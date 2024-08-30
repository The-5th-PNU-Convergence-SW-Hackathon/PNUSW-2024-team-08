import { useState } from "react";

export const useNameDescription = (initialName, initialDescription) => {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);

  const handleVolunteerNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  }

  const handleVolunteerDescription = (e) => {
    const inputDescription = e.target.value;
    setDescription(inputDescription);
  }

  return{
    name,
    description,
    handleVolunteerNameChange,
    handleVolunteerDescription,
  }
}