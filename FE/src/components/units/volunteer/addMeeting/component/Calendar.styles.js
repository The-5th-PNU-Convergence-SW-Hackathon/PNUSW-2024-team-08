import styled, { keyframes, css } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CalendarWrapper = styled.div`
  width: 345px;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 1.2rem;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const DayCell = styled.div`
  text-align: center;
  padding: 12px;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;

  ${props => props.isOutsideMonth && css`
    color: #C1C1C1;
    pointer-events: none;
  `}

  /* ${props => props.isToday && !props.isSelected && css` //선택을 하지 않았을 때의 오늘 날짜 css
    background-color: #FF6636;
    color: white;
  `} */

  ${props => props.isSelected && css`
    background-color: #FF6636;
    color: white;
  `}

  ${props => props.isSaturday && !props.isOutsideMonth && !props.isSelected && css` //선택되지 않았을 때의 토요일 css
    color: #1F91FB;
  `}

  ${props => props.isSunday && !props.isOutsideMonth && !props.isSelected && css` //선택도지 않았을 때의 일요일 css
    color: #FF5353;
  `}

  ${props => props.isPastDate && css`
    color: #C1C1C1;
    pointer-events: none;
    background-color: none;
  `}
`;


export const WeekdayCell = styled(DayCell)`
  font-weight: bold;

  ${props => props.isSaturday && css`
    color: #1F91FB;
  `}

  ${props => props.isSunday && css`
    color: #FF5353;
  `}

  &:hover {
    background-color: white;
    color: inherit;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }
`;

export const TimeContainer = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TimeName = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const UpArrowContainer = styled.div`
  width: 100%;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:first-child {
    animation: ${slideDown} 0.3s ease-out;
  }

  &:last-child {
    animation: ${slideUp} 0.3s ease-out;
  }
`;

export const Arrow = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const TimeBlock = styled.div`
  width: 100%;
  height: 170px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const TimeInput = styled.input`
  width: 40px;
  font-size: 30px;
  text-align: center;
  border: none;
  background: transparent;
  outline: none;
  font-weight: bold;
  color: inherit;
  font-family: inherit;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;

export const Time = styled.div`
  width: 60px;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${slideUp} 0.3s ease-out;
`;

export const Hour = styled(Time)``;

export const Minute = styled(Time)``;

export const ConfirmBtnBlock = styled.div`
  width: 100%;
  height: 70px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConfirmBtn = styled.div`
  width: 150px;
  height: 40px;
  font-size: 18px;
  color: white;
  background-color: #FF6636;
  border-radius: 18.5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;