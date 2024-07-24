import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const usePhotoModal = (photos) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPhotoModal = (index) => {
    setCurrentIndex(index);
    setIsPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const photoModalHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return {
    isPhotoModalOpen,
    openPhotoModal,
    closePhotoModal,
    currentIndex,
    handleNext,
    handlePrev,
    photoModalHandlers,
  };
};
