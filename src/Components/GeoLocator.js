// // MapComponent.js
// import React, { useState, useEffect } from "react";
// import ReactMapGL from "react-map-gl";
// import { geolocator } from "geolocator";

// const accessToken =


// const MapComponent = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 0,
//     longitude: 0,
//     zoom: 10
//   });

//   useEffect(() => {
//     // Get user's geolocation
//     geolocator.locateByIP((err, location) => {
//       if (!err) {
//         setViewport((prevViewport) => ({
//           ...prevViewport,
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude
//         }));
//       }
//     });
//   }, []); // Run only once when the component mounts

//   return (
//     <ReactMapGL
//       {...viewport}
//       width="100%"
//       height="100%"
//       mapStyle="mapbox://styles/mapbox/streets-v11"
//       onViewportChange={(newViewport) => setViewport(newViewport)}
//       mapboxApiAccessToken={accessToken}
//     />
//   );
// };

// export default MapComponent;
