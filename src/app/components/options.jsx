"use client";
import React, { useState, useEffect } from "react";

const Options = () => {
  const [selectedOption, setSelectedOption] = useState("time");

  useEffect(() => {
    setSelectedOption("time");
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 gap-10">
      <div
        className={`option1 h-40 bg-[#F9F9F9] border border-slate-700 rounded-md flex flex-col justify-center cursor-pointer transition-all ${
          selectedOption === "time"
            ? " bg-orange-500 opacity-90 border-slate-400 scale-105 text-[#fcfdfc] "
            : ""
        }`}
        onClick={() => handleOptionClick("time")}
      >
        <h2 className=" text-center text-3xl font-bold p-1">
          Time Efficient Path
        </h2>
        <p className=" text-center text-xl font-medium w-2/3 mx-auto p-1">
          Find the path that takes the least time from Your Location to Your
          Destination
        </p>
      </div>
      <div
        className={`option2 h-40 bg-[#F9F9F9] border border-slate-700 rounded-md flex flex-col justify-center cursor-pointer transition-all ${
          selectedOption === "cost"
            ? "bg-orange-500 opacity-90 border-slate-400 scale-105 text-[#fcfdfc]"
            : ""
        }`}
        onClick={() => handleOptionClick("cost")}
      >
        <h2 className=" text-center text-3xl font-bold p-1">
          Cost Efficient Path
        </h2>
        <p className=" text-center text-xl font-medium w-2/3 mx-auto p-1">
          Find the path that takes the least money based on Bus Prices in your
          Area.
        </p>
      </div>
    </div>
  );
};

export default Options;
