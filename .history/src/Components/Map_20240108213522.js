import * as React from "react";
import Map from "react-map-gl";

const accessToken =
  "pk.eyJ1IjoiY2FybHBlZDQxNyIsImEiOiJjbHI1c2E1MWgyMXZtMmtxbWUzc21tMmFwIn0.yXjsy5SB4bfSPytcQchNAg";

function ReactMap() {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 14
      }}
      style={{ width: 600, height: 400, margin: "auto" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={accessToken}
    />
  );
}
export default ReactMap;
