import React from "react";

const PriceDetails = () => {
  return (
    <div className="w-full rounded-2xl bg-orange-100 h-28 flex flex-row justify-evenly">
      <div className="w-full px-10 my-auto min-w-60 flex flex-col items-center">
        <h1 className="text-lg font-bold text-[#12547c] leading-8">
          Total Distance
        </h1>
        <p className="text-[#262626] text-3xl font-bold">12.25 KM</p>
      </div>
      <div className="w-full px-10 my-auto min-w-60 flex flex-col items-center">
        <h1 className="text-lg font-bold text-[#12547c] leading-8">
          Total Cost
        </h1>
        <p className="text-[#262626] text-3xl font-bold"> INR 35 </p>
      </div>
      <div className="w-full px-10 my-auto min-w-60 items-center">
        <button className="rounded text-white text-xl font-semibold px-4 py-3 bg-[#12547c]">
          Book Ticket
        </button>
      </div>
    </div>
  );
};

export default PriceDetails;
