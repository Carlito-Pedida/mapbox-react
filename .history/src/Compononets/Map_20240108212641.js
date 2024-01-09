import mapboxgl from "mapbox-gl";
import React from "react";

const accessToken =
  "pk.eyJ1IjoiY2FybHBlZDQxNyIsImEiOiJjbHI1c2E1MWgyMXZtMmtxbWUzc21tMmFwIn0.yXjsy5SB4bfSPytcQchNAg";

const Map = () => {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    accessToken: { accessToken }
  });
  return map();
};

export default Map;
