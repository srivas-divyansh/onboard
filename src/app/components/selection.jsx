"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Select from "react-select";
import axios from "axios";
import Map from "./map";

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "48px",
    fontSize: "1.125rem",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

const Selection = () => {
  const [busStops, setBusStops] = useState([]);
  const [departure, setDeparture] = useState(null);
  const [destination, setDestination] = useState(null);
  const [pathData, setPathData] = useState(null);

  useEffect(() => {
    fetch("/busStops.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedBusStops = data.map((stop) => ({
          value: stop.name,
          label: stop.name,
          latitude: stop.latitude,
          longitude: stop.longitude,
        }));
        setBusStops(formattedBusStops);
      })
      .catch((error) => console.error("Error fetching bus stops:", error));
  }, []);

  const handleSwitch = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  // const handleLetsGo = () => {
  //   if (departure && destination) {
  //     const selectedDeparture = busStops.find(
  //       (stop) => stop.value === departure.value
  //     );
  //     const selectedDestination = busStops.find(
  //       (stop) => stop.value === destination.value
  //     );

  //     if (!selectedDeparture || !selectedDestination) {
  //       console.error("Selected departure or destination is invalid");
  //       return;
  //     }

  //     const data = {
  //       start: [selectedDeparture.latitude, selectedDeparture.longitude],
  //       end: [selectedDestination.latitude, selectedDestination.longitude],
  //     };

  //     axios
  //       .post("http://10.42.0.106:5000/getRoute", data, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((response) => {
  //         console.log("Response from server:", response.data);
  //         setPathData(response.data);
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           console.error("Error response:", error.response.data);
  //           console.error("Error status:", error.response.status);
  //           console.error("Error headers:", error.response.headers);
  //         } else if (error.request) {
  //           console.error("Error request:", error.request);
  //         } else {
  //           console.error("Error message:", error.message);
  //         }
  //         console.error("Error config:", error.config);
  //       });
  //   } else {
  //     console.error("Departure or destination not selected");
  //   }
  // };

  const handleLetsGo = () => {
    if (departure && destination) {
      const selectedDeparture = busStops.find(
        (stop) => stop.value === departure.value
      );
      const selectedDestination = busStops.find(
        (stop) => stop.value === destination.value
      );

      if (!selectedDeparture || !selectedDestination) {
        console.error("Selected departure or destination is invalid");
        return;
      }

      const data = {
        start: [selectedDeparture.latitude, selectedDeparture.longitude],
        end: [selectedDestination.latitude, selectedDestination.longitude],
      };

      // Check the current time
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      if (
        (currentHour >= 7 && currentHour <= 11) ||
        (currentHour >= 17 && currentHour <= 22)
      ) {
        axios
          .post("http://localhost:5000/getTrafficRoute", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("Traffic route response from server:", response.data);
            setPathData(response.data);
          })
          .catch((error) => {
            if (error.response) {
              console.error("Error response:", error.response.data);
              console.error("Error status:", error.response.status);
              console.error("Error headers:", error.response.headers);
            } else if (error.request) {
              console.error("Error request:", error.request);
            } else {
              console.error("Error message:", error.message);
            }
            console.error("Error config:", error.config);
          });
      } else {
        axios
          .post("http://localhost:5000/getRoute", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("Route response from server:", response.data);
            setPathData(response.data);
          })
          .catch((error) => {
            if (error.response) {
              console.error("Error response:", error.response.data);
              console.error("Error status:", error.response.status);
              console.error("Error headers:", error.response.headers);
            } else if (error.request) {
              console.error("Error request:", error.request);
            } else {
              console.error("Error message:", error.message);
            }
            console.error("Error config:", error.config);
          });
      }
    } else {
      console.error("Departure or destination not selected");
    }
  };

  return (
    <div>
      <main className="my-0 h-32 bg-orange-500 w-full z-20 rounded-lg flex flex-row justify-between px-20 items-center gap-11 font-dm ">
        <h2 className="text-3xl font-semibold text-[#FDFCFD]">
          {" "}
          Find My Route{" "}
        </h2>
        <div className="flex flex-row justify-between gap-5">
          <Select
            placeholder="Departure"
            value={departure}
            onChange={setDeparture}
            options={busStops}
            styles={customStyles}
            className="px-4 py-3 text-lg rounded-md min-w-56 max-w-80"
          />
          <button onClick={handleSwitch}>
            <Image
              src="/images/dir.webp"
              alt="Icon"
              width={42}
              height={42}
              priority={true}
            />
          </button>
          <Select
            placeholder="Destination"
            value={destination}
            onChange={setDestination}
            options={busStops}
            styles={customStyles}
            className="px-4 py-3 text-lg rounded-md min-w-56 max-w-80"
          />
        </div>
        <div>
          <button
            onClick={handleLetsGo}
            className="text-2xl font-semibold bg-[#11547C] hover:opacity-95 text-[#fdfcfd] px-4 py-3 rounded-md"
          >
            Let's Go
          </button>
        </div>
      </main>
      {pathData && <Map pathData={pathData} />}
    </div>
  );
};

export default Selection;
