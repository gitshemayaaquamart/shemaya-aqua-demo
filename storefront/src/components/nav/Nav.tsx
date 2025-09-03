"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DesktopNav } from "./DesktopNav";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function Nav() {
  const isLgUp = useMediaQuery("(min-width: 1024px)");
  return (
    <nav className="w-full lg:container mx-auto py-2.5 flex justify-end items-center gap-2 relative">
      <div className="w-auto aspect-square flex justify-center items-center sm:absolute z-30 left-0 top-2">
        <Image src={logo} alt="Shemaya Aqua (Pvt) Ltd." className="w-10 sm:w-16 md:w-22 h-auto" />
      </div>
      <div className="w-[80%] md:w-auto h-auto flex justify-end items-center gap-1">
        <form action="" className="w-full max-w-full h-auto flex justify-center items-center gap-2">
          <Input type="text" placeholder="Search" className="w-[300px] max-w-full md:w-[550px] lg:w-[450px] h-[30px] md:h-auto text-sm" />
          <Button type="submit" className="w-auto md:h-auto h-[30px]">
            <Search fill="currentColor" size={35} />
          </Button>
        </form>
      </div>
      <div className="w-max flex justify-center items-center">{isLgUp ? <DesktopNav /> : <MobileNav />}</div>
    </nav>
  );
}
