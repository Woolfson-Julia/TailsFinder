import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const LocationPicker = ({ value, onChange }) => {
  const [position, setPosition] = useState(value);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
        setPosition(coords);
        onChange(coords);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={position.lat ? [position.lat, position.lng] : [48.3794, 31.1656]}
      zoom={6}
      style={{ height: "250px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {position.lat && <Marker position={[position.lat, position.lng]} />}
      <MapEvents />
    </MapContainer>
  );
};
