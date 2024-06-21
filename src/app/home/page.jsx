import Image from "next/image";
import Hero from "../components/hero";
import Selection from "../components/selection";
import Map from "../components/map";

const Home = () => {
  return (
    <main className=" font-sans">
      <div className="h-[100vh] z-10">
        <Hero />
      </div>
      <div className=" -mt-16 z-20">
        <Selection />
      </div>
      <Map />
    </main>
  );
};

export default Home;
