"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Select from "react-select";

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

  useEffect(() => {
    fetch("/busStops.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedBusStops = data.map((stop) => ({
          value: stop.name,
          label: stop.name,
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

  return (
    <main className="my-0 h-32 bg-orange-500 w-full z-20 rounded-lg flex flex-row justify-between px-20 items-center gap-11 font-dm ">
      <h2 className="text-3xl font-semibold text-[#FDFCFD]"> Find My Route </h2>
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
        <button className="text-2xl font-semibold bg-[#11547C] hover:opacity-95 text-[#fdfcfd] px-4 py-3 rounded-md">
          Let's Go
        </button>
      </div>
    </main>
  );
};

export default Selection;
