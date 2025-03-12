"use client";
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

interface MapProps {
  center: [number, number];
  zoom: number;
  title: string;
}
const customIcon = L.divIcon({
  className: "custom-marker",
  html: ` <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="30" 
      height="30" 
      viewBox="0 0 24 24" 
      fill="red" 
      stroke="white" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 4.87 7 13 7 13s7-8.13 7-13c0-3.87-3.13-7-7-7z"></path>
      <circle cx="12" cy="9" r="3"></circle>
    </svg>`, // Using an emoji as an icon
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});
const MapComponent: React.FC<MapProps> = ({ center, zoom, title }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure any client-side logic runs properly
    }
  }, []);
  console.log("Deposit => ", center)
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '700px', width: '100%' }}>
      <TileLayer
        attribution='Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker
        position={center}
        icon={customIcon}
        title={title}
      />
    </MapContainer>
  );
};

export default MapComponent;
