import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full bg-zinc-900 min-h-screen text-white overflow-x-hidden transition ease-in-out delay-150">
      <Navbar />
    </div>
  );
}
