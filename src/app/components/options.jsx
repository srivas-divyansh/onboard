import Image from "next/image";

const Options = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 gap-10">
      <div className="h-40 bg-[#F9F9F9] border border-slate-700 rounded-md flex flex-col justify-center cursor-pointer ">
        <h2 className=" text-center text-3xl font-bold p-1">
          Time Efficient Path
        </h2>
        <p className=" text-center text-xl font-medium w-2/3 mx-auto p-1">
          Find the path that takes the least time from Your Location to Your
          Destination
        </p>
      </div>
      <div className="h-40 bg-[#F9F9F9] border border-slate-700 rounded-md flex flex-col justify-center  cursor-pointer">
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
