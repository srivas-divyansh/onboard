import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = useRef(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      await loader.load();
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 19.07609, lng: 72.877426 },
        zoom: 8,
      });

      fetch("/sampleLocation.json")
        .then((response) => response.json())
        .then((data) => {
          setLocations(data.Path);

          const pathCoordinates = data.Path.map((location) => ({
            lat: location[0],
            lng: location[1],
          }));

          // Start marker
          new google.maps.Marker({
            position: pathCoordinates[0],
            map,
          });

          // Middle markers
          for (let i = 1; i < pathCoordinates.length - 1; i++) {
            new google.maps.Marker({
              position: pathCoordinates[i],
              map,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 4.2,
                fillOpacity: 0.7,
                strokeColor: "orange",
              },
            });
          }

          // End marker
          new google.maps.Marker({
            position: pathCoordinates[pathCoordinates.length - 1],
            map,
          });

          const bounds = new google.maps.LatLngBounds();
          pathCoordinates.forEach((coord) => {
            bounds.extend(coord);
          });
          const centerPoint = bounds.getCenter();

          map.setCenter(centerPoint);
          map.fitBounds(bounds);

          for (let i = 0; i < pathCoordinates.length - 1; i++) {
            calculateAndDisplayRoute(
              map,
              pathCoordinates[i],
              pathCoordinates[i + 1]
            );
          }
        });
    };

    initializeMap();
  }, []);

  const calculateAndDisplayRoute = (map, origin, destination) => {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
      preserveViewport: true, // This will prevent the DirectionsRenderer from auto-centering the map
    });

    directionsService
      .route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  };

  return (
    <main
      ref={mapRef}
      className="my-8 h-[32rem] bg-[#ffecdc] w-full rounded-lg flex flex-row justify-between px-16 items-center gap-11 font-dm "
    ></main>
  );
};

export default Map;
