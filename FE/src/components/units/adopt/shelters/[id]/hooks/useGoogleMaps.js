import { useState, useEffect } from "react";
import useGoogleMapsScript from "./useGoogleMapsScript";
import { useCreateLatLng } from "../../../../../../../src/components/commons/hooks/useCreateLatLng";

export const useGoogleMaps = (mapRef, shelter) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [initialLocation, setInitialLocation] = useState(null);
  const { createLatLng } = useCreateLatLng();

  useGoogleMapsScript(async () => {
    if (window.google && mapRef.current && initialLocation) {
      // Load the required libraries from Google Maps API
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      // Initialize the map if it's not already initialized
      if (!mapRef.current.map) {
        const initialMarkerPosition = createLatLng(
          initialLocation.lat,
          initialLocation.lng
        );
        if (!initialMarkerPosition) return;

        mapRef.current.map = new Map(mapRef.current, {
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          center: initialMarkerPosition,
          zoom: 16,
          mapId: "e5dafb91d67d6c4d", // Ensure you have a valid Map ID
          disableDoubleClickZoom: true,
        });
        setIsMapLoaded(true);
      }
    }
  });

  useEffect(() => {
    if (shelter) {
      const shelterLocation = {
        lat: shelter.lat,
        lng: shelter.lng,
      };
      if (shelterLocation.lat && shelterLocation.lng) {
        setInitialLocation(shelterLocation);
      }
    }
  }, [shelter]);

  useEffect(() => {
    if (initialLocation && isMapLoaded) {
      // Custom InfoWindow setup
      const infoWindowContent = document.createElement("div");
      infoWindowContent.style.backgroundColor = "white";
      infoWindowContent.style.borderRadius = "8px";
      infoWindowContent.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
      infoWindowContent.style.padding = "12px";
      infoWindowContent.style.position = "absolute";
      infoWindowContent.style.fontSize = "16px";
      infoWindowContent.style.fontWeight = "bold";
      infoWindowContent.innerText = shelter.name;

      const CustomInfoWindow = new google.maps.OverlayView();

      CustomInfoWindow.onAdd = function () {
        this.div = infoWindowContent;
        const panes = this.getPanes();
        panes.floatPane.appendChild(this.div);
      };

      CustomInfoWindow.draw = function () {
        if (!this.div) return;
        const overlayProjection = this.getProjection();
        const position =
          overlayProjection.fromLatLngToDivPixel(initialLocation);
        const div = this.div;

        const divHeight = div.offsetHeight;
        const divWidth = div.offsetWidth;
        const markerHeight = 40; // Approximate height of the marker icon

        div.style.left = position.x - divWidth / 2 + "px";
        div.style.top = position.y - divHeight - markerHeight - 3 + "px";
      };

      CustomInfoWindow.onRemove = function () {
        if (this.div && this.div.parentNode) {
          this.div.parentNode.removeChild(this.div);
        }
        this.div = null;
      };

      CustomInfoWindow.setMap(null);

      let isInfoWindowOpen = true;

      // Add the marker to the map
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: initialLocation,
        map: mapRef.current.map,
        title: shelter.name,
      });

      CustomInfoWindow.setMap(mapRef.current.map);

      marker.addListener("click", () => {
        if (isInfoWindowOpen) {
          CustomInfoWindow.setMap(null);
        } else {
          CustomInfoWindow.setMap(mapRef.current.map);
        }
        isInfoWindowOpen = !isInfoWindowOpen;
      });

      console.log("Setting center to shelter location:", initialLocation);
      mapRef.current.map.setCenter(initialLocation);
      mapRef.current.map.setZoom(16);
    } else {
      console.log("Map is not loaded or initialLocation is not set");
    }
  }, [initialLocation, isMapLoaded]);

  return {
    isMapLoaded,
  };
};
