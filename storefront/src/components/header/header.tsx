"use client";

import Image from "next/image";
import VideoPreview from "./video-preview";
import { Button } from "../ui/button";
import Link from "next/link";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const sliderContainer = useRef<HTMLDivElement | null>(null);
  const sliderUp = useRef<HTMLDivElement | null>(null);
  const sliderDown = useRef<HTMLDivElement | null>(null);
  const companyName = useRef<HTMLParagraphElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const explore = useRef<HTMLDivElement | null>(null);
  const [showSlider, setShowSlider] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.to(sliderUp.current, { opacity: 1, duration: 0 }, "<");
    timeline.to(sliderDown.current, { opacity: 1, duration: 0 }, "<");
    timeline.to(sliderUp.current, { width: "100vw", duration: 1 });
    timeline.to(sliderDown.current, { width: "100vw", duration: 1 }, "<");
    timeline.to(sliderContainer.current, { backgroundColor: "transparent", duration: 0 }); // <-- automatically reverted
    timeline.to(sliderUp.current, { top: "-100%", duration: 2, ease: "power3.out" }, "<");
    timeline.to(
      sliderDown.current,
      {
        bottom: "-100%",
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          document.body.style.overflow = "auto";
          setShowSlider(false);
        },
      },
      "<"
    );
    //
    timeline.from(title.current, { opacity: 0, duration: 2 }, "<");
    timeline.from(companyName.current, { opacity: 0, y: 15, duration: 0.5 }, "<");
    timeline.from(explore.current, { opacity: 0, y: -15, duration: 0.5 }, "<");
  });

  return (
    <header
      className="mx-auto w-full md:container md:max-w-screen h-[calc(100vh-100px)] max-h-[900px] min-h-auto box-border px-1 2xl:px-14 
    relative"
    >
      {showSlider && (
        <div ref={sliderContainer} className="fixed top-0 left-0 w-screen h-screen bg-white z-[90]">
          <div
            ref={sliderUp}
            className="fixed opacity-0 top-0 left-1/2 -translate-x-1/2 w-1 h-[50vh] bg-white z-[100] border-b-2 border-[var(--primary)]"
          ></div>
          <div
            ref={sliderDown}
            className="fixed opacity-0 bottom-0 left-1/2 -translate-x-1/2 w-1 h-[50vh] bg-white z-[100] border-t-2 border-[var(--primary)]"
          ></div>
        </div>
      )}
      <div className="w-full h-full min-h-auto rounded-xl bg-[var(--primary)]/40 relative border-2 border-black">
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
        <div className="w-full !min-h-max xl:h-full overflow-hidden flex flex-col justify-center sm:justify-start items-center gap-5 box-border px-3 pt-22 xl:pt-56">
          <p ref={companyName} className="text-sm sm:text-base md:text-xl text-center text-white">
            Shemaya Aqua Mart (Pvt) Ltd.
          </p>
          <h1
            ref={title}
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
          <div ref={explore}>
            <Button variant="default" size="lg" className="mt-3 sm:mt-10 md:mt-16 text-sm md:text-lg px-4 h-10 md:px-8 md:h-12">
              Explore
            </Button>
          </div>
        </div>
        <Button
          variant="default"
          size="lg"
          className="mt-3 sm:mt-10 md:mt-16 text-sm md:text-lg px-4 h-10 md:px-8 md:h-12 absolute -bottom-2 
        -right-2"
        >
          <Play size={20} fill="white" />
        </Button>
      </div>
    </header>
  );
}
