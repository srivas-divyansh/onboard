"use client";
import Image from "next/image";
import Selection from "./components/selection";
import Map from "./components/map";
import Options from "./components/options";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { useLoading } from "../../context/loadContext";
import Loading from "./components/loading";

export default function Main() {
  const { loading } = useLoading();
  return (
    <main className=" h-[220vh] font-sans flex flex-col items-center justify-between p-24">
      <div className="h-[100vh] z-10">
        <Hero />
      </div>
      <div className=" -mt-[10rem] z-10">
        <Selection />
      </div>
      <Map />
      <Options />
      <div className="relative w-full">
        <Footer />
      </div>
      {loading && <Loading />}
    </main>
  );
}
