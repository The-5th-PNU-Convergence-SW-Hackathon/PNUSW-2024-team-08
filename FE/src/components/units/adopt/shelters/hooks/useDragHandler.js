import { useEffect } from "react";

export const useDragHandler = (isMapLoaded) => {
  useEffect(() => {
    const mapInfoDragBlock = document.getElementById("map-info-drag-block");
    const mapInfoContainer = document.getElementById("map-info-container");
    const mapCurrentIcon = document.getElementById("map-current-icon");

    if (!mapInfoDragBlock || !mapInfoContainer) return;

    const handleDragStart = (event) => {
      if (!isMapLoaded) return;

      event.preventDefault(); // 기본 클릭 동작 방지
      const startY = event.clientY;
      const originalY = mapInfoContainer.getBoundingClientRect().top;

      const handleDragging = (moveEvent) => {
        const deltaY = moveEvent.clientY - startY;

        const minY = window.innerHeight - 433; // 화면 하단에서 433px 위
        const maxY = window.innerHeight - 120; // 화면 하단에서 120px 위

        let newY = originalY + deltaY;
        newY = Math.max(minY, newY);
        newY = Math.min(maxY, newY);
        let currentIconY = newY - 67;

        mapInfoContainer.style.top = `${newY}px`; // top 속성으로 위치 조절
        mapCurrentIcon.style.top = `${currentIconY}px`;
      };

      const handleDragEnd = () => {
        document.removeEventListener("mousemove", handleDragging);
        document.removeEventListener("mouseup", handleDragEnd);
      };

      document.addEventListener("mousemove", handleDragging);
      document.addEventListener("mouseup", handleDragEnd);
    };

    mapInfoDragBlock.addEventListener("mousedown", handleDragStart);

    return () => {
      mapInfoDragBlock.removeEventListener("mousedown", handleDragStart);
    };
  }, [isMapLoaded]);
};
