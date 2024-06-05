import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "../LocationMarker";

import "leaflet/dist/leaflet.css";

function Map() {

  return (
    <MapContainer
      center={[-23.5489,-46.6388]}
      zoom={13}
      scrollWheelZoom
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}`}
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;