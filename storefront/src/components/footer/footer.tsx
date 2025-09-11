import { Facebook, Instagram, MapPin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto h-auto bg-[var(--primary)] rounded-t-2xl box-border pt-10 pb-2 px-3">
      <div className="w-auto max-w-full h-auto flex justify-center items-start gap-3 sm:gap-10 lg:gap-32">
        <div className="w-auto h-auto flex flex-col justify-start items-start">
          <h3 className="text-base sm:text-lg font-medium mb-5 text-white">Navigation</h3>
          <ul className="space-y-1">
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Products</Link>
            </li>
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Services</Link>
            </li>
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Blog</Link>
            </li>
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">About us</Link>
            </li>
          </ul>
        </div>
        <div className="w-auto h-auto flex flex-col justify-start items-center">
          <h3 className="text-base sm:text-lg font-medium mb-5 text-white text-center">Special links</h3>
          <ul className="space-y-1 text-center">
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="w-auto h-auto flex flex-col justify-start items-end">
          <h3 className="text-base sm:text-lg font-medium mb-5 text-white text-end flex gap-1">
            Address
            <MapPin size={20} fill="currentColor" />
          </h3>
          <ul className="space-y-1 text-end">
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li className="text-xs sm:text-sm font-normal text-white">
              <Link href="/">Careers</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-auto max-w-full mt-10 flex flex-col justify-start items-center">
        <h3 className="text-base sm:text-lg font-medium mb-5 text-white">Follow us on</h3>
        <ul className="flex justify-center items-center gap-8">
          <li className="text-white">
            <Link href="/">
              <Facebook size={35} fill="none" stroke="white" strokeWidth={1.5} />
            </Link>
          </li>
          <li className="text-white">
            <Link href="/">
              <Instagram size={35} fill="none" stroke="white" strokeWidth={1.5} />
            </Link>
          </li>
          <li className="text-white">
            <Link href="/">
              <Youtube size={35} fill="none" stroke="white" strokeWidth={1.5} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-auto max-w-full mt-10 flex flex-col justify-start items-center">
        <h3 className="text-base sm:text-lg font-medium mb-2 text-white">Follow us on</h3>
        <ul className="flex justify-center items-center">
          <li className="text-white text-sm">
            <Link href="mailto:info@shemayaaqua.com">info@shemayaaqua.com</Link>
          </li>
        </ul>
      </div>
      <div className="w-auto max-w-full mt-18 flex flex-col justify-start items-center">
        <h3 className="text-base sm:text-lg font-light text-white">Shemaya Aqua Mart (Pvt) Ltd.</h3>
        <ul className="flex justify-center items-center">
          <li className="text-white/80 text-xs">
            Design and Developed by{" "}
            <Link href="lukefernando.dev" className="underline">
              Luke Fernando
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
