import { useState, useEffect, useRef, useCallback } from "react";

export const useRegionSelection = (
  currentProvince,
  currentDistrict,
  currentSubDistrict
) => {
  const [selectedProvince, setSelectedProvince] = useState(currentProvince);
  const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
  const [isProvinceFocused, setIsProvinceFocused] = useState(false);

  const [selectedDistrict, setSelectedDistrict] = useState(currentDistrict);
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  const [isDistrictFocused, setIsDistrictFocused] = useState(false);

  const [selectedSubDistrict, setSelectedSubDistrict] =
    useState(currentSubDistrict);
  const [isSubDistrictDropdownOpen, setIsSubDistrictDropdownOpen] =
    useState(false);
  const [isSubDistrictFocused, setIsSubDistrictFocused] = useState(false);

  const wrapperRef = useRef(null);

  const updateSelectionStates = useCallback((setStateFuncs, values) => {
    setStateFuncs.forEach((setFunc, index) => {
      setFunc(values[index]);
    });
  }, []);

  const handleProvinceSelect = useCallback(
    (province) => {
      updateSelectionStates(
        [
          setSelectedProvince,
          setIsProvinceDropdownOpen,
          setIsProvinceFocused,
          setSelectedDistrict,
          setSelectedSubDistrict,
        ],
        [province, false, false, "구/군/시", "동/읍/면"]
      );
    },
    [updateSelectionStates]
  );

  const handleDistrictSelect = useCallback(
    (district) => {
      updateSelectionStates(
        [
          setSelectedDistrict,
          setIsDistrictDropdownOpen,
          setIsDistrictFocused,
          setSelectedSubDistrict,
        ],
        [district, false, false, "동/읍/면"]
      );
    },
    [updateSelectionStates]
  );

  const handleSubDistrictSelect = useCallback(
    (subDistrict) => {
      updateSelectionStates(
        [
          setSelectedSubDistrict,
          setIsSubDistrictDropdownOpen,
          setIsSubDistrictFocused,
        ],
        [subDistrict, false, false]
      );
      console.log("Selected subDistrict:", subDistrict);
    },
    [updateSelectionStates]
  );

  const toggleDropdown = useCallback(
    (type) => {
      // 모든 드랍다운 상태를 false로 초기화
      setIsProvinceDropdownOpen(false);
      setIsDistrictDropdownOpen(false);
      setIsSubDistrictDropdownOpen(false);

      // 선택된 타입에 따라 해당 드랍다운 상태만 true로 설정
      switch (type) {
        case "province":
          setIsProvinceDropdownOpen(!isProvinceDropdownOpen);
          // province가 선택되면 항상 포커스 상태를 업데이트
          setIsProvinceFocused(!isProvinceFocused);
          setIsDistrictFocused(false);
          setIsSubDistrictFocused(false);
          break;
        case "district":
          if (selectedProvince !== "시/도 선택") {
            setIsDistrictDropdownOpen(!isDistrictDropdownOpen);
            // province가 선택되었을 때만 district의 포커스 상태를 업데이트
            setIsProvinceFocused(false);
            setIsDistrictFocused(!isDistrictFocused);
            setIsSubDistrictFocused(false);
          }
          break;
        case "subDistrict":
          if (
            selectedProvince !== "시/도 선택" &&
            selectedDistrict !== "구/군/시"
          ) {
            setIsSubDistrictDropdownOpen(!isSubDistrictDropdownOpen);
            // province와 district가 모두 선택되었을 때만 subDistrict의 포커스 상태를 업데이트
            setIsProvinceFocused(false);
            setIsSubDistrictFocused(false);
            setIsSubDistrictFocused(!isSubDistrictFocused);
          }
          break;
        default:
          break;
      }
    },
    [
      isProvinceDropdownOpen,
      isProvinceFocused,
      isDistrictDropdownOpen,
      isDistrictFocused,
      selectedProvince,
      selectedDistrict,
    ]
  );

  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // 모든 드랍다운을 닫는 로직
        setIsProvinceDropdownOpen(false);
        setIsProvinceFocused(false);
        setIsDistrictDropdownOpen(false);
        setIsDistrictFocused(false);
        setIsSubDistrictDropdownOpen(false);
        setIsSubDistrictFocused(false);
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
    selectedProvince,
    isProvinceDropdownOpen,
    isProvinceFocused,
    selectedDistrict,
    isDistrictDropdownOpen,
    isDistrictFocused,
    selectedSubDistrict,
    isSubDistrictDropdownOpen,
    isSubDistrictFocused,
    wrapperRef,
    handleProvinceSelect,
    handleDistrictSelect,
    handleSubDistrictSelect,
    toggleDropdown,
  };
};
