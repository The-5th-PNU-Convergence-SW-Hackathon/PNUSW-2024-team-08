import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
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

  useEffect(() => {
    if (userLocation.lat && userLocation.lng) {
      console.log(userLocation);
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
    // sheltersToDisplay가 변경될 때마다 실행될 로직
    if (sheltersToDisplay.length > 0) {
      if (searchSuccess && searchResults.length > 0) {
        shelterLocationDetail(searchResults[0]);
      } else if (!searchSuccess) {
        setCurrentLocation(initialLocation);
      }
    }
  }, [sheltersToDisplay]);

  useGoogleMapsScript(async () => {
    if (!locationLoaded) return;

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
          mapId: "e5dafb91d67d6c4d", // 추가된 부분
        });
        setIsMapLoaded(true);

        new AdvancedMarkerElement({
          position: initialMarkerPosition,
          map: mapRef.current,
          title: "Initial Location",
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

    setSelectedShelterId(location.id); // 선택된 보호소 ID 업데이트

    // 선택된 보호소 요소로 스크롤
    let selectedShelterElement = document.querySelector(
      `[data-id="${location.id}"]`
    );

    // 선택된 보호소 요소가 없을 경우 첫 번째 보호소로 스크롤
    if (!selectedShelterElement) {
      selectedShelterElement = document.querySelector(
        `[data-id="${sheltersToDisplay[0].id}"]`
      );
    }

    if (selectedShelterElement) {
      console.log(selectedShelterElement);
      // 사파리 호환성을 위해 scrollIntoView 옵션 수정
      selectedShelterElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    // 상태가 업데이트된 후에 중앙으로 이동
    setTimeout(() => {
      mapRef.current.panTo(new google.maps.LatLng(location.lat, location.lng));
      mapRef.current.setZoom(15);
    }, 200);
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
    selectedShelterId // 선택된 보호소 ID 전달
  );

  return {
    isMapLoaded,
    sortedShelters,
    initialLocation,
    setCurrentLocation,
    shelterLocationDetail,
    selectedShelterId, // 선택된 보호소 ID 반환
    sheltersToDisplay, // 상태로 관리되는 sheltersToDisplay 반환
  };
};
