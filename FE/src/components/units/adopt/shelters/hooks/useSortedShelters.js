import { useState, useEffect } from "react";

// Haversine 공식을 사용하여 두 지점 사이의 거리 계산
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // 지구의 반경(km)
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // 거리(km)
}

// 주어진 위치에 가장 가까운 동물보호소를 정렬하는 훅
export default function useSortedShelters(shelters, lat, lng) {
  const [sortedShelters, setSortedShelters] = useState([]);

  useEffect(() => {
    if (!shelters || shelters.length === 0 || lat == null || lng == null) {
      setSortedShelters([]);
      return;
    }

    const sorted = shelters.sort((a, b) => {
      const distanceA = calculateDistance(lat, lng, a.lat, a.lng);
      const distanceB = calculateDistance(lat, lng, b.lat, b.lng);
      return distanceA - distanceB;
    });

    setSortedShelters(sorted);
  }, [shelters, lat, lng]);

  return sortedShelters;
}
