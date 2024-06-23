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
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`
          );
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            // Find the 'locality' type in the address components
            const locality = data.results[0].address_components.find(
              (component) => component.types.includes("locality")
            );
            // Find the 'sublocality' type in the address components
            const sublocality = data.results[0].address_components.find(
              (component) => component.types.includes("sublocality")
            );
            // Format the locality and sublocality
            let locationName = "";
            if (sublocality && locality) {
              locationName = `${sublocality.long_name}, ${locality.long_name}`;
            } else if (locality) {
              locationName = locality.long_name;
            }
            setNearestLocation(locationName);
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
        <div className="text-lg font-semibold text-slate-900">
          <h2>Your Current Location:</h2>
          {nearestLocation ? (
            <p className="text-[#12547c] font-bold text-2xl">
              {nearestLocation}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LocationDisplay;
