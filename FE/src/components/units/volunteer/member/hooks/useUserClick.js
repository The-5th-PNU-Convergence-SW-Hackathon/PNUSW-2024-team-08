import { useState } from "react";

export const useUserClick = () => {
  const [clickedMemberIds, setClickedMemberIds] = useState([]);

  const handleMemberClick = (memberId) => {
    setClickedMemberIds(prevIds => {
      if (prevIds.includes(memberId)) {
        return prevIds.filter(id => id !== memberId);
      } else {
        return [...prevIds, memberId];
      }
    });
  };
  return {
    clickedMemberIds,
    handleMemberClick
  }
}