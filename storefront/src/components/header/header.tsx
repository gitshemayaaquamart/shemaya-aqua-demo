import Image from "next/image";
import VideoPreview from "./video-preview";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="mx-auto w-full md:container md:max-w-screen h-[calc(100vh-60px)] max-h-[900px] min-h-[500px] box-border px-1 2xl:px-14">
      <div className="w-full h-full overflow-hidden rounded-xl bg-[var(--primary)]/40 relative border-2 border-black">
        <VideoPreview />
        <div className="w-full h-full flex flex-col justify-start items-center gap-5 box-border pt-60">
          <p className="text-xl text-center text-white">Shemaya Aqua Mart (Pvt) Ltd.</p>
          <h1 className="text-center text-5xl 2xl:text-7xl uppercase font-medium text-white leading-22 2xl:leading-28 [-webkit-text-stroke:1px_black] xl:[-webkit-text-stroke:2px_black]">
            Your one-stop Partner for Shrimp <br />
            <span className="relative">
              Farming Success
              <div className="absolute bottom-0 left-0 flex justify-center items-center w-full h-auto z-[-1]">
                <Image src="/images/header-line.svg" alt="Shemaya Aqua (Pvt) Ltd." width={600} height={600} className="w-full h-auto" />
              </div>
            </span>
          </h1>
          <Button variant="default" size="lg" className="mt-16 text-lg">
            Explore
          </Button>
        </div>
      </div>
    </header>
  );
  1;
}
