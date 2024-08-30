import React, { useState, useEffect } from 'react';
import * as S from "./Calendar.styles";
import Image from 'next/image';

const CalendarUI = ({
  currentDate,
  selectedHour,
  selectedMinute,
  isPM,
  isEditingHour,
  isEditingMinute,
  setTempHour,
  tempHour,
  daysInMonth,
  firstDayOfMonth,
  daysInPrevMonth,
  daysInNextMonth,
  weekdays,
  handleDateClick,
  handlePrevMonth,
  handleNextMonth,
  handleTimeChange,
  handleHourInput,
  handleHourBlur,
  handleMinuteInput,
  setIsEditingHour,
  setIsEditingMinute,
  formatHour,
  formatMinute,
  isToday,
  isSelected,
  isPastDate,
  handleConfirm,
  onClose
}) => {

  return (
    <S.Overlay onClick={onClose}>
      <S.CalendarWrapper onClick={(e) => e.stopPropagation()}>
        <S.TimeContainer>
          <S.TimeName>시간 선택</S.TimeName>
          <S.UpArrowContainer>
            <S.Arrow onClick={() => handleTimeChange('ampm', 1)}>
              <Image src="/images/volunteer/up_arrow.svg" alt='upArrow' width={50} height={30} />
            </S.Arrow>
            <S.Arrow onClick={() => handleTimeChange('hour', 1)}>
              <Image src="/images/volunteer/up_arrow.svg" alt='upArrow' width={50} height={30} />
            </S.Arrow>
            <S.Arrow onClick={() => handleTimeChange('minute', 1)}>
              <Image src="/images/volunteer/up_arrow.svg" alt='upArrow' width={50} height={30} />
            </S.Arrow>
          </S.UpArrowContainer>
          <S.TimeBlock>
            <S.Time onClick={() => handleTimeChange('ampm', 1)}>{isPM ? '오후' : '오전'}</S.Time>
            <S.Hour
              onClick={() => {
                setIsEditingHour(true);
                setTempHour(formatHour(selectedHour).toString());
              }}
            >
              {isEditingHour ? (
                <S.TimeInput
                  type="text"
                  value={tempHour}
                  onChange={handleHourInput}
                  onBlur={handleHourBlur}
                  autoFocus
                />
              ) : (
                formatHour(selectedHour)
              )}
            </S.Hour>
            <S.Minute
              onClick={() => setIsEditingMinute(true)}
              onBlur={() => setIsEditingMinute(false)}
            >
              {isEditingMinute ? (
                <S.TimeInput
                  type="number"
                  value={formatMinute(selectedMinute)}
                  onChange={handleMinuteInput}
                  onBlur={() => setIsEditingMinute(false)}
                  min="0"
                  max="59"
                  autoFocus
                />
              ) : (
                formatMinute(selectedMinute)
              )}
            </S.Minute>
          </S.TimeBlock>
          <S.UpArrowContainer>
            <S.Arrow onClick={() => handleTimeChange('ampm', -1)}>
              <Image src="/images/volunteer/down_arrow.svg" alt='downArrow' width={50} height={30} />
            </S.Arrow>
            <S.Arrow onClick={() => handleTimeChange('hour', -1)}>
              <Image src="/images/volunteer/down_arrow.svg" alt='downArrow' width={50} height={30} />
            </S.Arrow>
            <S.Arrow onClick={() => handleTimeChange('minute', -1)}>
              <Image src="/images/volunteer/down_arrow.svg" alt='downArrow' width={50} height={30} />
            </S.Arrow>
          </S.UpArrowContainer>
        </S.TimeContainer>
        <S.CalendarHeader>
          <S.Button onClick={handlePrevMonth}>&lt;</S.Button>
          <span style={{ fontWeight: "bold" }}>{`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}</span>
          <S.Button onClick={handleNextMonth}>&gt;</S.Button>
        </S.CalendarHeader>
        <S.CalendarGrid>
          {weekdays.map((day, index) => (
            <S.WeekdayCell key={day} isSaturday={index === 6} isSunday={index === 0}>{day}</S.WeekdayCell> //월화수목금
          ))}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => ( //저번달의 날짜를 표시
            <S.DayCell
              key={`prev-${daysInPrevMonth - firstDayOfMonth + index + 1}`}
              isOutsideMonth
              isPastDate={true}
            >
              {daysInPrevMonth - firstDayOfMonth + index + 1}
            </S.DayCell>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const dayOfWeek = (firstDayOfMonth + index) % 7;
            const pastDate = isPastDate(day);
            return (
              <S.DayCell //이번달
                style={{ cursor: "pointer" }}
                key={day}
                onClick={() => handleDateClick(day)}
                isToday={isToday(day)}
                isSelected={isSelected(day)}
                isSaturday={dayOfWeek === 6}
                isSunday={dayOfWeek === 0}
                isPastDate={pastDate}
              >
                {day}
              </S.DayCell>
            );
          })}
          {Array.from({ length: 42 - (firstDayOfMonth + daysInMonth) }).map((_, index) => (
            <S.DayCell //다음달의 날짜를 조금 표시
              key={`next-${index + 1}`}
              isOutsideMonth
            >
              {index + 1}
            </S.DayCell>
          ))}
        </S.CalendarGrid>
        <S.ConfirmBtnBlock>
          <S.ConfirmBtn onClick={handleConfirm}>확인</S.ConfirmBtn>
        </S.ConfirmBtnBlock>
      </S.CalendarWrapper>
    </S.Overlay>
  );
};

export default CalendarUI;