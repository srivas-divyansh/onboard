"use client";
import Selection from "./components/selection";
import Map from "./components/map";
import Options from "./components/options";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { useLoading } from "../../context/loadContext";
import Loading from "./components/loading";
import PriceDetails from "./components/priceDetails";

export default function Main() {
  const { loading } = useLoading();
  return (
    <main className=" h-[260vh] font-sans flex flex-col items-center justify-evenly p-24">
      <div className="h-[100vh] ">
        <Hero />
      </div>
      <div className=" -mt-[6rem] ">
        <Selection />
      </div>
      <Map />
      <Options />
      <div>
        <PriceDetails />
      </div>
      <div className="relative w-full">
        <Footer />
      </div>
      {loading && <Loading />}
    </main>
  );
}
