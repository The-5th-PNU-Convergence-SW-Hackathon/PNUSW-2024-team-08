import { useState } from "react"

export const useSelectDate = (initialData) => {
  const [selectedDate, setSelectedDate] = useState(initialData ? initialData : new Date().toISOString());
  const [localDate, setLocalDate] = useState(initialData ? initialData : new Date().toISOString());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = ({ utcDate, localDate }) => {
    setSelectedDate(utcDate);
    setLocalDate(localDate);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  return {
    selectedDate,
    localDate,
    showCalendar,
    handleDateSelect,
    toggleCalendar,
    closeCalendar
  };
}