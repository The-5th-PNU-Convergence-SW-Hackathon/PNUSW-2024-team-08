import { useCreateLatLng } from "../../../../../../src/components/commons/hooks/useCreateLatLng";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useUpdateMarkers = (
  map,
  sheltersToDisplay,
  markersRef,
  userLocation,
  setCurrentLocation,
  selectedShelterId
) => {
  const router = useRouter();
  const { createLatLng } = useCreateLatLng();

  useEffect(() => {
    if (
      !map ||
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
        console.log("Marker Position:", markerPosition); // 디버깅을 위한 로그 추가
        if (!markerPosition) return;

        const marker = new AdvancedMarkerElement({
          position: markerPosition,
          map,
          title: markerData.name,
        });
        console.log("Marker Created at:", marker.position); // 디버깅을 위한 로그 추가

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

          // InfoWindow가 열릴 때 '자세히 보기' 클릭 이벤트 추가
          document
            .getElementById(`shelter-${markerData.id}`)
            .addEventListener("click", () => {
              router.push(`/adopt/shelters/${markerData.id}`);
            });
        };

        CustomInfoWindow.draw = function () {
          if (!this.div) return; // this.div가 정의되어 있는지 확인
          const overlayProjection = this.getProjection();
          const position = overlayProjection.fromLatLngToDivPixel(
            marker.position
          );
          const div = this.div;

          // Adjust the position to be above the marker
          const divHeight = div.offsetHeight;
          const divWidth = div.offsetWidth;
          const markerHeight = 40; // Approximate height of the marker icon

          div.style.left = position.x - divWidth / 2 + "px";
          div.style.top = position.y - divHeight - markerHeight - 3 + "px";

          console.log("InfoWindow Draw Position:", position); // 디버깅을 위한 로그 추가
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
        }); // 마커와 InfoWindow 배열에 추가

        let clickTimer = null;

        const handleClick = () => {
          if (CustomInfoWindow.getMap()) {
            CustomInfoWindow.setMap(null);
          } else {
            // 다른 모든 InfoWindow 닫기
            markersRef.current.forEach(({ infoWindow }) =>
              infoWindow.setMap(null)
            );
            CustomInfoWindow.setMap(map);

            // InfoWindow 위치를 약간 지연시켜 계산
            google.maps.event.addListenerOnce(map, "idle", () => {
              CustomInfoWindow.draw();
            });
          }
        };

        const handleDoubleClick = () => {
          clearTimeout(clickTimer);
          setCurrentLocation(markerData); // 더블 클릭 시 마커 위치로 이동
        };

        marker.element.addEventListener("click", () => {
          clickTimer = setTimeout(handleClick, 200); // 200ms 내에 더블 클릭이 발생하지 않으면 클릭 이벤트 실행
        });

        marker.element.addEventListener("dblclick", () => {
          clearTimeout(clickTimer);
          handleDoubleClick();
        });

        // 선택된 보호소 ID와 일치하면 InfoWindow 열기
        if (markerData.id === selectedShelterId) {
          if (!CustomInfoWindow.getMap()) {
            CustomInfoWindow.setMap(map);

            // InfoWindow 위치를 약간 지연시켜 계산
            google.maps.event.addListenerOnce(map, "idle", () => {
              CustomInfoWindow.draw();
            });
          }
        }
      });
    };

    updateMarkers();
    console.log("markersRef: ", markersRef);
  }, [
    map,
    sheltersToDisplay,
    markersRef,
    userLocation,
    setCurrentLocation,
    selectedShelterId,
  ]);
};

export default useUpdateMarkers;
