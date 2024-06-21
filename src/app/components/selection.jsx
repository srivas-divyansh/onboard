import Image from "next/image";

const Selection = () => {
  return (
    <main className="my-0 h-32 bg-[#DD7A29] w-full z-20 rounded-lg flex flex-row justify-between px-20 items-center gap-11 font-dm ">
      <h2 className="text-3xl font-semibold text-[#FDFCFD]"> Find My Route </h2>
      <div className="flex flex-row justify-between gap-5">
        <input
          placeholder="Departure"
          className=" text-lg px-4 py-3 rounded-md"
        ></input>
        <button>
          <Image
            src="/images/dir.svg"
            alt="Icon"
            width={42}
            height={42}
            priority={true}
          />
        </button>
        <input
          placeholder="Destination"
          className="px-4 py-3 text-lg rounded-md"
        ></input>
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
