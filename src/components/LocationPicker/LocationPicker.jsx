import { useState, useEffect, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LocateButton } from "../LocateButton/LocateButton";

export const LocationPicker = ({ value, onChange }) => {
  // 1. Початкові координати: або value, або центр України
  const [position, setPosition] = useState(
    value || { lat: 48.3794, lng: 31.1656 }
  );
  const defaultCoords = [48.3794, 31.1656];

  // 2. Функція отримання поточної локації
  const getUserLocation = useCallback(
    (opts = {}) => {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocation не підтримується в цьому браузері"));
          return;
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const coords = {
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
              accuracy: pos.coords.accuracy,
            };
            setPosition(coords); // оновлюємо локально
            if (typeof onChange === "function") onChange(coords); // передаємо Formik
            resolve(coords);
          },
          (err) => reject(err),
          { enableHighAccuracy: true, timeout: 7000, maximumAge: 0, ...opts }
        );
      });
    },
    [onChange]
  );

  // 3. Автопошук при монтуванні, якщо немає value
  useEffect(() => {
    if (!value?.lat) {
      getUserLocation().catch((err) =>
        console.warn("Авто-локейт не вдалось:", err?.message || err)
      );
    }
  }, [value, getUserLocation]);

  // 4. Обробка кліку на мапі
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
        setPosition(coords);
        if (typeof onChange === "function") onChange(coords);
      },
    });
    return null;
  };

  // 5. Оновлення центру мапи при зміні позиції
  const MapUpdater = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      if (position?.lat) {
        map.setView([position.lat, position.lng], 13);
      }
    }, [position, map]);
    return null;
  };

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={position?.lat ? [position.lat, position.lng] : defaultCoords}
        zoom={position?.lat ? 13 : 6}
        style={{ height: "203px", width: "100%", borderRadius: "20px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position?.lat && <Marker position={[position.lat, position.lng]} />}
        <MapEvents />
        <MapUpdater position={position} />
        <LocateButton getUserLocation={getUserLocation} />
      </MapContainer>
    </div>
  );
};
