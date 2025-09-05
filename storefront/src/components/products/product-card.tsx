import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProductCard() {
  return (
    <div
      className="col-span-1 w-full h-auto box-border p-3 sm:p-5 flex flex-col justify-start items-start bg-[var(--primary)] rounded-xl border-2 
    border-black relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:border-2 
    after:border-black after:z-[-1] after:rounded-xl after:transition-all after:duration-300 after:ease-in-out xl:hover:after:translate-x-2 
    xl:hover:after:translate-y-2 hover:after:translate-x-1 hover:after:translate-y-1"
    >
      <Link href="/products/1" className="w-full h-auto aspect-square bg-white rounded-lg flex justify-center items-center overflow-hidden">
        <Image
          src="/images/products/Growel-Nutriva-Premium.png"
          alt="product"
          width={600}
          height={600}
          className="min-w-full min-h-full object-cover"
        />
      </Link>
      <Link href="/products/1" className="text-base sm:text-base font-medium text-white mt-3">
        Growel Nutriva Premium
      </Link>
      <Link href="/products/1" className="text-xs sm:text-sm text-white/90 mt-2 hidden sm:sm:line-clamp-3">
        Scientifically formulated, complete and balanced nutrition for L.vannamei Assured rapid shrimp growth and optimum feed conversion ratio
        Superior quality with high water stability Manufactured with latest proven technology
      </Link>
      <Link href="/products/1">
        <Button type="button" className="mt-2 sm:mt-5 bg-white text-black border-black border-2 text-sm" variant={"default"}>
          See more
        </Button>
      </Link>
    </div>
  );
}
