import * as React from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl
} from "react-map-gl";

import { FaLocationDot } from "react-icons/fa6";

const accessToken = 

function ReactMap() {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: -96.808891,
        latitude: 32.779167,
        zoom: 5
      }}
      style={{ width: 600, height: 400, margin: "auto" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={accessToken}
    >
      <FullscreenControl />
      <NavigationControl />
      <Marker longitude={-96.808891} latitude={32.779167} anchor="bottom">
        <FaLocationDot />
      </Marker>
      <GeolocateControl />
    </Map>
  );
}
export default ReactMap;
