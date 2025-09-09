// import { useState } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export const LocationPicker = ({ value, onChange }) => {
//   const [position, setPosition] = useState(value);

//   const MapEvents = () => {
//     useMapEvents({
//       click(e) {
//         const coords = { lat: e.latlng.lat, lng: e.latlng.lng };
//         setPosition(coords);
//         onChange(coords);
//       },
//     });
//     return null;
//   };

//   return (
//     <MapContainer
//       center={position.lat ? [position.lat, position.lng] : [48.3794, 31.1656]}
//       zoom={6}
//       style={{ height: "250px", width: "100%", borderRadius: "1rem" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {position.lat && <Marker position={[position.lat, position.lng]} />}
//       <MapEvents />
//     </MapContainer>
//   );
// };

import { useState, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LocateButton } from "../LocateButton/LocateButton";

export const LocationPicker = ({ value, onChange }) => {
  const [position, setPosition] = useState(value);

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
            console.log("getCurrentPosition ->", coords);
            setPosition(coords);
            if (typeof onChange === "function") onChange(coords);
            resolve(coords);
          },
          (err) => {
            console.warn("getCurrentPosition error:", err);
            reject(err);
          },
          {
            enableHighAccuracy: true,
            timeout: 7000, // ms
            maximumAge: 0,
            ...opts,
          }
        );
      });
    },
    [onChange]
  );

  // автопошук при монтуванні, якщо немає value
  useEffect(() => {
    if (!position?.lat) {
      getUserLocation().catch((err) => {
        console.warn("Авто-локейт не вдалось:", err?.message || err);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // запуск один раз при mount

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

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={
          position?.lat ? [position.lat, position.lng] : [48.3794, 31.1656]
        }
        zoom={position?.lat ? 13 : 6}
        style={{ height: "203px", width: "100%", borderRadius: "20px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position?.lat && <Marker position={[position.lat, position.lng]} />}
        <MapEvents />
        <LocateButton getUserLocation={getUserLocation} />
      </MapContainer>
    </div>
  );
};
