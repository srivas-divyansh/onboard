"use client";
import React, { useState, useEffect } from "react";

const LocationDisplay = () => {
  const [location, setLocation] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });

          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=NEXT_PUBLIC_MAPS_API_KEY`
          );
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            setNearestLocation(data.results[0].formatted_address);
          }
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {location ? (
        <div className=" text-xl font-semibold text-slate-900">
          <h2>Your Current Location:</h2>
          {nearestLocation && <p>{nearestLocation}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LocationDisplay;
