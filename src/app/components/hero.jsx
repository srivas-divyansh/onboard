"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase";
import LocationDisplay from "./liveLocation";

const Hero = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <main className=" font-sans">
      <nav className=" fixed bg-[#FDFCFD] h-24 top-0 left-0 right-0 z-20 flex flex-row px-32 justify-between items-center">
        <div className=" w-max">
          <Image
            src="/images/Logo.svg"
            alt="OnBoard Logo"
            width={200}
            height={80}
            zIndex="10"
            loading="lazy"
          />
        </div>
        <LocationDisplay />

        <div>
          <button
            onClick={handleLogout}
            className="bg-[#12547c] px-4 py-3 text-[#fdfcfd] rounded-md text-xl font-semibold"
          >
            Logout
          </button>
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
    </main>
  );
};

export default Hero;
