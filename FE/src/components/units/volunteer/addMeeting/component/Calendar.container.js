import React, { useState, useEffect } from 'react';
import CalendarUI from "./Calendar.presenter";

export default function Calendar({ onSelectDate, onClose, initialDate }) {

  const initDate = initialDate ? new Date(initialDate) : new Date();
  const [currentDate, setCurrentDate] = useState(initDate); //오늘 날짜를 담아주기 위한 변수
  const [selectedDate, setSelectedDate] = useState(initDate); //선택되 날짜를 담아주기 위한 변수
  const [selectedHour, setSelectedHour] = useState(new Date().getHours());
  const [selectedMinute, setSelectedMinute] = useState(new Date().getMinutes());
  const [isPM, setIsPM] = useState(new Date().getHours() >= 12);
  const [isEditingHour, setIsEditingHour] = useState(false);
  const [isEditingMinute, setIsEditingMinute] = useState(false);
  const [tempHour, setTempHour] = useState("");

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  const daysInNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0).getDate();

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    const now = new Date();
    setSelectedHour(now.getHours());
    setSelectedMinute(now.getMinutes());
    setIsPM(now.getHours() >= 12);
  }, []);

  const handleDateClick = (day) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleTimeChange = (type, increment) => {
    if (type === 'hour') {
      setSelectedHour((prev) => {
        let newHour = (prev + increment + 24) % 24;
        setIsPM(newHour >= 12);
        return newHour;
      });
    } else if (type === 'minute') {
      setSelectedMinute((prev) => (prev + increment + 60) % 60);
    } else if (type === 'ampm') {
      setIsPM((prev) => !prev);
      setSelectedHour((prev) => (prev + 12) % 24);
    }
  };

  const handleHourInput = (e) => {
    const value = e.target.value;

    if (value === "") {
      setTempHour("");
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      if (numValue >= 1 && numValue <= 12) {
        setTempHour(value);
        setSelectedHour(isPM ? numValue % 12 + 12 : numValue % 12);
      } else if (numValue === 0) {
        setTempHour("1");
        setSelectedHour(isPM ? 13 : 1);
      }
    }
  };

  const handleHourBlur = () => {
    setIsEditingHour(false);
    if (tempHour === "" || tempHour === "0") {
      setSelectedHour(isPM ? 13 : 1);
    }
    setTempHour("");
  };

  const handleMinuteInput = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 59) {
      setSelectedMinute(value);
    }
  };

  const formatHour = (hour) => {
    const h = hour % 12;
    return h === 0 ? 12 : h;
  };

  const formatMinute = (minute) => {
    return minute.toString().padStart(2, '0');
  };

  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear();
  };

  const isSelected = (day) => {
    return day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear();
  };

  const isPastDate = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return checkDate < today;
  };

  const handleConfirm = () => {
    const selectedDateTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      isPM ? (selectedHour % 12) + 12 : selectedHour % 12,
      selectedMinute
    );

    // UTC 날짜 생성
    const utcDate = new Date(selectedDateTime.toUTCString());
    const utcISOString = utcDate.toISOString();

    // KST 날짜 생성 (UTC+9)
    const kstDate = new Date(selectedDateTime.getTime() + 9 * 60 * 60 * 1000);
    const kstISOString = kstDate.toISOString();

    onSelectDate({ utcDate: utcISOString, localDate: kstISOString });
    onClose();
  };

  return (
    <>
      <CalendarUI
        currentDate={currentDate}
        selectedHour={selectedHour}
        selectedMinute={selectedMinute}
        isPM={isPM}
        isEditingHour={isEditingHour}
        isEditingMinute={isEditingMinute}
        tempHour={tempHour}
        setTempHour={setTempHour}
        daysInMonth={daysInMonth}
        firstDayOfMonth={firstDayOfMonth}
        daysInPrevMonth={daysInPrevMonth}
        daysInNextMonth={daysInNextMonth}
        weekdays={weekdays}
        handleDateClick={handleDateClick}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleTimeChange={handleTimeChange}
        handleHourInput={handleHourInput}
        handleHourBlur={handleHourBlur}
        handleMinuteInput={handleMinuteInput}
        setIsEditingHour={setIsEditingHour}
        setIsEditingMinute={setIsEditingMinute}
        formatHour={formatHour}
        formatMinute={formatMinute}
        isToday={isToday}
        isSelected={isSelected}
        onClose={onClose}
        handleConfirm={handleConfirm}
        isPastDate={isPastDate}
      />
    </>
  )
}