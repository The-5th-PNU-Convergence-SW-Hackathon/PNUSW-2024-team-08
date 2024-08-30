import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useCurrentLocation } from "./useCurrentLocation";
import useSortedShelters from "./useSortedShelters";
import useGoogleMapsScript from "./useGoogleMapsScript";
import useUpdateMarkers from "./useUpdateMarkers";
import { useCreateLatLng } from "../../../../../../src/components/commons/hooks/useCreateLatLng";

export const useGoogleMaps = (
  ref,
  shelters,
  searchResults = [],
  searchSuccess = false
) => {
  const router = useRouter();
  const mapRef = useRef(null);
  const currentCenter = useRef({ lat: null, lng: null });
  const markersRef = useRef([]);
  const [initialLocation, setInitialLocation] = useState({
    lat: 35.234,
    lng: 129.0807,
  });
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [selectedShelterId, setSelectedShelterId] = useState(null);
  const { location: userLocation, locationLoaded } = useCurrentLocation();
  const sortedShelters = useSortedShelters(
    shelters,
    userLocation.lat,
    userLocation.lng
  );
  const [sheltersToDisplay, setSheltersToDisplay] = useState(sortedShelters);
  const { createLatLng } = useCreateLatLng();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (userLocation.lat && userLocation.lng) {
      setInitialLocation(userLocation);
    }
  }, [userLocation]);

  useEffect(() => {
    if (searchSuccess) {
      setSheltersToDisplay(searchResults);
    } else {
      setSheltersToDisplay(sortedShelters);
    }
  }, [searchSuccess, searchResults, sortedShelters]);

  useEffect(() => {
    if (sheltersToDisplay.length > 0) {
      if (searchSuccess && searchResults.length > 0) {
        shelterLocationDetail(searchResults[0]);
      } else if (!searchSuccess) {
        setCurrentLocation(initialLocation);
      }
    }
  }, [sheltersToDisplay]);

  useGoogleMapsScript(async () => {
    setIsScriptLoaded(true);

    if (!locationLoaded || !isScriptLoaded) return;

    if (window.google && ref.current) {
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      if (!mapRef.current) {
        const initialMarkerPosition = createLatLng(
          initialLocation.lat,
          initialLocation.lng
        );
        if (!initialMarkerPosition) return;

        mapRef.current = new Map(ref.current, {
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          center: initialMarkerPosition,
          zoom: 15,
          mapId: "e5dafb91d67d6c4d",
          disableDoubleClickZoom: true,
        });

        setIsMapLoaded(true);

        // 현재 위치 마커 추가 (커스텀 스타일 적용)
        const markerElement = document.createElement("div");
        markerElement.style.backgroundColor = "#66B2FF"; // 연한 파란색 배경
        markerElement.style.borderRadius = "50%"; // 원형으로 만들기
        markerElement.style.width = "20px"; // 마커의 너비
        markerElement.style.height = "20px"; // 마커의 높이
        markerElement.style.boxShadow = "1px 1px 15px rgba(0, 0, 0, 0.3)";
        markerElement.style.boxSizing = "border-box"; // 테두리를 포함하여 크기 계산

        new AdvancedMarkerElement({
          position: initialMarkerPosition,
          map: mapRef.current,
          title: "Initial Location",
          content: markerElement, // 커스텀 HTML 요소를 content로 설정
        });
      } else {
        const centerPosition = createLatLng(
          initialLocation.lat,
          initialLocation.lng
        );
        if (centerPosition) {
          mapRef.current.setCenter(centerPosition);
        }
      }
    }
  });

  const setCurrentLocation = (location) => {
    if (!isMapLoaded) return;

    setSelectedShelterId(location.id);

    let selectedShelterElement = document.querySelector(
      `[data-id="${location.id}"]`
    );

    if (!selectedShelterElement) {
      selectedShelterElement = document.querySelector(
        `[data-id="${sheltersToDisplay[0].id}"]`
      );
    }

    if (selectedShelterElement) {
      selectedShelterElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    google.maps.event.addListenerOnce(mapRef.current, "idle", () => {
      mapRef.current.panTo(new google.maps.LatLng(location.lat, location.lng));
      mapRef.current.setZoom(15);
    });
  };

  const shelterLocationDetail = (shelter) => {
    const mapCenter = mapRef.current.getCenter();
    currentCenter.current = { lat: mapCenter.lat(), lng: mapCenter.lng() };

    const isSameLocation =
      Math.abs(currentCenter.current.lat - shelter.lat) < 0.0001 &&
      Math.abs(currentCenter.current.lng - shelter.lng) < 0.0001;

    if (isSameLocation) {
      router.push(`/adopt/shelters/${shelter.id}`);
    } else {
      setCurrentLocation(shelter);
    }
  };

  useUpdateMarkers(
    mapRef.current,
    sheltersToDisplay,
    markersRef,
    userLocation,
    setCurrentLocation,
    selectedShelterId,
    isMapLoaded
  );

  return {
    isMapLoaded,
    sortedShelters,
    initialLocation,
    setCurrentLocation,
    shelterLocationDetail,
    selectedShelterId,
    sheltersToDisplay,
  };
};
