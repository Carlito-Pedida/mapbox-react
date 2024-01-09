import React, { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup
} from "react-map-gl";

import { FaLocationDot } from "react-icons/fa6";

const accessToken =
  "pk.eyJ1IjoiY2FybHBlZDQxNyIsImEiOiJjbHI1c2E1MWgyMXZtMmtxbWUzc21tMmFwIn0.yXjsy5SB4bfSPytcQchNAg";

function ReactMap() {
  const [showPopup, setShowPopup] = useState(true)
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
      {showPopup && (
        <Popup
          longitude={-100}
          latitude={40}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          You are here
        </Popup>
      )}
    </Map>
  );
}
export default ReactMap;
