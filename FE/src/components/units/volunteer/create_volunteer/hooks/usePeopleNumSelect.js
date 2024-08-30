import { useRef, useState, useEffect } from "react"

export const usePeopleNumSelect = (peopleNum) => {
  const [isPeopleNumDropdownOpen, setIsPeopleNumDropdownOpen] = useState(false);
  const [isPeopleNumFocused, setIsPeopleNumFocused] = useState(false);
  const [selectedPeopleNum, setSelectedPeopleNum] = useState(peopleNum == undefined ? "제한인원없음" : peopleNum); //UI로 나타내는 값
  const [selectedValue, setSelectedValue] = useState(null); //통신으로 넘겨줄 값
  const PeopleNumRef = useRef(null);

  const togglePeopleNumDropdown = () => {
    setIsPeopleNumDropdownOpen(!isPeopleNumDropdownOpen);
    setIsPeopleNumFocused(!isPeopleNumFocused)
  }

  const handlePeopleNumSelect = (event) => {
    const clickedPeopleNum = event.target.innerText;
    if (clickedPeopleNum === "제한인원없음") {
      setSelectedValue(null);
      setSelectedPeopleNum(clickedPeopleNum);
    } else {
      setSelectedValue(Number(clickedPeopleNum));
      setSelectedPeopleNum(clickedPeopleNum);
    }

    setIsPeopleNumDropdownOpen(false);
  }

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (PeopleNumRef.current && !PeopleNumRef.current.contains(event.target)) {
        setIsPeopleNumDropdownOpen(false);
        setIsPeopleNumFocused(false);
      }
    }

    // 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // 빈 배열을 넘겨 컴포넌트 마운트 시에만 실행되도록 함


  return {
    isPeopleNumDropdownOpen,
    isPeopleNumFocused,
    selectedPeopleNum,
    selectedValue,
    PeopleNumRef,
    togglePeopleNumDropdown,
    handlePeopleNumSelect
  }
}