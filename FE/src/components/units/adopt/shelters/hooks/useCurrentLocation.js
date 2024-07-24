import { useEffect, useState } from "react";

export const useCurrentLocation = (
  defaultLocation = { lat: 35.234, lng: 129.0807 }
) => {
  const [location, setLocation] = useState(defaultLocation);
  const [locationLoaded, setLocationLoaded] = useState(false);

  useEffect(() => {
    let isActive = true; // 현재 컴포넌트가 활성 상태인지 추적하는 플래그
    let watchId;

    const fetchLocation = () => {
      if (!navigator.geolocation) {
        if (isActive) {
          setLocation(defaultLocation); // 기본 위치로 설정
          setLocationLoaded(true);
        }
        return;
      }
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          if (isActive) {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setLocationLoaded(true);
          }
        },
        (error) => {
          if (isActive) {
            setLocation(defaultLocation); // 에러 발생시 기본 위치로 설정
            setLocationLoaded(true);
          }
        },
        {
          enableHighAccuracy: true, // 고정밀 위치 정보 사용
          timeout: 10000, // 10초 내에 위치 정보를 가져오지 못하면 에러 발생
          maximumAge: 0, // 항상 최신 위치 정보 사용
        }
      );
    };

    fetchLocation();

    return () => {
      isActive = false; // 언마운트 시 isActive를 false로 설정
      if (watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId); // watchPosition 정리
      }
    };
  }, [defaultLocation.lat, defaultLocation.lng]);

  return { location, locationLoaded };
};
