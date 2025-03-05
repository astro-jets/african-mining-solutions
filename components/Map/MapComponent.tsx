"use client"
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
interface MapProps {
  center: [number, number];
  zoom: number;
}

const MapComponent: React.FC<MapProps> = ({ center, zoom }) => {
  useEffect(() => {
    // Access Leaflet methods on client-side if needed
    if (typeof window !== 'undefined') {
    }
  }, []);

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={new L.Icon({ iconUrl: "/src/img/marker.png" })} position={center} />
    </MapContainer>
  );
};

export default MapComponent;
