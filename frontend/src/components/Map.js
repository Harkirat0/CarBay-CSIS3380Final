import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const location = { lat: 49.170105, lng: -122.845677 };

    const loader = new Loader({
      apiKey: "AIzaSyBqx1GhaarHeBS4O0hEIbrYZiDS07iNBVw",
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 11,
      });

      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: "CarBay - Imagine the unimaginable",
      });

      return marker;
    });
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "90%", height: "400px", margin: "0 auto" }}
      className=" rounded-2xl"
    />
  );
};

export default Map;
