import { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

export const usePhotoModal = () => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photosModal, setPhotosModal] = useState([]);

  const openPhotoModal = useCallback((photos, index) => {
    setPhotosModal(photos);
    setCurrentIndex(index);
    setIsPhotoModalOpen(true);
  }, []);

  const closePhotoModal = useCallback(() => {
    setIsPhotoModalOpen(false);
    setPhotosModal([]);
    setCurrentIndex(0);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photosModal.length - 1 ? 0 : prevIndex + 1
    );
  }, [photosModal]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photosModal.length - 1 : prevIndex - 1
    );
  }, [photosModal]);

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
    photosModal,
    handleNext,
    handlePrev,
    photoModalHandlers,
  };
};
