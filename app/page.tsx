import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 items-center flex-col justify-center mx-auto sm:px-10 px-5 scroll-smooth overflow-clip">
      <Hero />
    </main>
  );
}
