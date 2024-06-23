import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = ({ pathData }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markers = useRef([]);
  const directionsRendererRef = useRef(null);

  useEffect(() => {
    if (!mapLoaded && pathData) {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      loader
        .load()
        .then(() => {
          try {
            mapInstance.current = new google.maps.Map(mapRef.current, {
              center: { lat: 19.07609, lng: 72.877426 },
              zoom: 8,
            });

            setMapLoaded(true);
          } catch (error) {
            console.error("Error initializing map:", error);
          }
        })
        .catch((error) => {
          console.error("Error loading Google Maps API:", error);
        });
    }
  }, [mapLoaded, pathData]);

  useEffect(() => {
    if (mapLoaded && pathData) {
      const pathCoordinates = pathData.Path.map((location) => ({
        lat: location[0],
        lng: location[1],
      }));

      // Clear existing markers
      markers.current.forEach((marker) => {
        marker.setMap(null);
      });
      markers.current = [];

      // Start marker
      markers.current.push(
        new google.maps.Marker({
          position: pathCoordinates[0],
          map: mapInstance.current,
          label: "A",
        })
      );

      // Middle markers
      for (let i = 1; i < pathCoordinates.length - 1; i++) {
        markers.current.push(
          new google.maps.Marker({
            position: pathCoordinates[i],
            map: mapInstance.current,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 4.2,
              fillOpacity: 0.7,
              strokeColor: "orange",
            },
          })
        );
      }

      // End marker
      markers.current.push(
        new google.maps.Marker({
          position: pathCoordinates[pathCoordinates.length - 1],
          map: mapInstance.current,
          label: "B",
        })
      );

      const bounds = new google.maps.LatLngBounds();
      pathCoordinates.forEach((coord) => {
        bounds.extend(coord);
      });
      const centerPoint = bounds.getCenter();

      mapInstance.current.setCenter(centerPoint);
      mapInstance.current.fitBounds(bounds);

      for (let i = 0; i < pathCoordinates.length - 1; i++) {
        calculateAndDisplayRoute(
          mapInstance.current,
          pathCoordinates[i],
          pathCoordinates[i + 1]
        );
      }
    }
  }, [mapLoaded, pathData]);

  const calculateAndDisplayRoute = (map, origin, destination) => {
    const directionsService = new google.maps.DirectionsService();

    if (directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null);
    }

    const directionsRenderer = new google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
      preserveViewport: true,
    });

    directionsService
      .route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        directionsRendererRef.current = directionsRenderer;
      })
      .catch((error) => console.error("Directions request failed:", error));
  };

  if (!pathData) {
    return null; // Render nothing if pathData is not available
  }

  return (
    <main
      ref={mapRef}
      className="my-8 h-[32rem] bg-[#ffecdc] w-full rounded-lg flex flex-row justify-between px-16 items-center gap-11 font-dm "
    ></main>
  );
};

export default Map;
