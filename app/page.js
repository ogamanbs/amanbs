import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 flex justify-center items-center text-white">
      <div className="flex gap-3 items-center">
        <div className="h-8 w-8 overflow-hidden select-none">
            <Image
                priority
                className="w-full h-full object-cover pointer-events-none"
                src={"logo.svg"}
                alt="logo"
                width={10}
                height={10}
            />
        </div>
        <h1 className="text-xl">Aman Sharma</h1>
      </div>
    </div>
  );
}
