import * as React from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import { FaLocationDot } from "react-icons/fa6";

const accessToken =
  "pk.eyJ1IjoiY2FybHBlZDQxNyIsImEiOiJjbHI1c2E1MWgyMXZtMmtxbWUzc21tMmFwIn0.yXjsy5SB4bfSPytcQchNAg";

function ReactMap() {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: -96.808891,
        latitude: 32.779167,
        zoom: 3
      }}
      style={{ width: 600, height: 400, margin: "auto" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={accessToken}
    >
      <NavigationControl />
      <Marker longitude={-96.808891} latitude={32.779167} anchor="bottom">
        <FaLocationDot />
      </Marker>
    </Map>
  );
}
export default ReactMap;