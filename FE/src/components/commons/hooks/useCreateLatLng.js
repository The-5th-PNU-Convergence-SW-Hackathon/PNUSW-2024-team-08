export function useCreateLatLng() {
  const createLatLng = (lat, lng) => {
    if (
      typeof lat === "number" &&
      typeof lng === "number" &&
      !isNaN(lat) &&
      !isNaN(lng)
    ) {
      return new google.maps.LatLng(lat, lng);
    }
    console.error("Invalid latitude or longitude:", lat, lng);
    return null;
  };

  return { createLatLng };
}
