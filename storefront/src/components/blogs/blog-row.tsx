"use client";
import BlogCard from "./blog-card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function BlogRow() {
  const cardLeft = useRef<HTMLDivElement | null>(null);
  const cardRight = useRef<HTMLDivElement | null>(null);
  const cardCenter = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.from(cardLeft.current, {
      x: -150,
      opacity: 0.5,
      rotate: -5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardLeft.current,
        start: "top+=20% bottom",
        end: "bottom+=20% top",
        scrub: true,
      },
    });
    gsap.from(cardCenter.current, {
      x: 0,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardCenter.current,
        start: "top+=20% bottom",
        end: "bottom+=20% top",
        scrub: true,
      },
    });
    gsap.from(cardRight.current, {
      x: 150,
      opacity: 0.5,
      rotate: 5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRight.current,
        start: "top+=20% bottom",
        end: "bottom+=20% top",
        scrub: true,
      },
    });
  });

  return (
    <div
      className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-8 sm:gap-y-0 gap-x-5 lg:gap-x-12 xl:gap-x-18 
    2xl:gap-x-28 box-border px-2 sm:px-3 md:px-14 lg:px-0 xl:px-10 overflow-hidden md:overflow-visible"
    >
      <div ref={cardLeft}>
        <BlogCard />
      </div>
      <div ref={cardCenter} className="hidden xl:flex">
        <BlogCard />
      </div>
      <div ref={cardRight}>
        <BlogCard />
      </div>
    </div>
  );
}
