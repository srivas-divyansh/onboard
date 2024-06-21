import Image from "next/image";
import Selection from "./selection";

const Hero = () => {
  return (
    <main className=" font-sans">
      <nav className=" fixed bg-[#FDFCFD] h-24 top-0 left-0 right-0 z-10">
        <div className=" w-max px-32 py-7 fixed">
          <Image
            src="/images/Logo.svg"
            alt="OnBoard Logo"
            width={200}
            height={80}
            priority={true}
            zIndex="10"
          />
        </div>
      </nav>
      <hero className=" w-full mt-24 mx-auto h-[80vh] -z-10">
        <Image
          src="/images/hero.svg"
          fill="true"
          objectFit="cover"
          zIndex="-10"
        />
        <h1 className="absolute top-56 right-48 z-0 text-[#F3F3F3] font-bold text-7xl leading-[5rem] text-right cursor-pointer">
          Let's Explore <br /> All Wonderful <br /> Destinations <br /> Come
          <b className=" text-[#12547C] "> On</b>
          <b className=" text-[#DD7A29] ">Board</b>
        </h1>
      </hero>
      <Selection />
    </main>
  );
};

export default Hero;
