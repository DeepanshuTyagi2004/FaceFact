import Image from "next/image";
import Hero from "../components/Hero";
import FileUploader from "../components/FileUploader";

export default function Home() {
  return (
    <main className="relative bg-black items-center flex-col justify-center mx-auto sm:px-10 px-5 scroll-smooth overflow-clip">
      <div className="max-w-7xl w-full mx-auto">
        <Hero />
        <FileUploader />
      </div>
    </main>
  );
}
