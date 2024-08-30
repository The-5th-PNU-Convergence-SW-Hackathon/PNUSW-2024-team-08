import { useEffect, useRef, useState } from "react"

export const useCategorySelect = (category) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isCategoryFocused, setIsCategoryFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category == undefined ? "카테고리를 선택해주세요" : category);
  const CategoryRef = useRef(null);

  const toggleCatergoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    setIsCategoryFocused(!isCategoryFocused)
  }

  const handleCategorySelect = (event) => {
    const clickedCagegory = event.target.innerText;
    setSelectedCategory(clickedCagegory);
    setIsCategoryDropdownOpen(false);
  }

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (CategoryRef.current && !CategoryRef.current.contains(event.target)) {
        setIsCategoryDropdownOpen(false);
        setIsCategoryFocused(false);
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
    CategoryRef,
    isCategoryFocused,
    isCategoryDropdownOpen,
    selectedCategory,
    toggleCatergoryDropdown,
    handleCategorySelect
  }
}