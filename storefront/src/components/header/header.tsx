import Image from "next/image";
import VideoPreview from "./video-preview";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto w-full md:container md:max-w-screen h-[calc(100vh-60px)] max-h-[900px] min-h-[500px] box-border px-1 2xl:px-14">
      <div className="w-full h-full rounded-xl bg-[var(--primary)]/40 relative border-2 border-black">
        <div
          className="w-full xl:container mx-auto py-2 h-auto flex justify-start items-center xl:absolute xl:-top-12 xl:left-1/2 
        xl:translate-x-[-50%] xl:z-10 xl:pointer-events-none box-border px-2"
        >
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Shemaya Aqua (Pvt) Ltd."
              width={600}
              height={600}
              className="w-20 md:w-20 xl:w-24 h-auto pointer-events-auto"
            />
          </Link>
        </div>
        <VideoPreview />
        <div className="w-full h-auto xl:h-full flex flex-col justify-center sm:justify-start items-center gap-5 box-border px-3 pt-22 xl:pt-56">
          <p className="text-sm sm:text-base md:text-xl text-center text-white">Shemaya Aqua Mart (Pvt) Ltd.</p>
          <h1
            className="text-center text-3xl sm:text-5xl 2xl:text-6xl uppercase font-medium text-white leading-14 sm:leading-18 md:leading-22 2xl:leading-28 
          [-webkit-text-stroke:1px_black] xl:[-webkit-text-stroke:2px_black]"
          >
            Your one-stop Partner for Shrimp <br />
            <span className="relative">
              Farming Success
              <div className="absolute bottom-0 left-0 flex justify-center items-center w-full h-auto z-[-1]">
                <Image src="/images/header-line.svg" alt="Shemaya Aqua (Pvt) Ltd." width={600} height={600} className="w-full h-auto" />
              </div>
            </span>
          </h1>
          <Button variant="default" size="lg" className="mt-3 sm:mt-10 md:mt-16 text-sm md:text-lg px-4 h-10 md:px-8 md:h-12">
            Explore
          </Button>
        </div>
      </div>
    </header>
  );
  1;
}
