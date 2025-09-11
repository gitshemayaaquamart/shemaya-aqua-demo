import Image from "next/image";
import ProductRow from "./product-row";
import PageTitle from "../page-title";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurProducts() {
  return (
    <section className="container mx-auto flex flex-col justify-start items-center my-22 relative">
      <PageTitle title="Explore our products" className="mb-16" />
      <ProductRow />
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
