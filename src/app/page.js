import Image from "next/image";
import Home from "./home/page";

export default function Main() {
  return (
    <main className=" font-sans flex h-[300vh] flex-col items-center justify-between p-24">
      <Home />
    </main>
  );
}
