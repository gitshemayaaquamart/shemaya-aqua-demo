"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const visionContainer = useRef<HTMLDivElement | null>(null);
  const visionTitle = useRef<HTMLHeadingElement | null>(null);
  const vision = useRef<HTMLParagraphElement | null>(null);
  const missionContainer = useRef<HTMLDivElement | null>(null);
  const missionTitle = useRef<HTMLHeadingElement | null>(null);
  const mission = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    gsap.from(visionTitle.current, {
      y: 550,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: visionContainer.current,
        start: "top+=-20% bottom",
        end: "bottom+=-50% top",
        scrub: true,
      },
    });
    gsap.from(vision.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: visionContainer.current,
        start: "top+=-20% bottom",
        end: "bottom+=-50% top",
        scrub: true,
      },
    });
    gsap.from(missionTitle.current, {
      y: 550,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: missionContainer.current,
        start: "top+=-20% bottom",
        end: "bottom+=-50% top",
        scrub: true,
      },
    });
    gsap.from(mission.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: missionContainer.current,
        start: "top+=-20% bottom",
        end: "bottom+=-50% top",
        scrub: true,
      },
    });
  });

  return (
    <section className="container mx-auto min-h-[50vh] h-auto relative overflow-visible box-border px-10 lg:px-22 my-22 sm:my-32">
      <div
        className="absolute w-full h-auto top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50%] flex justify-center items-center 
      pointer-events-none z-[-2] overflow-clip"
      >
        <Image
          src="/images/sri-lanka.svg"
          alt="Sri Lanka"
          width={600}
          height={600}
          className="min-w-[230vw] sm:min-w-full xl:min-w-full min-h-auto xl:min-h-[800px] 2xl:min-h-[1000px] opacity-50"
        ></Image>
      </div>
      <div ref={visionContainer} className="w-full h-auto flex flex-col justify-center items-end mb-10 sm:mb-22 lg:mb-32">
        <div className="w-full h-auto flex justify-start items-center mb-8">
          <h1 ref={visionTitle} className="text-4xl sm:text-6xl text-[var(--primary)]">
            Our Vision
          </h1>
        </div>
        <div className="w-full sm:w-4/5 md:w-3/5 h-auto flex justify-end items-center">
          <p ref={vision} className="text-right text-base">
            To be a leader in Srilanka in the aquaculture sector and also to make Shemaya Aqua Mart (PVT) ltd.one of the trustworthy enterprises in
            Sri Lanka.
          </p>
        </div>
      </div>
      <div ref={missionContainer} className="w-full h-auto flex flex-col justify-center items-end">
        <div className="w-full h-auto flex justify-start items-center mb-8">
          <h1 ref={missionTitle} className="text-4xl sm:text-6xl text-[var(--primary)]">
            Our Mission
          </h1>
        </div>
        <div className="w-full sm:w-4/5 md:w-3/5 h-auto flex justify-end items-center">
          <p ref={mission} className="text-right text-base">
            We want to support new, sustainable and efficient aquaculture, through the introduction of innovative technologies and the best service
            and advice for our clients, developing projects to meet their needs and accompanying them in every step as they grow.
          </p>
        </div>
      </div>
    </section>
  );
}
