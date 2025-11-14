"use client";
import Selection from "./components/selection";
import Map from "./components/map";
import Options from "./components/options";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { useLoading } from "../../context/loadContext";
import Loading from "./components/loading";
// import PriceDetails from "./components/priceDetails";
// import Chat from "./components/chatbot/chat";
import React, { useState } from "react";

export default function Main() {
  const { loading } = useLoading();
  const [pathData, setPathData] = useState(null);
  return (
    <main className=" h-[260vh] font-sans flex flex-col items-center justify-evenly p-24">
      {/* <div className="fixed z-50 right-0 bottom-0">
        <Chat />
      </div>
      <div className="fixed z-50 right-0 bottom-0">
        <Chat />
      </div> */}
      <div className="h-[100vh] ">
        <Hero />
      </div>
      <div className=" -mt-[6rem] ">
        <Selection />
      </div>
      <Map />
      <Options />
      {/* <div>
        <PriceDetails />
      </div> */}
      <div className="relative w-full">
        <Footer />
      </div>
      {loading && <Loading />}
    </main>
  );
}
