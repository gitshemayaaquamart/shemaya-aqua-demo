"use client";

import Image from "next/image";
import ProductRow from "./product-row";
import PageTitle from "../page-title";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function OurProducts() {
  const products = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.from(products.current, {
      y: 150,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: products.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  return (
    <section className="container mx-auto flex flex-col justify-start items-center my-22 relative">
      <PageTitle title="Explore our products" className="mb-16" />
      <div ref={products}>
        <ProductRow />
      </div>
      <Image src="/images/bubbles.svg" alt="Bubbles" width={600} height={600} className="w-18 sm:w-22 h-auto absolute top-5 right-2 z-[-1]" />
      <div className="mt-14 w-full h-auto flex justify-end items-center">
        <Link
          href="/products"
          className="text-sm sm:text-base font-medium text-black flex justify-center items-center hover:text-[var(--active)] 
        transition-all duration-100 ease-in-out"
        >
          See all
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
