import { useState } from "react";

const useSubIcons = () => {
  const [isSubIconsVisible, setIsSubIconsVisible] = useState(false);

  const handleMainIconClick = () => {
    setIsSubIconsVisible(!isSubIconsVisible);
  };

  return { isSubIconsVisible, handleMainIconClick };
};

export default useSubIcons;
