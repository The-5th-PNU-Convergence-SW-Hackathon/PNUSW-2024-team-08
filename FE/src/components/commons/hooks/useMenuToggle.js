import { useState, useEffect, useRef } from "react";

const useMenuToggle = (numberOfMenus = 1) => {
  const [isMenuClicked, setIsMenuClicked] = useState(
    Array(numberOfMenus).fill(false)
  );
  const menuRefs = useRef([]);

  const handleMenuClick = (index) => {
    setIsMenuClicked((prevState) =>
      prevState.map((clicked, i) => (i === index ? !clicked : clicked))
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      menuRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target)) {
          setIsMenuClicked((prevState) =>
            prevState.map((clicked, i) => (i === index ? false : clicked))
          );
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRefs]);

  return { isMenuClicked, handleMenuClick, menuRefs };
};

export default useMenuToggle;
