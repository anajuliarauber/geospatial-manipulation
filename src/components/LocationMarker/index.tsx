import  { useEffect, useState } from "react";
import {  Marker, Popup, useMap } from "react-leaflet";
import mapPin from "../../assets/pin.svg";
import Leaflet from "leaflet";

 const icon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [40, 40],
    iconAnchor: [20, 45],
    popupAnchor: [0, -40],
  });


export function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      console.log(e);
      const radius = e.accuracy;
      const circle = Leaflet.circle(e.latlng, radius);
      console.log(circle)
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icon} title="teste">
      <Popup>
        You are here.
      </Popup>
    </Marker>
  );
}