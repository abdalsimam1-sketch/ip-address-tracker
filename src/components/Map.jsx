import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      className="map-section"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
      <Marker position={[latitude, longitude]}>
        <Popup>IP Location</Popup>
      </Marker>
    </MapContainer>
  );
};
