import React from "react";
import { Context } from "../store/appContext";

// Initialize and add the map
function initMap() {
  // The location of Black Lion Box
  const blb = { lat: 43.50779, lng: -5.67832 };
  // The map, centered at Black Lion Box
  const map = new google.maps.Map(document.getElementById("googlemaps"), {
    zoom: 18,
    center: blb,
  });
  // The marker, positioned at Black Lion Box
  const marker = new google.maps.Marker({
    position: blb,
    map: map,
  });
}

window.initMap = initMap;

export const GoogleMaps = () => {
  return <div id="googlemaps"></div>;
};
