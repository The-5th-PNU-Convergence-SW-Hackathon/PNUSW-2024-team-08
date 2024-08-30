//여기서 volunteerInfos를 가져와서 그 안에 있는 myGroup을 가져오는 것으로 해볼까??
import { useState } from "react";
import { fetchVolunteerJoined } from "../VolunteerJoined.quries";
import { volunteerLike } from "../../Volunteer.quries";

export default function useFetchVolunteerJoined(joinVolunteerData) {
  const [page, setPage] = useState(1);
  const [volunteerJoinedInfos, setVolunteerJoinedInfos] = useState(joinVolunteerData);
  const [hasMore, setHasMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const loadUpdatedVolunteerJoinedData = async () => {
    const joinedData = await fetchVolunteerJoined(page);
    
    if(joinedData.length > 0) {
      setVolunteerJoinedInfos((prevState) => [...prevState, ...joinedData]);
      setPage((prevPageNumber) => prevPageNumber + 1);
    } else {
      setHasMore(false);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 1400)
      setModalMessage("모든 모임을 표시했습니다.");
    }
  };

  const handleToggleLike = async (myGroupID) => {
    try {
      const data = await volunteerLike(myGroupID);
      if (data.success) {
        setVolunteerJoinedInfos((currentVolunteer) => {
          const updatedVolunteer = currentVolunteer.map((myGroups) =>
            myGroups.id === myGroupID
              ? {
                ...myGroups,
                isLike: !myGroups.isLike, // 현재 상태를 반전
                likeNum: myGroups.isLike
                  ? myGroups.likeNum - 1
                  : myGroups.likeNum + 1, // 현재 상태에 따라 likeNum 조정
              }
              : myGroups
          );
          return [...updatedVolunteer]; // 새로운 배열 반환
        });
      }
    } catch (error) {
      console.error("volunteer Like failed: ", error);
    }
  };

  return {
    hasMore,
    showModal,
    modalMessage,
    page,
    volunteerJoinedInfos,
    loadUpdatedVolunteerJoinedData,
    handleToggleLike,
  };
}
