import { useCreateLatLng } from "../../../../../../src/components/commons/hooks/useCreateLatLng";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useUpdateMarkers = (
  map,
  sheltersToDisplay,
  markersRef,
  userLocation,
  setCurrentLocation,
  selectedShelterId,
  isMapLoaded
) => {
  const router = useRouter();
  const { createLatLng } = useCreateLatLng();

  useEffect(() => {
    if (
      !map ||
      !isMapLoaded ||
      !window.google ||
      !window.google.maps ||
      !window.google.maps.marker
    )
      return;

    const { AdvancedMarkerElement } = google.maps.marker;

    const updateMarkers = () => {
      // 기존 마커 제거
      markersRef.current.forEach(({ marker, infoWindow }) => {
        infoWindow.setMap(null);
        marker.setMap(null);
      });
      markersRef.current = [];

      // 보호소 마커 추가
      sheltersToDisplay.forEach((markerData) => {
        const markerPosition = createLatLng(markerData.lat, markerData.lng);
        if (!markerPosition) return;

        const marker = new AdvancedMarkerElement({
          position: markerPosition,
          map,
          title: markerData.name,
        });

        // 마커에 커서 포인터 스타일 적용
        marker.element.style.cursor = "pointer";

        const contentString = `
          <div>
            <div style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">${markerData.name}</div>            
            <div style="font-size: 12px; font-weight: 500; margin-bottom: 3px;">${markerData.careAddr}</div>
            <div style="font-size: 12px; font-weight: 500;">${markerData.careTel}</div>            
            <div id="shelter-${markerData.id}" style="text-decoration: underline; cursor: pointer; margin-top: 10px;">자세히 보기</div>
          </div>
        `;

        const CustomInfoWindow = new window.google.maps.OverlayView();
        CustomInfoWindow.onAdd = function () {
          const div = document.createElement("div");
          div.style.maxWidth = "280px";
          div.style.backgroundColor = "white";
          div.style.borderRadius = "8px";
          div.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
          div.style.padding = "18px 15px";
          div.style.position = "absolute";
          div.innerHTML = contentString;
          this.div = div;
          const panes = this.getPanes();
          panes.floatPane.appendChild(div);

          document
            .getElementById(`shelter-${markerData.id}`)
            .addEventListener("click", () => {
              router.push(`/adopt/shelters/${markerData.id}`);
            });
        };

        CustomInfoWindow.draw = function () {
          if (!this.div) return;
          const overlayProjection = this.getProjection();
          const position = overlayProjection.fromLatLngToDivPixel(
            marker.position
          );
          const div = this.div;

          const divHeight = div.offsetHeight;
          const divWidth = div.offsetWidth;
          const markerHeight = 40;

          div.style.left = position.x - divWidth / 2 + "px";
          div.style.top = position.y - divHeight - markerHeight - 3 + "px";

          console.log(
            `Custom InfoWindow Position for shelter ${markerData.id}:`,
            {
              left: div.style.left,
              top: div.style.top,
            }
          );
        };

        CustomInfoWindow.onRemove = function () {
          if (this.div) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
          }
        };

        CustomInfoWindow.setMap(null);

        markersRef.current.push({
          marker,
          infoWindow: CustomInfoWindow,
        });

        const handleClick = () => {
          if (CustomInfoWindow.getMap()) {
            CustomInfoWindow.setMap(null);
          } else {
            // 다른 모든 InfoWindow 닫기
            markersRef.current.forEach(({ infoWindow }) =>
              infoWindow.setMap(null)
            );
            CustomInfoWindow.setMap(map);

            CustomInfoWindow.draw();
          }
        };

        marker.element.addEventListener("click", handleClick);

        // 만약 selectedShelterId와 일치하면 해당 마커를 클릭
        if (markerData.id === selectedShelterId) {
          setTimeout(() => {
            handleClick();
          }, 300); // 500ms 지연
        }
      });
    };

    updateMarkers();
  }, [
    map,
    isMapLoaded,
    sheltersToDisplay,
    markersRef,
    userLocation,
    setCurrentLocation,
    selectedShelterId,
  ]);
};

export default useUpdateMarkers;
