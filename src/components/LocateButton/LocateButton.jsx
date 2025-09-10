import { useMap } from "react-leaflet";

export const LocateButton = ({ getUserLocation }) => {
  const map = useMap();

  const handleClick = async () => {
    try {
      const coords = await getUserLocation();
      if (coords?.lat && coords?.lng) {
        map.flyTo([coords.lat, coords.lng], 13, { duration: 0.8 });
      }
    } catch (err) {
      console.warn("Помилка при отриманні локації:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        width: "48px",
        height: "48px",
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1000,
        padding: "6px 10px",
        border: "none",
        borderRadius: "6px",
        color: "#4697D0",
        backgroundColor: "rgba(255,255,255,0.4)",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
      aria-label="Use my location"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="7" />
        <line x1="12" y1="1" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="23" />
        <line x1="1" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="23" y2="12" />
      </svg>
    </button>
  );
};
